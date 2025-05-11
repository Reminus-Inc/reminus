"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactButton() {
  return (
    <Button
      variant="outline"
      className="h-16 text-base sm:w-48"
      asChild
    >
      <a
        href="#contact"
        className="flex items-center gap-3"
        onClick={() => {
          window.gtag?.("event", "contact_link_click", {
            event_category: "engagement",
            event_label: "contact_link_click",
          });
        }}
      >
        お問い合わせ <ArrowRight />
      </a>
    </Button>
  );
}