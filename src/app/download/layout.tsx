"use client";

import { Header } from "@/app/_components/layout/header";
import { useLpContext } from "@/hooks/use-lp-context";

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ロゴから戻る先を LP × variant に合わせる (直前に見ていた LP に戻す)。
  const { lp, variant } = useLpContext();

  return (
    <>
      <Header showNavMenu={false} shadow lp={lp} variant={variant} />
      <main>{children}</main>
    </>
  );
}
