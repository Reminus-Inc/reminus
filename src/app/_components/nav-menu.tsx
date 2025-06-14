"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavMenu() {
  const pathname = usePathname();
  const isRoot = pathname === "/";

  if (!isRoot) return null;

  return (
    <nav className="hidden md:flex space-x-8">
      <Link href="#value" className="text-gray-600 hover:text-gray-900">
        サービス
      </Link>
      <Link href="#plans" className="text-gray-600 hover:text-gray-900">
        プラン
      </Link>
      <Link href="#phase" className="text-gray-600 hover:text-gray-900">
        支援内容
      </Link>
      <Link href="#case-studies" className="text-gray-600 hover:text-gray-900">
        事例
      </Link>
      <Link href="#services" className="text-gray-600 hover:text-gray-900">
        その他サービス
      </Link>
      <Link href="#management" className="text-gray-600 hover:text-gray-900">
        経営陣紹介
      </Link>
    </nav>
  );
}
