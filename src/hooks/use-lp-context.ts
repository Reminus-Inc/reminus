"use client";

import { useEffect, useState } from "react";
import {
  LPS,
  LP_COOKIE,
  findLp,
  findVariant,
  variantCookie,
  type LpId,
  type Variant,
} from "@/lib/lp";

const readCookie = (name: string) =>
  document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`))?.[1];

// /blog や /case のような LP に属さない共通ページで、「直前にどの LP のどの variant を見ていたか」
// を cookie から復元する。middleware は LP のパスでしか動かないのでここはクライアント側で読む。
//
// 初期描画は何も返さず、呼び出し側 (lpHomePath) が先頭 LP のホームにフォールバックする。
// hydration 後に cookie から復元する。描画をブロックしないための実装。
// LP_COOKIE が無い場合も先頭の LP にフォールバックする — この cookie を焼く前からの訪問者や、
// LP を経由せず直接 /blog に来た人が該当する。
export function useLpContext(): { lp?: LpId; variant?: Variant } {
  const [context, setContext] = useState<{ lp?: LpId; variant?: Variant }>({});

  useEffect(() => {
    const lp = findLp(readCookie(LP_COOKIE)) ?? LPS[0];
    const variant = findVariant(lp, readCookie(variantCookie(lp.id)));
    setContext({ lp: lp.id, variant: variant?.id as Variant | undefined });
  }, []);

  return context;
}
