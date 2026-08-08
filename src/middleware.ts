import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  LP_COOKIE,
  assertMatcherCoversLps,
  botPathOf,
  findVariant,
  lotteryPool,
  resolveLpPath,
  variantCookie,
  type Lp,
} from "@/lib/lp";
import { UTM_KEYS } from "@/lib/utm-constants";

// LP / variant の定義は @/lib/lp に集約。ここは「定義をどう URL と cookie に落とすか」だけを持つ。
// 焼く cookie は 2 種類:
//   - LP_COOKIE      : 最後にいた LP。/blog や /case が文脈に合ったヘッダーを出すのに使う。
//   - variantCookie(): その LP での variant。LP ごとに独立した cookie なので、
//                      複数 LP を回遊しても互いの値を上書きしない。

const COOKIE_OPTIONS = {
  maxAge: 60 * 60 * 24 * 30,
  path: "/",
  sameSite: "lax",
} as const;

const CRAWLER_UA =
  /Googlebot|bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|facebookexternalhit|Twitterbot|LinkedInBot|bot|crawl|spider/i;

// URL に utm_* が乗っていれば response に cookie を焼いて返す。乗っていないキーは既存 cookie を
// 上書きしない (= クライアントの旧 PersistUtm と同じ「値があるときだけ書く」セマンティクス)。
// 何も無ければ渡された response をそのまま返すだけ。JS/GTM 発火前=サーバー側で確実に捕捉する
// ので、アプリ内ブラウザや JS 無効環境、hydration 前の即送信でも取りこぼさない。
function persistUtm(request: NextRequest, response: NextResponse): NextResponse {
  const sp = request.nextUrl.searchParams;
  for (const key of UTM_KEYS) {
    const value = sp.get(key);
    if (value) {
      response.cookies.set(key, value, COOKIE_OPTIONS);
    }
  }
  return response;
}

export function middleware(request: NextRequest) {
  // LP / A/B 振り分けの結果 response を作り、最後に一度だけ utm cookie を焼いて返す。
  const revoleRoutingResponse = resolveLpRouting(request);
  return persistUtm(request, revoleRoutingResponse);
}

// 不要な Set-Cookie は付けない (レスポンスの CDN キャッシュを無駄に無効化しないため)。
function setCookies(
  request: NextRequest,
  response: NextResponse,
  lp: Lp,
  variantId?: string
): NextResponse {
  if (request.cookies.get(LP_COOKIE)?.value !== lp.id) {
    response.cookies.set(LP_COOKIE, lp.id, COOKIE_OPTIONS);
  }
  const name = variantCookie(lp.id);
  if (variantId && request.cookies.get(name)?.value !== variantId) {
    response.cookies.set(name, variantId, COOKIE_OPTIONS);
  }
  return response;
}

function resolveLpRouting(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;
  const hit = resolveLpPath(pathname);
  // matcher には載っているが LP 定義に無いパス (定義と matcher がズレたとき) は素通し。
  if (!hit) return NextResponse.next();

  const { lp, variant } = hit;
  const existing = request.cookies.get(variantCookie(lp.id))?.value;

  // variant の表示パスへの直接アクセスは、その variant に cookie を合わせる。
  // 抽選から外れた variant (lottery: false) もここを通るので、共有リンク等で直接来た人は
  // 表示されるしスティッキーにもなる。
  if (variant) {
    return setCookies(request, NextResponse.next(), lp, variant.id);
  }

  // ここから先は LP のホーム。variant を持たない LP は lp cookie だけ焼いて終わり。
  if (lp.variants.length === 0) {
    return setCookies(request, NextResponse.next(), lp);
  }

  // development 環境では A/B テストをスキップし、ホームをそのまま表示する
  // (各 variant は /c のような表示パスに直接アクセスして確認する)。
  if (
    process.env.APP_ENVIRONMENT === "development" &&
    process.env.ABTEST !== "enabled"
  ) {
    return setCookies(request, NextResponse.next(), lp);
  }

  // クローラには URL をホームのまま、本命 variant の中身を botPath 経由で見せる。
  // variant ルートに直接 rewrite すると variant 側の noindex metadata がホームに
  // 巻き込まれてしまうため、noindex を持たない専用ページに rewrite する。
  const botPath = botPathOf(lp);
  if (botPath && CRAWLER_UA.test(request.headers.get("user-agent") ?? "")) {
    return setCookies(
      request,
      NextResponse.rewrite(new URL(botPath, request.url)),
      lp
    );
  }

  // 既存 cookie が今も有効ならそれを維持 (スティッキー)、無ければ抽選プールから選ぶ。
  const pool = lotteryPool(lp);
  const chosen =
    findVariant(lp, existing) ??
    (pool.length > 0
      ? pool[Math.floor(Math.random() * pool.length)]
      : undefined);
  // 抽選対象が 1 つも無い場合のフォールバック (定義のミス)。ホームをそのまま出す。
  if (!chosen) return setCookies(request, NextResponse.next(), lp);

  // 決まった variant の表示パスへリダイレクトする。variant の path はホームと別である前提
  // (@/lib/lp の VariantDef 参照) なので、variant を持つ LP のホームは必ずここを通る。
  // pathname のみ書き換え、search (utm_* 等) と hash は保持する。
  // これをしないと Meta 広告等の UTM クエリが redirect で落ち、
  // GA4 のセッション参照元 / メディアが meta/paid_social として計測されなくなる。
  const url = request.nextUrl.clone();
  url.pathname = chosen.path;
  return setCookies(request, NextResponse.redirect(url), lp, chosen.id);
}

// matcher は Next.js がビルド時に静的解析するため literal 必須で、LPS から生成できない
// (変数を渡すと静的解析できず無視される)。LP を増やしたらここにも追記すること。
export const config = {
  matcher: [
    "/",
    "/c",
    "/d",
    "/e",
    "/f",
    "/g",
    "/h",
    "/i",
    "/j",
    "/k",
    "/startup",
  ],
};

// 定義と matcher のズレを開発時に警告する。
if (process.env.NODE_ENV !== "production") {
  assertMatcherCoversLps(config.matcher);
}
