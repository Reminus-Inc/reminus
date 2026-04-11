"use client";

import { useEffect, useState } from "react";
import { DownloadButton } from "@/app/_components/ui/download-button";
import { ContactButton } from "@/app/_components/ui/contact-button";
import type { NavVariant } from "@/app/_components/layout/nav-menu";

/**
 * 記事末尾に表示するCTA。ヘッダと同じく資料ダウンロード + お問い合わせを並べる。
 * ab-test-top cookie を読んで、variant が "c" のときだけ href を /c 配下にする。
 * ボタン側には variant の概念を持ち込まず、blog 側で href を解決して渡す。
 */
export function ArticleCta() {
  const [variant, setVariant] = useState<NavVariant | undefined>(undefined);

  useEffect(() => {
    const match = document.cookie.match(/(?:^|;\s*)ab-test-top=([^;]+)/);
    const v = match?.[1];
    if (v === "b" || v === "c") setVariant(v);
  }, []);

  const ctaPrefix = variant === "c" ? "/c" : "";

  return (
    <div className="mx-auto mt-6 w-[88%] max-w-[760px] md:mt-8">
      <div className="flex flex-col items-center gap-7 bg-gray-100 px-6 py-14 md:flex-row md:justify-between md:gap-6 md:px-10 md:py-16">
        <p className="text-center text-base font-bold !leading-[1.7] tracking-wider text-gray-800 md:text-left md:text-lg">
          CTO不在やSaaSの課題に<br />お悩みの方はこちら
        </p>
        <div className="flex w-full flex-col lg:flex-row gap-2.5 md:w-auto md:flex-shrink-0">
          <DownloadButton
            size="medium"
            fullWidth
            href={`${ctaPrefix}/download`}
            className="md:w-auto"
          />
          <ContactButton
            size="medium"
            fullWidth
            href={`${ctaPrefix}/contact`}
            className="md:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
