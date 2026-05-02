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
  // variant を復元する。描画をブロックしないための実装。
  const [variant, setVariant] = useState<NavVariant | undefined>(undefined);

  useEffect(() => {
    const match = document.cookie.match(/(?:^|;\s*)ab-test-top=([^;]+)/);
    const v = match?.[1];
    if (v === "b" || v === "c") setVariant(v);
  }, []);

  return (
    <>
      <Header variant={variant} />
      <main>{children}</main>
    </>
  );
}
