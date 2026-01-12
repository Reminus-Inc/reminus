import { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import { BackToTopLink } from "@/app/download-thanks/back-to-top-link";
import { DownloadThanksClient } from "./download-thanks-client";
import { ViewDocumentButton } from "./view-document-button";

import { Heading } from "@/app/_components/ui/heading";
export const metadata: Metadata = {
  title: "資料請求完了 | Reminus",
  description: "資料請求ありがとうございます。",
  robots: {
    index: false,
  },
};

export default function DownloadThanksPage() {
  return (
    <main className="flex items-center justify-center bg-white px-6 pb-16 pt-8">
      <div className="space-y-10">
        <div className="flex flex-col items-center gap-5">
          <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-emerald-100 sm:h-[120px] sm:w-[120px]">
            <div className="relative h-12 w-12 sm:h-[68px] sm:w-[68px]">
              <Image
                src="/mailbox.png"
                alt="メール"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <Heading tag="h1" level="h2" className="text-center">
            資料のご請求<br className="md:hidden"/>ありがとうございます！
          </Heading>
        </div>

        <p className="text-lg font-bold tracking-wide text-center text-gray-500 sm:text-xl">
          メールにて資料のダウンロードリンクをお送りしました。
        </p>
        <div className="flex flex-col items-center gap-4 mt-24">
        <ViewDocumentButton />

        </div>

        <div className="flex justify-center">
          <BackToTopLink />
        </div>
      </div>

      <div id="immedio-config" data-pagetype="thanks" />

      <Suspense fallback={null}>
        <DownloadThanksClient />
      </Suspense>
    </main>
  );
}
