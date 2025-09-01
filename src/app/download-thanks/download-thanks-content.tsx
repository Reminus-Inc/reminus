"use client";

import { CheckIcon } from "lucide-react";
import {Suspense, useEffect} from "react";
import { useSearchParams } from "next/navigation";
import { trackGenerateLead } from "@/lib/analytics";
import { ViewDocumentButton } from "./view-document-button";

function Tracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // URL パラメータからコンバージョンデータを取得
    const conversionData = {
      email: searchParams.get("email") || undefined,
      name: searchParams.get("name") || undefined,
      company: searchParams.get("company") || undefined,
    };

    // ページロード時にLead完了イベントを送信（コンバージョンデータ付き）
    trackGenerateLead("download", conversionData);
  }, [searchParams]);

  return null
}

export function DownloadThanksContent() {
  return (
    <>
      <Suspense fallback={null}><Tracker /></Suspense>
      <div className="flex-1 flex items-center justify-center bg-gray-50 pb-32">
        <div className="max-w-md w-full mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckIcon className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">送信完了</h1>
            <p className="text-gray-600 mb-2">資料請求ありがとうございます。</p>
            <p className="text-gray-600 mb-6">
              以下から資料をご確認ください。
            </p>

            <ViewDocumentButton />

            <div id="immedio-config" />
          </div>
        </div>
      </div>
    </>
  );
}