import { Suspense } from "react";
import { Metadata } from "next";
import { DownloadThanksContent } from "./download-thanks-content";

export const metadata: Metadata = {
  title: "送信完了 | Reminus",
  description: "資料請求ありがとうございます。",
  robots: {
    index: false,
  },
};

export default function DownloadThanksPage() {
  return (
    <Suspense fallback={
      <div className="flex-1 flex items-center justify-center bg-gray-50 pb-32">
        <div className="max-w-md w-full mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <div className="w-8 h-8 bg-gray-300 rounded-full" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Loading...</h1>
          </div>
        </div>
      </div>
    }>
      <DownloadThanksContent />
    </Suspense>
  );
}
