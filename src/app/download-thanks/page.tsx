import { Metadata } from "next";
import { Suspense } from "react";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
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
    <main className="flex h-full items-center justify-center bg-white px-6 pb-16 pt-8">
      <div className="space-y-10">
        <div className="flex flex-col items-center gap-5">
          <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-emerald-100 sm:h-[120px] sm:w-[120px]">
            <CheckIcon
              className="h-12 w-12 text-emerald-500 sm:h-[68px] sm:w-[68px]"
              strokeWidth={4}
            />
          </div>
          <Heading tag="h1" level="h2" className="text-center">
            資料のご請求ありがとうございます！
          </Heading>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-lg font-bold tracking-wide text-gray-500 sm:text-xl">
            以下から資料をご確認ください。
          </p>
          <Suspense fallback={null}>
            <ViewDocumentButton />
          </Suspense>
        </div>

        <div className="flex justify-center">
          <Link
            href="/"
            className="text-sm font-bold text-gray-500 underline sm:text-base"
          >
            トップへ戻る
          </Link>
        </div>
      </div>

      <div id="immedio-config" data-pagetype="thanks" />

      <Suspense fallback={null}>
        <DownloadThanksClient />
      </Suspense>
    </main>
  );
}
