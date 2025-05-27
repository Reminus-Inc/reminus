"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function XPixelPageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).twq) {
      (window as any).twq("track", "PageView");
    }
  }, [pathname]);

  return null;
}
