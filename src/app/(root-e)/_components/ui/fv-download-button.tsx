"use client";

import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";
import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

type Variant = "white" | "filled";

interface FvDownloadButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  subtitle = "レミナスCTO代行",
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
      "bg-white text-emerald-600 ring-2 ring-transparent",
      "shadow-[0_1px_2px_rgba(15,23,42,0.06),0_8px_20px_-6px_rgba(15,23,42,0.14)]",
      "hover:bg-emerald-700 hover:text-white hover:ring-white hover:shadow-none",
      "px-3 py-3 md:px-4"
    ),
    filled: cn(
      "bg-emerald-500 text-white ring-2 ring-transparent",
      "shadow-[0_8px_36px_16px_rgba(16,185,129,0.18),0_8px_18px_-2px_rgba(6,78,59,0.28)]",
      "hover:bg-white hover:text-emerald-600 hover:ring-emerald-500 hover:shadow-none",
      "px-3 py-3 md:px-4 md:py-3.5"
    ),
  };

  const baseClasses = cn(
    "rounded-lg  h-auto w-fit",
    "flex items-center",
    "relative overflow-hidden group",
    "transition-all duration-150",
    variantClasses[variant],
    className
  );

  return (
    <Link href={href} onClick={handleClick} className={baseClasses}>
      <div className="relative z-[1] inline-flex w-full items-center justify-between gap-2.5 min-[375px]:gap-3 sm:gap-4 md:gap-5">
        <div className="flex items-center gap-2.5 min-[375px]:gap-3 md:gap-4">
          {imageSrc && (
            <div className="flex-shrink-0">
              <Image
                src={imageSrc}
                alt="資料イメージ"
                width={480}
                height={270}
                sizes="120px"
                className="h-auto w-[80px] object-contain min-[375px]:w-[96px] sm:w-[110px] lg:w-[124px]"
              />
            </div>
          )}

          <div className="-mb-0.5 flex flex-col justify-center gap-1 md:gap-1.5">
            <span className="text-[11px] font-medium tracking-wider min-[375px]:text-xs sm:text-sm md:text-base">
              {subtitle}
            </span>
            <span className="text-base font-bold tracking-wider min-[375px]:text-lg sm:text-xl md:text-2xl">
              {title}
            </span>
          </div>
        </div>

        <ChevronRight
          strokeWidth={2.5}
          className="-mr-1.5 !h-[26px] !w-[26px] flex-none md:!h-[32px] md:!w-[32px]"
        />
      </div>
    </Link>
  );
};
