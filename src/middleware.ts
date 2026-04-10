import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AB_TEST_COOKIE = "ab-test-top";

// ここを ["a"] にすると全員 a（テスト停止）、["a", "b"] で A/B テスト実施
const VARIANTS = ["a", "b"] as const;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // トップページのみ対象
  if (pathname !== "/") {
    return NextResponse.next();
  }

  const existingVariant = request.cookies.get(AB_TEST_COOKIE)?.value;
  const variant =
    existingVariant && VARIANTS.includes(existingVariant as (typeof VARIANTS)[number])
      ? existingVariant
      : VARIANTS[Math.floor(Math.random() * VARIANTS.length)];

  // cookie が未設定 or 変わった場合は更新
  const needsCookieUpdate = existingVariant !== variant;

  // b の場合は /b にリダイレクト
  if (variant === "b") {
    const response = NextResponse.redirect(new URL("/b", request.url));
    if (needsCookieUpdate) {
      response.cookies.set(AB_TEST_COOKIE, variant, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
        sameSite: "lax",
      });
    }
    return response;
  }

  // a の場合はそのまま
  const response = NextResponse.next();
  if (needsCookieUpdate) {
    response.cookies.set(AB_TEST_COOKIE, variant, {
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
      sameSite: "lax",
    });
  }
  return response;
}

export const config = {
  matcher: ["/"],
};
