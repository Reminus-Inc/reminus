"use client";

import { Header } from "@/app/_components/layout/header";
import { useLpContext } from "@/hooks/use-lp-context";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 直前に見ていた LP / variant に合わせたナビを出す (復元ロジックは useLpContext に集約)。
  const { lp, variant } = useLpContext();

  return (
    <>
      <Header lp={lp} variant={variant} />
      <main>{children}</main>
    </>
  );
}
