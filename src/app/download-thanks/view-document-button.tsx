"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChevronRightIcon } from "lucide-react";
import { DOCUMENT_URL_MAP, type DocumentType } from "@/app/constants";
import { PrimaryButton } from "@/app/_components/ui/primary-button";

function ViewDocumentButtonContent() {
  return (
    <span className="relative flex w-full items-center justify-center">
      <span>すぐに資料を見る</span>
      <ChevronRightIcon className="absolute right-0 h-4 w-4" />
    </span>
  );
}

function ViewDocumentLinkInner({ children, ...props }: any) {
  const searchParams = useSearchParams();

  const email = searchParams.get("email") || "";
  const name = searchParams.get("name") || "";
  const company = searchParams.get("company") || "";
  const documentType = searchParams.get("documentType") as DocumentType;

  const params = new URLSearchParams({
    email: email,
    person_name: name,
    company_name: company,
  });
  const url = `${DOCUMENT_URL_MAP[documentType]}?ownerEmail=sumiren%40reminus.co.jp&${params.toString()}`;

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </Link>
  );
}

function ViewDocumentLink({ children, ...props }: any) {
  return (
    <Suspense fallback={<div {...props}>{children}</div>}>
      <ViewDocumentLinkInner {...props}>{children}</ViewDocumentLinkInner>
    </Suspense>
  );
}

export function ViewDocumentButton() {
  return (
    <div className="w-full max-w-80">
      <PrimaryButton fullWidth asChild>
        <ViewDocumentLink>
          <ViewDocumentButtonContent />
        </ViewDocumentLink>
      </PrimaryButton>
    </div>
  );
}
