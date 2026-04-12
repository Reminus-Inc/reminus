"use client";

import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";
import { PrimaryButton, PrimaryButtonProps } from "./primary-button";
import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface DownloadButtonProps extends PrimaryButtonProps {
  onClick?: () => void;
  href?: string;
  children?: React.ReactNode;
}

export const DownloadButton = ({
  onClick,
  href = "/download",
  children,
  ...props
}: DownloadButtonProps) => {
  const handleClick = () => {
    trackCTAClick("download");
    onClick?.();
  };

  const content = (
    <span className="whitespace-nowrap">{children || "資料ダウンロード"}</span>
  );

  return (
    <PrimaryButton asChild {...props}>
      <Link
        href={href}
        className="flex items-center gap-3"
        onClick={handleClick}
      >
        {content}
      </Link>
    </PrimaryButton>
  );
};

interface CustomDownloadButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  title?: string;
  subtitle?: string;
  href?: string;
}
export const CustomDownloadButton = ({
  className,
  onClick,
  title,
  subtitle,
  href = "/download",
}: CustomDownloadButtonProps) => {
  const handleClick = () => {
    trackCTAClick("download");
    onClick?.();
  };

  const baseClasses = cn(
    "rounded-full w-full min-[400px]:w-fit h-auto mx-auto",
    "flex items-center ",
    "text-white",
    "pl-6 min-[375px]:pl-8 sm:pl-10 pr-3 sm:pr-4 py-3 sm:py-4",
    "bg-emerald-500",
    "relative overflow-hidden group",
    "shadow-[0_8px_36px_16px_rgba(16,185,129,0.1),0_8px_18px_-2px_rgba(16,185,129,0.28)]",
    className
  );

  const content = (
    <>
      <div className="relative z-[1] inline-flex w-full items-center justify-between gap-4 min-[400px]:gap-5">
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="flex-shrink-0 border-[3px] border-solid border-slate-200">
            <Image
              src="/document-icon.png"
              alt="資料イメージ"
              width={480}
              height={270}
              className="max-w-[64px] object-contain min-[375px]:max-w-[72px] sm:max-w-[100px]"
            />
          </div>

          <div className="flex flex-col justify-center gap-0.5 sm:gap-1.5">
            <span className="text-[10px] tracking-wider min-[375px]:text-[11px] sm:text-sm">
              {subtitle != null ? (
                subtitle
              ) : (
                <>
                  <span className="relative -bottom-[1px] mr-[1px] text-[150%] font-bold !leading-[1]">
                    3
                  </span>
                  分でわかる! CTO代行
                </>
              )}
            </span>
            <span className="text-[15px] font-bold tracking-wider min-[375px]:text-lg sm:text-2xl">
              {title != null ? (
                title
              ) : (
                <>
                  まずは資料を読む
                  <span className="ml-1 hidden text-sm font-normal sm:inline">
                    (無料)
                  </span>
                </>
              )}
            </span>
          </div>
        </div>

        <ChevronRight
          strokeWidth={2}
          className="!h-[22px] !w-[22px] sm:!h-[26px] sm:!w-[26px]"
        />
      </div>

      {/* hover 時の背景色 */}
      <div className="pointer-events-none absolute left-0 top-0 z-[0] h-full w-full bg-emerald-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </>
  );

  return (
    <Link href={href} onClick={handleClick} className={baseClasses}>
      {content}
    </Link>
  );
};
