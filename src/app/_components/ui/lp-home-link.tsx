"use client";

import Link from "next/link";
import { useLpContext } from "@/hooks/use-lp-context";
import { lpHomePath } from "@/lib/lp";

// パンくず等で「ホーム」やそのセクションに戻るリンク。遷移先はヘッダーのロゴと同じく
// LP × variant から導出する (直前に /startup を見ていたら /startup、variant e なら /e)。
// cookie の読み取りが必要なので、Server Component のページから使えるようクライアント境界
// として切り出している。hash を渡すとホームの特定セクション (例: #case-studies) を指す。
export function LpHomeLink({
  hash,
  className,
  children,
}: {
  hash?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { lp, variant } = useLpContext();

  return (
    <Link
      href={`${lpHomePath(lp, variant)}${hash ?? ""}`}
      className={className}
    >
      {children}
    </Link>
  );
}
