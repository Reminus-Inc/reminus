"use client";

import { DownloadForm } from "../_components/ui/download-form";
import { DOCUMENT_TYPE } from "../constants";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    immedio: any;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const immedio: any;
}

export function SecondDownloadForm() {
  return (
    <DownloadForm documentType={DOCUMENT_TYPE.CTO_UNIT} beforeThanks={(formValues) => {
      window.immedio?.submitFormData({
        additionalData: {
            email: formValues.email,
            person_name: formValues.name,
            phone_number: formValues.phone,
            company_name: formValues.company,
        },
      });
    }} />
  );
}
