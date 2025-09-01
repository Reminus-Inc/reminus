"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { trackGenerateLead } from "@/lib/analytics";

export function DownloadThanksClient() {
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

  return null;
}
