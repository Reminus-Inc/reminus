"use client";

import { Button } from "@/components/ui/button";
import { CheckIcon, Download } from "lucide-react";
import { useEffect, useRef } from "react";
import { trackGenerateLead } from "@/lib/analytics";

export default function DownloadThanksPage() {
  const downloadUrl = "/documents/reminus_ctopartner_intro_v1.0.2.pdf";
  const hasDownloaded = useRef(false);

  useEffect(() => {
    // ページロード時にLead完了イベントを送信
    trackGenerateLead("download");

    // 既にダウンロード済みの場合はスキップ
    if (hasDownloaded.current) return;
    hasDownloaded.current = true;

    // 自動的にダウンロードを開始（現在のページは維持）
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "reminus_ctopartner_intro.pdf";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const handleDownload = () => {
    window.open(downloadUrl, "_blank", "noopener,noreferrer");
  };

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
            資料ダウンロードを開始します。
            開始されない場合はボタンから開いてください。
          </p>

          <Button
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
            onClick={handleDownload}
          >
            <Download className="mr-2 h-4 w-4" />
            資料を開く
          </Button>

          <div id="immedio-config" data-pagetype="thanks" />
        </div>
      </div>
    </div>
  );
}
