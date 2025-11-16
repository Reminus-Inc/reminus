"use client";

import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";
import {PrimaryButton, PrimaryButtonProps} from "./primary-button";
import { useDownloadDialogContext } from "./download-dialog-context";
import * as React from "react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import Image from "next/image";

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
  fullWidth?: boolean;
  asLink?: boolean;
  onClick?: () => void;
  subtitle?: string;
  variant?: 'wide' | 'compact';
}


export const CustomDownloadButton = ({
                                        fullWidth = false,
                                        asLink = false,
                                        className,
                                        onClick,
                                        subtitle = "非エンジニア経営者向け",
                                        variant = 'compact',
                                        ...props

                                      }: CustomDownloadButtonProps) => {
  const { openDownloadDialog } = useDownloadDialogContext();

  const handleClick = () => {
    trackCTAClick("download");
    if (!asLink) openDownloadDialog();
    onClick?.();
  };

  // そもそもfullWidthが気持ち悪いせいでwideとかcompactとか意味不明な概念が出てきてるのだが
  // 自分の力ではどうしようもできない。無力です。すまん
  const baseClasses = cn(
    "rounded-full bg-primary text-primary-foreground font-bold tracking-wider",
    "h-auto py-3 md:py-4",
    "pl-3 pr-6 md:pl-4 md:pr-8",
    "flex items-center justify-start gap-3",
    "transition-all duration-300",
    fullWidth && "w-full",
    className
  );

  const content = (
    <div className="flex items-center w-full gap-3">
      <div className="flex-shrink-0 pl-4">
        <Image
          src="/document-icon.png"
          alt="資料イメージ"
          width={74}
          height={47}
          className="object-contain"
        />
      </div>

      <div className={cn(
        "flex-1 h-full flex flex-col justify-center leading-tight",
        variant === 'wide' && "px-4"
      )}>
        <span className="text-xs font-medium">
          {subtitle}
        </span>
        <span className="text-lg md:text-xl font-bold">
          資料ダウンロード
        </span>
      </div>
    </div>
  );

  if (asLink) {
    return (
      <Button asChild className={baseClasses}>
        <Link href="/download" onClick={handleClick}>
          {content}
        </Link>
      </Button>
    );
  }

  return (
    <Button className={baseClasses} onClick={handleClick} {...props}>
      {content}
    </Button>
  );
};
