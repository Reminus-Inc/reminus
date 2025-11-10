"use client";

import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";
import { PrimaryButton, PrimaryButtonProps } from "./primary-button";
import { useDownloadDialogContext } from "./download-dialog-context";

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
          <span className="relative block min-h-[1.5em]">
            <span className="whitespace-nowrap lg:hidden">資料を見る</span>
            <span className="hidden whitespace-nowrap lg:inline">
              資料ダウンロード
            </span>
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
      <span className="relative block min-h-[1.5em]">
        <span className="whitespace-nowrap lg:hidden">資料を見る</span>
        <span className="hidden whitespace-nowrap lg:inline">
          資料ダウンロード
        </span>
      </span>
    </PrimaryButton>
  );
};
