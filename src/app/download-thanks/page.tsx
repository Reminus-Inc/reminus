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
  return <DownloadThanksContent />;
}
