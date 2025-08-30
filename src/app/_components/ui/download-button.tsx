"use client";

import { trackCTAClick } from "@/lib/analytics";
import Link from "next/link";
import { PrimaryButton, PrimaryButtonProps } from "./primary-button";

interface DownloadButtonProps extends PrimaryButtonProps {
  onClick?: () => void;
}

export function DownloadButton({ onClick, ...props }: DownloadButtonProps) {
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
        <span className="whitespace-nowrap">資料ダウンロード</span>
      </Link>
    </PrimaryButton>
  );
}
