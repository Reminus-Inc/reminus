"use client";

import { trackCTAClick } from "@/lib/analytics";
import Link from "next/link";
import { PrimaryButton, PrimaryButtonProps } from "./primary-button";

export function DownloadButton({ ...props }: PrimaryButtonProps) {
  return (
    <PrimaryButton asChild {...props}>
      <Link
        href="/download"
        className="flex items-center gap-3"
        onClick={() => {
          trackCTAClick("download");
        }}
      >
        <span className="whitespace-nowrap">資料ダウンロード</span>
      </Link>
    </PrimaryButton>
  );
}
