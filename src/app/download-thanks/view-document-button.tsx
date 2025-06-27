"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useSearchParams } from "next/navigation";

export function ViewDocumentButton() {
  const searchParams = useSearchParams();
  
  const email = searchParams.get("email") || "";
  const name = searchParams.get("name") || "";
  const company = searchParams.get("company") || "";

  const handleViewDocument = () => {
    const params = new URLSearchParams({
      email: email,
      person_name: name,
      company_name: company,
    });
    const url = `https://box.reminus.co.jp/p/reminus/reminus-ctopartner-intro?ownerEmail=sumiren%40reminus.co.jp&${params.toString()}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
      onClick={handleViewDocument}
    >
      <ExternalLink className="mr-2 h-4 w-4" />
      資料ダウンロード
    </Button>
  );
}