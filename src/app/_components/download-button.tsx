"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DownloadButton() {
  return (
    <Button
      className="bg-black hover:bg-gray-800 text-white h-16 text-base sm:w-48"
      asChild
    >
      <a
        href="#"
        className="flex items-center gap-3"
        onClick={() => {
          window.gtag?.("event", "download_link_click", {
            event_category: "engagement",
            event_label: "download_link_click",
          });
        }}
      >
        資料ダウンロード <Download className="h-4 w-4" />
      </a>
    </Button>
  );
}