"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { getIsDevMode } from "@/lib/get-is-dev-mode";

export function XPixelPageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (getIsDevMode()) {
      return;
    }
    if (typeof window !== "undefined" && (window as unknown as { twq?: (action: string, event: string) => void }).twq) {
      (window as unknown as { twq: (action: string, event: string) => void }).twq("track", "PageView");
    }
  }, [pathname]);

  return null;
}
