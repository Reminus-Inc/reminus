"use client";

import { CheckIcon } from "lucide-react";
import { useEffect, Suspense } from "react";
import { trackGenerateLead } from "@/lib/analytics";
import { ViewDocumentButton } from "./view-document-button";

export default function DownloadThanksPage() {
  useEffect(() => {
    // ページロード時にLead完了イベントを送信
    trackGenerateLead("download");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full mx-auto p-8">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckIcon className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">送信完了</h1>
          <p className="text-gray-600 mb-2">資料請求ありがとうございます。</p>
          <p className="text-gray-600 mb-6">
            以下のボタンから資料をご確認ください。
          </p>

          <Suspense fallback={
            <div className="w-full h-10 bg-gray-200 animate-pulse rounded" />
          }>
            <ViewDocumentButton />
          </Suspense>

          <div id="immedio-config" data-pagetype="thanks" />
        </div>
      </div>
    </div>
  );
}
