import { Header } from "../_components/layout/header";
import { DownloadDialogProvider } from "./_components/ui/download-dialog-context";
import { DownloadDialog } from "./_components/ui/download-dialog";
import { DownloadDialogCloser } from "./_components/layout/download-dialog-closer";

export default async function TopBLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DownloadDialogProvider>
      <Header variant="b" />
      <main>{children}</main>
      <DownloadDialog />
      <DownloadDialogCloser />
    </DownloadDialogProvider>
  );
}
