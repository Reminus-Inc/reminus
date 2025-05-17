"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactButton({ isHeader = false, aggressive = false }) {
  return (
    <Button
      variant="outline"
      className={`text-base ${isHeader ? "h-10 sm:w-36" : "h-16 sm:w-48"}`}
      asChild
    >
      <a
        href="#contact"
        className={`flex items-center gap-3`}
        onClick={() => {
          window.gtag?.("event", "contact_link_click", {
            event_category: "engagement",
            event_label: "contact_link_click",
          });
        }}
      >
        {aggressive ? (
          <>
            <span className="block leading-tight">
              無料相談を<br className="hidden sm:block" />予約する
            </span>
            <ArrowRight className="h-5 w-5" />
          </>
        ) : (
          <>
            お問い合わせ <ArrowRight className={isHeader ? "h-4 w-4" : ""} />
          </>
        )}
      </a>
    </Button>
  );
}