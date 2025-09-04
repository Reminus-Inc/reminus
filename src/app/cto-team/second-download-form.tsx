"use client";

import {DownloadForm, HookDownloadForm} from "../_components/ui/download-form";
import { DOCUMENT_TYPE } from "../constants";
import {useEffect, useState} from "react";

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
    <HookDownloadForm
      documentType={DOCUMENT_TYPE.CTO_UNIT}
      beforeThanks={(formValues) => {
        window.immedio?.submitFormData({
          additionalData: {
            email: formValues.email,
            person_name: formValues.name,
            phone_number: formValues.phone,
            company_name: formValues.company,
          },
        });
      }}
    />
  );
}

export function FirstDownloadForm() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 640px)"); // sm以上
    const handler = () => setIsDesktop(media.matches);
    handler();
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);


  return (
    isDesktop && <DownloadForm documentType={DOCUMENT_TYPE.CTO_UNIT} />
  );
}
