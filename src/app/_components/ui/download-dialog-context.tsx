"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type DocumentDialogContextProps = {
  isDownloadDialogOpen: boolean;
  openDownloadDialog: () => void;
  closeDownloadDialog: () => void;
};

export const DownloadDialogContext =
  createContext<DocumentDialogContextProps | null>(null);

export const useDownloadDialogContext = () => {
  const ctx = useContext(DownloadDialogContext);
  if (ctx == null) {
    throw new Error(
      "DownloadDialogProvider の外で useDownDialogContext が呼ばれました"
    );
  }
  return ctx;
};

export const DownloadDialogProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo<DocumentDialogContextProps>(
    () => ({
      isDownloadDialogOpen: isOpen,
      openDownloadDialog: () => setIsOpen(true),
      closeDownloadDialog: () => setIsOpen(false),
    }),
    [isOpen]
  );

  return (
    <DownloadDialogContext.Provider value={value}>
      {children}
    </DownloadDialogContext.Provider>
  );
};
