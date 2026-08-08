import { Header } from "@/app/_components/layout/header";
import { DownloadDialogProvider } from "./_components/download-dialog-context";
import { DownloadDialog } from "./_components/download-dialog";
import { DownloadDialogCloser } from "./_components/download-dialog-closer";

export default async function TopKLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 当時は資料DLがモーダルだったので Provider ごと復元する。当時はルートレイアウトに
    // 置かれていたが、他の variant に影響させないため k のレイアウト内に閉じ込めている。
    <DownloadDialogProvider>
      {/* ページ本体は当時のスナップショットだが、ヘッダーは現行のものを使う。
          LP × variant の文脈 (ロゴの戻り先・資料DL の遷移先) を他 variant と揃えるため。 */}
      <Header variant="k" />
      <main>{children}</main>
      <DownloadDialog />
      <DownloadDialogCloser />
    </DownloadDialogProvider>
  );
}
