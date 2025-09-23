"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { DownloadForm } from "@/app/_components/ui/download-form";
import { Heading } from "@/app/_components/ui/heading";
import Image from "next/image";
import { CheckCircle2, X } from "lucide-react";
import { DOCUMENT_TYPE } from "@/app/constants";
import { useDownDialogContext } from "@/app/_components/ui/download-dialog-context";

export const DownloadDialog = () => {
  const { isDownloadDialogOpen, closeDownloadDialog } = useDownDialogContext();
  const onOpenChange = (open: boolean) => {
    if (!open) {
      closeDownloadDialog();
    }
  };

  return (
    <Dialog open={isDownloadDialogOpen} onOpenChange={onOpenChange}>
      <DialogContent
        className="h-[95dvh] max-w-[95vw] border-0 object-fill p-0 sm:h-[90dvh] sm:max-w-[90vw] lg:max-w-[80vw]"
        autoFocus={false}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogTitle className="hidden" />

        <div className="flex-1 overflow-auto bg-white">
          <div className="container mx-auto flex flex-col justify-center gap-12 px-6 py-10 lg:flex-row lg:gap-16">
            <div className="lg:w-[475px]">
              <Heading tag="h2" level="h2" className="md:text-3xl">
                サービス紹介資料
              </Heading>

              <div className="mt-4 rounded bg-gray-50 p-4">
                <div className="mx-auto aspect-[1326/842] max-w-[720px] rounded-sm sm:max-w-[442px]">
                  <Image
                    src="/document-example.png"
                    alt="Reminus CTO パートナー概要資料"
                    width={1326}
                    height={842}
                    priority
                    className="block h-auto w-full"
                  />
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Heading tag="h3" level="h4">
                  この資料で分かること
                </Heading>

                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                    <span className="font-bold text-gray-700">
                      サービスのコンセプト
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                    <span className="font-bold text-gray-700">
                      プロダクト経営の全体像フレームワーク
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                    <span className="font-bold text-gray-700">
                      各事業フェーズのよくある課題と解決策
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                    <span className="font-bold text-gray-700">
                      プランごとの料金とサービス内容
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                    <span className="font-bold text-gray-700">導入事例</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex h-fit justify-center rounded-lg border border-gray-300 px-7 py-6 lg:max-w-[400px]">
              <DownloadForm
                documentType={DOCUMENT_TYPE.CTO_PARTNER}
                beforeThanks={closeDownloadDialog}
              />
            </div>
          </div>
        </div>

        <DialogClose asChild>
          <X className="absolute right-4 top-4 h-10 w-10 shrink-0 cursor-pointer rounded-full p-2.5 text-black transition-colors hover:bg-black/5" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
