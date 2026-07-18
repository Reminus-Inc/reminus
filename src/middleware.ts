import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { VARIANTS, type Variant } from "@/lib/ab-test";
import { UTM_KEYS } from "@/lib/utm-constants";

const AB_TEST_COOKIE = "ab-test-top";

// 振り分け対象の variant (VARIANTS) は @/lib/ab-test に定義。単一にすると全員そのバリアントに
// 固定（テスト停止）、複数あれば等確率で割り振る。ここから外した variant に既に cookie が付いて
// いる人 (例: 旧 "a"/"b") は次回 / アクセス時に VARIANTS.includes チェックで再抽選されるので、
// 自動的に新しい振り分けに乗り換わる。

const COOKIE_OPTIONS = {
  maxAge: 60 * 60 * 24 * 30,
  path: "/",
  sameSite: "lax",
} as const;

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
  // xNEXT 事例の共有用エイリアス。SNS (X 等) が og:image を画像URL単位で不採用
  // キャッシュした場合に、未見のURLとして新規クロールさせて OGP を取り直させる。
  // search (utm_* 等) は保持したまま本体 /case/xnext/ へ 307 で飛ばす。
  if (request.nextUrl.pathname === "/xnext_case") {
    const url = request.nextUrl.clone();
    url.pathname = "/case/xnext/";
    return NextResponse.redirect(url);
  }

  // A/B 振り分けの結果 response を作り、最後に一度だけ utm cookie を焼いて返す。
  return persistUtm(request, resolveAbTest(request));
}

function resolveAbTest(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;
  const existingVariant = request.cookies.get(AB_TEST_COOKIE)?.value;

  // development 環境では A/B テストをスキップし、各バリアントをそのまま表示する。
  // cookie は /blog などの下流で参照されるので、アクセスしたパスに合わせて同期する。
  if (
    process.env.APP_ENVIRONMENT === "development" &&
    process.env.ABTEST !== "enabled"
  ) {
    // /a は / にリダイレクト
    if (pathname === "/a") {
      const response = NextResponse.redirect(new URL("/", request.url));
      response.cookies.set(AB_TEST_COOKIE, "a", COOKIE_OPTIONS);
      return response;
    }
    // /c, /d, /e, /f, / はそのまま表示
    const pathVariant = pathname === "/" ? "a" : pathname.slice(1);
    const response = NextResponse.next();
    if (existingVariant !== pathVariant) {
      response.cookies.set(AB_TEST_COOKIE, pathVariant, COOKIE_OPTIONS);
    }
    return response;
  }

  // /a: cookie を a に固定して / にリダイレクト（URL は / として表示される）
  if (pathname === "/a") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    const response = NextResponse.redirect(url);
    response.cookies.set(AB_TEST_COOKIE, "a", COOKIE_OPTIONS);
    return response;
  }

  // /c, /d, /e, /f のトップへの直接アクセスは、そのバリアントに cookie を合わせる
  // (共有リンク等で直接 variant トップに来た人も以降一貫して同じバリアントで見せる)
  if (VARIANTS.includes(pathname.slice(1) as Variant)) {
    const variant = pathname.slice(1);
    const response = NextResponse.next();
    if (existingVariant !== variant) {
      response.cookies.set(AB_TEST_COOKIE, variant, COOKIE_OPTIONS);
    }
    return response;
  }

  if (pathname !== "/") {
    return NextResponse.next();
  }

  // クローラには URL を / のまま、本命 variant (VARIANTS[0]) の中身を /bot 経由で見せる。
  // /c 等の variant ルートに直接 rewrite すると variant 側の noindex metadata が / に
  // 巻き込まれてしまうため、noindex を持たない /bot に rewrite する。
  const ua = request.headers.get("user-agent") ?? "";
  if (
    /Googlebot|bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|facebookexternalhit|Twitterbot|LinkedInBot|bot|crawl|spider/i.test(
      ua
    )
  ) {
    return NextResponse.rewrite(new URL("/bot", request.url));
  }

  const variant =
    existingVariant &&
    VARIANTS.includes(existingVariant as (typeof VARIANTS)[number])
      ? existingVariant
      : VARIANTS[Math.floor(Math.random() * VARIANTS.length)];

  // cookie が未設定 or 変わった場合は更新
  const needsCookieUpdate = existingVariant !== variant;

  // a 以外はそのバリアントのパスにリダイレクト
  // pathname のみ書き換え、search (utm_* 等) と hash は保持する。
  // これをしないと Meta 広告等の UTM クエリが redirect で落ち、
  // GA4 のセッション参照元 / メディアが meta/paid_social として計測されなくなる。
  if (variant !== "a") {
    const url = request.nextUrl.clone();
    url.pathname = `/${variant}`;
    const response = NextResponse.redirect(url);
    if (needsCookieUpdate) {
      response.cookies.set(AB_TEST_COOKIE, variant, COOKIE_OPTIONS);
    }
    return response;
  }

  // a の場合はそのまま
  const response = NextResponse.next();
  if (needsCookieUpdate) {
    response.cookies.set(AB_TEST_COOKIE, variant, COOKIE_OPTIONS);
  }
  return response;
}

export const config = {
  matcher: ["/", "/a", "/c", "/d", "/e", "/f", "/xnext_case"],
};
