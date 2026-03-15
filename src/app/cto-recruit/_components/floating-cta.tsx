"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";

export function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // FVのCTAを過ぎたあたり（500px）で表示開始
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // 初期チェック
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* 上部グラデーションシャドウ */}
      <div className="h-4 bg-gradient-to-t from-white/95 to-transparent" />

      {/* CTAバー本体 */}
      <div className="flex items-center justify-center gap-3 bg-white/95 px-4 pb-[calc(env(safe-area-inset-bottom,0px)+12px)] pt-2 backdrop-blur-md">
        <Link
          href="/cto-recruit/download"
          onClick={() => trackCTAClick("download")}
          className="flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-3 text-xs font-bold tracking-wider text-white transition-opacity hover:opacity-90"
        >
          資料ダウンロード
        </Link>
        <Link
          href="/cto-recruit/contact"
          onClick={() => trackCTAClick("contact")}
          className="flex flex-1 items-center justify-center rounded-full px-4 py-3 text-xs font-bold tracking-wider text-emerald-600 ring-1 ring-inset ring-emerald-600 transition-colors hover:bg-emerald-50"
        >
          無料相談
        </Link>
      </div>
    </div>
  );
}
