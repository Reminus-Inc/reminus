"use client";

import Link from "next/link";
import { useLpContext } from "@/hooks/use-lp-context";
import { lpHomePath } from "@/lib/lp";

// パンくず等で「ホーム」に戻るリンク。遷移先はヘッダーのロゴと同じく LP × variant から導出する
// (直前に /startup を見ていたら /startup、variant e なら /e)。cookie の読み取りが必要なので
// Server Component のページから使えるようクライアント境界として切り出している。
export function LpHomeLink({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { lp, variant } = useLpContext();

  return (
    <Link href={lpHomePath(lp, variant)} className={className}>
      {children}
    </Link>
  );
}
