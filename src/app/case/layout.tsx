"use client";

import { useEffect, useState } from "react";
import { Header } from "@/app/_components/layout/header";
import type { NavVariant } from "@/app/_components/layout/nav-menu";

// blog/layout.tsx と同じく、AB cookie を見て LP バリアントに合わせたナビを出す。
export default function CaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [variant, setVariant] = useState<NavVariant | undefined>(undefined);

  useEffect(() => {
    const match = document.cookie.match(/(?:^|;\s*)ab-test-top=([^;]+)/);
    const v = match?.[1];
    if (v === "c") setVariant(v);
  }, []);

  return (
    <>
      <Header variant={variant} />
      <main>{children}</main>
    </>
  );
}
