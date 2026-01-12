"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { DOCUMENT_TYPE, type DocumentType } from "@/app/constants";

function BackToTopText() {
  return (
    <span className="text-sm font-bold text-gray-500 underline sm:text-base">
      トップへ戻る
    </span>
  );
}

function BackToTopLinkClient() {
  const searchParams = useSearchParams();
  const documentType = searchParams.get("documentType") as DocumentType;
  const href = documentType === DOCUMENT_TYPE.CTO_UNIT ? "/cto-team" : "/";

  return (
    <Link href={href}>
      <BackToTopText />
    </Link>
  );
}

export function BackToTopLink() {
  return (
    <Suspense fallback={<BackToTopText />}>
      <BackToTopLinkClient />
    </Suspense>
  );
}
