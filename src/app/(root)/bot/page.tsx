import type { ComponentType } from "react";
import { VARIANTS } from "@/lib/ab-test";
import HomeA from "@/app/(root)/page";
import HomeC from "@/app/(root-c)/c/page";
import HomeC2 from "@/app/(root-c2)/c2/page";

// クローラ向けトップ。middleware が UA を見て / をここに rewrite する (URL は / のまま)。
// 各 variant の page を default だけ import しているので、variant 側の
// `metadata: { robots: { index: false } }` は引き継がれず、/ はインデックス対象として残る。
// 配信するのは AB テストの先頭 variant (VARIANTS[0])。variant を入れ替えたら
// VARIANTS と下の VARIANT_PAGES を更新すれば bot 配信も自動で追従する。
const VARIANT_PAGES: Record<string, ComponentType> = {
  a: HomeA,
  c: HomeC,
  c2: HomeC2,
};

export default function BotPage() {
  const Variant = VARIANT_PAGES[VARIANTS[0]] ?? HomeA;
  return <Variant />;
}
