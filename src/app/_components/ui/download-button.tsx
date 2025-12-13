"use client";

import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";
import { PrimaryButton, PrimaryButtonProps } from "./primary-button";
import { useDownloadDialogContext } from "./download-dialog-context";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface DownloadButtonProps extends PrimaryButtonProps {
  onClick?: () => void;
  asLink?: boolean;
}

export const DownloadButton = ({
  onClick,
  asLink = false,
  ...props
}: DownloadButtonProps) => {
  const { openDownloadDialog } = useDownloadDialogContext();

  if (asLink) {
    return (
      <PrimaryButton asChild {...props}>
        <Link
          href="/download"
          className="flex items-center gap-3"
          onClick={() => {
            trackCTAClick("download");
            onClick?.();
          }}
        >
          <span className="whitespace-nowrap lg:hidden">資料を見る</span>
          <span className="hidden whitespace-nowrap lg:inline">
            資料ダウンロード
          </span>
        </Link>
      </PrimaryButton>
    );
  }

  return (
    <PrimaryButton
      {...props}
      onClick={() => {
        trackCTAClick("download");
        openDownloadDialog();
        onClick?.();
      }}
    >
      <span className="whitespace-nowrap lg:hidden">資料を見る</span>
      <span className="hidden whitespace-nowrap lg:inline">
        資料ダウンロード
      </span>
    </PrimaryButton>
  );
};

interface CustomDownloadButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  subtitle?: string;
}
export const CustomDownloadButton = ({
  className,
  onClick,
  subtitle = "Reminus CTOパートナー",
  ...props
}: CustomDownloadButtonProps) => {
  const { openDownloadDialog } = useDownloadDialogContext();

  const handleClick = () => {
    trackCTAClick("download");
    openDownloadDialog();
    onClick?.();
  };

  const baseClasses = cn(
    "rounded-full w-full min-[400px]:w-fit h-auto mx-auto",
    "flex items-center ",
    "text-white",
    "pl-6 sm:pl-10 pr-3 sm:pr-6 py-2.5",
    "bg-gradient-to-r from-emerald-500 from-60% to-emerald-600/80",
    "relative overflow-hidden group",
    "shadow-xl shadow-emerald-100/50",
    className
  );

  return (
    <Button className={baseClasses} onClick={handleClick} {...props}>
      <div className="relative z-[1] inline-flex w-full items-center justify-between">
        <div className="flex-shrink-0 border-[3px] border-solid border-slate-200">
          <Image
            src="/document-icon.png"
            alt="資料イメージ"
            width={480}
            height={270}
            className="max-w-[80px] object-contain sm:max-w-[120px]"
          />
        </div>

        <div className="flex flex-col justify-center gap-0 px-4 min-[400px]:px-8 sm:gap-1">
          <span className="text-[11px] tracking-wider sm:text-sm">
            {subtitle}
          </span>
          <span className="text-lg font-bold tracking-wider sm:text-2xl">
            資料ダウンロード
          </span>
        </div>

        <ChevronRight
          strokeWidth={2}
          className="!h-[22px] !w-[22px] sm:!h-[26px] sm:!w-[26px]"
        />
      </div>

      {/* hover 時の背景色 */}
      <div className="pointer-events-none absolute left-0 top-0 z-[0] h-full w-full bg-emerald-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Button>
  );
};
