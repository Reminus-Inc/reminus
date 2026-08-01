"use client";

import { Header } from "@/app/_components/layout/header";
import { useLpContext } from "@/hooks/use-lp-context";

export default function CaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // blog/layout.tsx と同じく、直前に見ていた LP / variant に合わせたナビを出す。
  const { lp, variant } = useLpContext();

  return (
    <>
      <Header lp={lp} variant={variant} />
      <main>{children}</main>
    </>
  );
}
