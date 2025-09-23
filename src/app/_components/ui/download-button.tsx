"use client";

import { trackCTAClick } from "@/lib/analytics";
import { PrimaryButton, PrimaryButtonProps } from "./primary-button";
import { useDownloadDialogContext } from "./download-dialog-context";

interface DownloadButtonProps extends PrimaryButtonProps {
  onClick?: () => void;
}

/* 旧実装 (リンク遷移)
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
        <span className="whitespace-nowrap lg:hidden">資料を見る</span>
        <span className="hidden whitespace-nowrap lg:inline">
          資料ダウンロード
        </span>
      </Link>
    </PrimaryButton>
  );
}
*/

export const DownloadButton = ({ onClick, ...props }: DownloadButtonProps) => {
  const { openDownloadDialog } = useDownloadDialogContext();
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
      <span className="hidden whitespace-nowrap lg:inline">資料ダウンロード</span>
    </PrimaryButton>
  );
};
