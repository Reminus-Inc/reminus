import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AB_TEST_COOKIE = "ab-test-top";

// 振り分け対象の variant。["a"] にすると全員 a（テスト停止）、複数あれば等確率で割り振る。
// ここから外した variant に既に cookie が付いている人 (例: 旧 "b") は次回 / アクセス時に
// VARIANTS.includes チェックで再抽選されるので、自動的に新しい振り分けに乗り換わる。
const VARIANTS = ["a", "c"] as const;

const COOKIE_OPTIONS = {
  maxAge: 60 * 60 * 24 * 30,
  path: "/",
  sameSite: "lax",
} as const;

export function middleware(request: NextRequest) {
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
    // /b, /c, / はそのまま表示
    const pathVariant = pathname === "/" ? "a" : pathname === "/b" ? "b" : "c";
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

  // /b, /c のトップへの直接アクセスは、そのバリアントに cookie を合わせる
  // (共有リンク等で直接 B/C トップに来た人も以降一貫して同じバリアントで見せる)
  if (pathname === "/b" || pathname === "/c") {
    const variant = pathname.slice(1);
    const response = NextResponse.next();
    if (existingVariant !== variant) {
      response.cookies.set(AB_TEST_COOKIE, variant, COOKIE_OPTIONS);
    }
    return response;
  }

  // ここから下はトップページのみ
  if (pathname !== "/") {
    return NextResponse.next();
  }

  // クローラには常に variant a（/）を見せる
  const ua = request.headers.get("user-agent") ?? "";
  if (
    /Googlebot|bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|facebookexternalhit|Twitterbot|LinkedInBot|bot|crawl|spider/i.test(
      ua
    )
  ) {
    return NextResponse.next();
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
  matcher: ["/", "/a", "/b", "/c"],
};
