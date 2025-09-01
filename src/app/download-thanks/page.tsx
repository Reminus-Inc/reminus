import { Metadata } from "next";
import { Suspense } from "react";
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
    <Suspense fallback={null}>
      <DownloadThanksContent />
    </Suspense>
  );
}
