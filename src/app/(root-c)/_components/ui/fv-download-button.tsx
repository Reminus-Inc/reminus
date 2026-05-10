"use client";

import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";
import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

type Variant = "white" | "filled";

interface FvDownloadButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  title?: string;
  subtitle?: string;
  href?: string;
  variant?: Variant;
  imageSrc?: string | null;
}

/**
 * c 版で使う共通 CTA ボタン。FV と同じ rounded-xl + 資料カバー画像 + chevron の形。
 * variant:
 *  - white  : 白塗り → hover で emerald-700 塗り + 白枠 (FV で使用)
 *  - filled : emerald-500 塗り + 白文字 → hover で白塗り + 緑枠 + 緑文字 (白系セクション CTA で使用)
 */
export const FvDownloadButton = ({
  className,
  onClick,
  title = "資料ダウンロード",
  subtitle = "Reminus CTO代行",
  href = "/download",
  variant = "white",
  imageSrc = "/document-cover-c.png",
}: FvDownloadButtonProps) => {
  const handleClick = () => {
    trackCTAClick("download");
    onClick?.();
  };

  const variantClasses: Record<Variant, string> = {
    white: cn(
      "bg-white text-emerald-700 ring-2 ring-transparent",
      // toB LP の CTA として、濃さと広がりを一段強めた 2 層ドロップ。
      "shadow-[0_3px_6px_rgba(15,23,42,0.18),0_18px_36px_-6px_rgba(15,23,42,0.30)]",
      "hover:bg-emerald-700 hover:text-white hover:ring-white hover:shadow-none"
    ),
    filled: cn(
      "bg-emerald-500 text-white ring-2 ring-transparent",
      "shadow-[0_8px_36px_16px_rgba(16,185,129,0.18),0_8px_18px_-2px_rgba(6,78,59,0.28)]",
      "hover:bg-white hover:text-emerald-700 hover:ring-emerald-500 hover:shadow-none"
    ),
  };

  const baseClasses = cn(
    "rounded-xl w-full min-[400px]:w-fit h-auto mx-auto",
    "flex items-center",
    "pl-2 min-[375px]:pl-3 sm:pl-3 pr-3 sm:pr-4 py-3 sm:py-[14px]",
    "relative overflow-hidden group",
    "transition-all duration-150",
    variantClasses[variant],
    className
  );

  return (
    <Link href={href} onClick={handleClick} className={baseClasses}>
      <div className="relative z-[1] inline-flex pl-2 w-full items-center justify-between gap-4 min-[400px]:gap-5">
        <div className="flex items-center gap-4 sm:gap-5">
          {imageSrc && (
            <div className="flex-shrink-0 border border-emerald-200">
              <Image
                src={imageSrc}
                alt="資料イメージ"
                width={480}
                height={270}
                sizes="100px"
                className="max-w-[64px] object-contain min-[375px]:max-w-[72px] sm:max-w-[100px]"
              />
            </div>
          )}

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
    </Link>
  );
};
