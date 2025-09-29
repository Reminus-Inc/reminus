"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { DOCUMENT_TYPE, type DocumentType } from "@/app/constants";

export function BackToTopLink() {
  const searchParams = useSearchParams();
  const documentType = searchParams.get("documentType") as DocumentType;
  const href = documentType === DOCUMENT_TYPE.CTO_UNIT ? "/cto-team" : "/";

  return (
    <Link
      href={href}
      className="text-sm font-bold text-gray-500 underline sm:text-base"
    >
      トップへ戻る
    </Link>
  );
}
