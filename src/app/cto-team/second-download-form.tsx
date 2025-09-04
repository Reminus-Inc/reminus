"use client";

import {DownloadForm} from "../_components/ui/download-form";
import { DOCUMENT_TYPE } from "../constants";
import {useEffect, useState} from "react";

export function SecondDownloadForm() {
  return (
    <DownloadForm
      documentType={DOCUMENT_TYPE.CTO_UNIT}
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
