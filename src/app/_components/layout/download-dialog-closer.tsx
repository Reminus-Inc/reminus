"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useDownloadDialogContext } from "@/app/_components/ui/download-dialog-context";

export function DownloadDialogCloser() {
  const pathname = usePathname();
  const [prevPathName, setPrevPathName] = useState(pathname);
  const { isDownloadDialogOpen, closeDownloadDialog } =
    useDownloadDialogContext();
  useEffect(() => {
    if (prevPathName !== pathname) {
      setPrevPathName(pathname);
      if (isDownloadDialogOpen) {
        closeDownloadDialog();
      }
    }
  }, [pathname, prevPathName, isDownloadDialogOpen, closeDownloadDialog]);

  return null;
}
  