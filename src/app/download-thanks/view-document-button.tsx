"use client";

import { useSearchParams } from "next/navigation";
import { DOCUMENT_URL_MAP, type DocumentType } from "@/app/constants";

import { PrimaryButton } from "@/app/_components/ui/primary-button";

export function ViewDocumentButton() {
  const searchParams = useSearchParams();

  const email = searchParams.get("email") || "";
  const name = searchParams.get("name") || "";
  const company = searchParams.get("company") || "";
  const documentType = searchParams.get("documentType") as DocumentType;

  const handleViewDocument = () => {
    const params = new URLSearchParams({
      email: email,
      person_name: name,
      company_name: company,
    });
    const url = `${DOCUMENT_URL_MAP[documentType]}?ownerEmail=sumiren%40reminus.co.jp&${params.toString()}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full max-w-80">
      <PrimaryButton fullWidth onClick={handleViewDocument}>
        資料を見る
      </PrimaryButton>
    </div>
  );
}
