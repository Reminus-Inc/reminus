"use client";

import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";
import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface FvDownloadButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  title?: string;
  subtitle?: string;
  href?: string;
}

/**
 * c 版 First View 専用のダウンロードボタン。
 * Sales Marker 風の四角めボタン + 白背景 + 資料カバー画像を組み合わせた、
 * c FV 限定のスタイル。CustomDownloadButton (汎用) と独立に動かす。
 */
export const FvDownloadButton = ({
  className,
  onClick,
  title = "資料ダウンロード",
  subtitle = "Reminus CTO代行",
  href = "/download",
}: FvDownloadButtonProps) => {
  const handleClick = () => {
    trackCTAClick("download");
    onClick?.();
  };

  const baseClasses = cn(
    "rounded-xl w-full min-[400px]:w-fit h-auto mx-auto",
    "flex items-center",
    "pl-2 min-[375px]:pl-3 sm:pl-3 pr-3 sm:pr-4 py-3 sm:py-[14px]",
    "relative overflow-hidden group",
    "bg-white text-emerald-700 shadow-[0_8px_36px_16px_rgba(255,255,255,0.12),0_8px_18px_-2px_rgba(6,78,59,0.28)]",
    className
  );

  return (
    <Link href={href} onClick={handleClick} className={baseClasses}>
      <div className="relative z-[1] inline-flex pl-2 w-full items-center justify-between gap-4 min-[400px]:gap-5">
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="flex-shrink-0 border-solid border-slate-200">
            <Image
              src="/document-cover-c.png"
              alt="資料イメージ"
              width={480}
              height={270}
              className="max-w-[64px] object-contain min-[375px]:max-w-[72px] sm:max-w-[100px]"
            />
          </div>

          <div className="flex flex-col justify-center gap-0.5 sm:gap-1.5">
            <span className="text-[10px] tracking-wider min-[375px]:text-[11px] sm:text-sm">
              {subtitle}
            </span>
            <span className="text-[15px] font-bold tracking-wider min-[375px]:text-lg sm:text-2xl">
              {title}
            </span>
          </div>
        </div>

        <ChevronRight
          strokeWidth={2}
          className="!h-[22px] !w-[22px] sm:!h-[26px] sm:!w-[26px]"
        />
      </div>

      {/* hover 時の背景色 */}
      <div className="pointer-events-none absolute left-0 top-0 z-[0] h-full w-full bg-emerald-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Link>
  );
};
