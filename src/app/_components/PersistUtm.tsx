"use client";

import { useEffect } from "react";
import { UTM_KEYS } from "@/lib/utm-constants";

function setCookie(name: string, value: string, days = 30) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}

export function PersistUtm() {
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);

    for (const k of UTM_KEYS) {
      const v = sp.get(k);
      if (v) {
        setCookie(k, v, 30); // 30日間保存
      }
    }
  }, []);

  return null;
}
