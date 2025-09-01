import { Metadata } from "next";
import { Suspense } from "react";
import { CheckIcon } from "lucide-react";
import { DownloadThanksClient } from "./download-thanks-client";
import { ViewDocumentButton } from "./view-document-button";

export const metadata: Metadata = {
  title: "送信完了 | Reminus",
  description: "資料請求ありがとうございます。",
  robots: {
    index: false,
  },
};

export default function DownloadThanksPage() {
  return (
    <div className="flex flex-1 items-center justify-center bg-gray-50 pb-32">
      <div className="mx-auto w-full max-w-md px-4">
        <div className="rounded-lg bg-white p-6 text-center shadow-lg sm:p-8">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
            <CheckIcon className="h-8 w-8 text-emerald-600" />
          </div>
          <h1 className="mb-4 text-2xl font-bold text-gray-900">送信完了</h1>
          <p className="mb-2 text-gray-600">資料請求ありがとうございます。</p>
          <p className="mb-6 text-gray-600">以下から資料をご確認ください。</p>

          <ViewDocumentButton />
          <div id="immedio-config" data-pagetype="thanks" />

          <Suspense fallback={null}>
            <DownloadThanksClient />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
