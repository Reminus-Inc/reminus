"use client";

import Link from "next/link";
import Image from "next/image";
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


export const CustomDownloadButton = ({
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
          <div className="flex items-center w-full">
            <Image
              src="/document-icon.png"
              alt="資料イメージ"
              width={72}
              height={72}
              className="object-contain flex-shrink-0 ml-2"
            />
            <div className="flex-1 flex flex-col items-center gap-0.5">
              <span className="text-[10px] leading-none text-gray-100">
                非エンジニア経営者向け
              </span>
              <div className="flex items-center">
                <span className="whitespace-nowrap lg:hidden">資料を見る</span>
                <span className="hidden whitespace-nowrap lg:inline">
                  資料ダウンロード
                </span>
              </div>
            </div>
          </div>
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
      <div className="flex items-center w-full">
        <Image
          src="/document-example.png"
          alt="資料イメージ"
          width={48}
          height={48}
          className="object-contain flex-shrink-0 ml-2"
        />
        <div className="flex-1 flex flex-col items-center gap-0.5">
          <span className="text-[10px] leading-none text-gray-100">
            非エンジニア経営者向け
          </span>
          <div className="flex items-center">
            <span className="whitespace-nowrap lg:hidden">資料を見る</span>
            <span className="hidden whitespace-nowrap lg:inline">
              資料ダウンロード
            </span>
          </div>
        </div>
      </div>
    </PrimaryButton>
  );
};
