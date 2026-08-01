"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { DOCUMENT_TYPE, type DocumentType } from "@/app/constants";
import { useLpContext } from "@/hooks/use-lp-context";
import { lpHomePath } from "@/lib/lp";

function BackToTopLinkClient({ children, ...props }: any) {
  const searchParams = useSearchParams();
  const documentType = searchParams.get("documentType") as DocumentType;
  // 資料種別で専用ページに戻すケース以外は、直前に見ていた LP × variant のトップに戻す。
  const { lp, variant } = useLpContext();
  const href = documentType === DOCUMENT_TYPE.CTO_RECRUIT
    ? "/cto-recruit"
    : documentType === DOCUMENT_TYPE.CTO_UNIT
      ? "/cto-team"
      : lpHomePath(lp, variant);

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
