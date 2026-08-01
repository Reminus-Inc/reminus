"use client";

import { Header } from "../_components/layout/header";
import { useLpContext } from "@/hooks/use-lp-context";

export default function TopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // このグループには /contact のような LP に属さないページも含まれる。middleware は
  // ここでは動かないので、直前に見ていた LP × variant を cookie から復元してロゴに反映する。
  const { lp, variant } = useLpContext();

  return (
    <>
      <Header lp={lp} variant={variant} />
      <main>{children}</main>
    </>
  );
}
