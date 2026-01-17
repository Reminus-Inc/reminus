"use client";

import { DownloadForm } from "@/app/_components/ui/download-form";
import { Heading } from "@/app/_components/ui/heading";
import Image from "next/image";
import { CheckCircle2, X } from "lucide-react";
import { DOCUMENT_TYPE } from "@/app/constants";
import { useDownloadDialogContext } from "@/app/_components/ui/download-dialog-context";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export const DownloadDialog = () => {
  const { isDownloadDialogOpen, closeDownloadDialog } =
    useDownloadDialogContext();
  const onOpenChange = (open: boolean) => {
    if (!open) {
      closeDownloadDialog();
    }
  };

  return (
    <Dialog open={isDownloadDialogOpen} onOpenChange={onOpenChange}>
      <DialogTitle hidden />
      <DialogContent
        className="h-[95dvh] max-w-[95vw] border-0 bg-white object-fill p-0 sm:h-[90dvh] sm:max-w-[90vw] lg:max-w-[80vw]"
        autoFocus={false}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogTitle className="hidden" />

        <div className="flex-1 overflow-auto bg-white">
          <div className="container mx-auto flex flex-col justify-center gap-8 px-6 pb-10 pt-6 md:gap-12 md:py-10 lg:flex-row lg:gap-16">
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
                    className="block h-auto w-full"
                  />
                </div>
              </div>

              <div className="mt-4 space-y-4">
                <p className="text-sm leading-relaxed text-gray-600">
                  Reminus
                  CTOパートナーは、スタートアップ経営に技術を補うCTO代行サービスです。
                  本資料は、プランやサービス内容、導入事例、SaaS経営を俯瞰できる「課題整理シート」を公開しています。
                </p>
                <ul className="space-y-1.5 md:space-y-2.5">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 md:h-5 md:w-5" />
                    <span className="text-sm font-bold text-gray-700 md:text-base">
                      サービスのコンセプト
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 md:h-5 md:w-5" />
                    <span className="text-sm font-bold text-gray-700 md:text-base">
                      SaaS経営の課題整理シート
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 md:h-5 md:w-5" />
                    <span className="text-sm font-bold text-gray-700 md:text-base">
                      プランごとの料金とサービス内容
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 md:h-5 md:w-5" />
                    <span className="text-sm font-bold text-gray-700 md:text-base">
                      導入事例
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex h-fit justify-center rounded-lg border border-gray-300 px-7 py-6 lg:max-w-[400px]">
              <DownloadForm documentType={DOCUMENT_TYPE.CTO_PARTNER} />
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
