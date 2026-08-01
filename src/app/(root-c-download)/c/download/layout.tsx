"use client";

import { Header } from "@/app/_components/layout/header";
import { useLpContext } from "@/hooks/use-lp-context";

export default function DownloadPageCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // このページには c だけでなく f の訪問者も来る (nav-menu の downloadHref が両方をここへ送る)
  // ため、variant は固定せず cookie から復元した LP × variant に従う。
  const { lp, variant } = useLpContext();

  return (
    <>
      <Header showNavMenu={false} shadow lp={lp} variant={variant} />
      <main>{children}</main>
    </>
  );
}
