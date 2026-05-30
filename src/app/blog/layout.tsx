"use client";

import { useEffect, useState } from "react";
import { Header } from "@/app/_components/layout/header";
import type { NavVariant } from "@/app/_components/layout/nav-menu";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 初期描画はデフォルト (ルート扱い) で進め、hydration 後に cookie から
  // 戻り先 (variant or lp) を復元する。描画をブロックしないための実装。
  const [variant, setVariant] = useState<NavVariant | undefined>(undefined);
  const [lp, setLp] = useState<string | undefined>(undefined);

  useEffect(() => {
    const match = document.cookie.match(/(?:^|;\s*)ab-test-top=([^;]+)/);
    const v = match?.[1];
    if (v === "c") setVariant(v);
    // /startup は AB variant ではなく単独ページなので lp として戻り先を指定する。
    else if (v === "startup") setLp("/startup");
  }, []);

  return (
    <>
      <Header variant={variant} lp={lp} />
      <main>{children}</main>
    </>
  );
}
