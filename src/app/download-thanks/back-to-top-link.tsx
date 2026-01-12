"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { DOCUMENT_TYPE, type DocumentType } from "@/app/constants";

function BackToTopLinkClient({ children, ...props }: any) {
  const searchParams = useSearchParams();
  const documentType = searchParams.get("documentType") as DocumentType;
  const href = documentType === DOCUMENT_TYPE.CTO_UNIT ? "/cto-team" : "/";

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}

export function BackToTopLink() {
  const linkText = (
    <span className="text-sm font-bold text-gray-500 underline sm:text-base">
      トップへ戻る
    </span>
  );

  return (
    <Suspense fallback={<div>{linkText}</div>}>
      <BackToTopLinkClient>{linkText}</BackToTopLinkClient>
    </Suspense>
  );
}
