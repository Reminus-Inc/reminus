import { Header } from "@/app/_components/layout/header";

export default async function TopKLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ページ本体は当時のスナップショットだが、ヘッダーは現行のものを使う。
          LP × variant の文脈 (ロゴの戻り先・資料DL の遷移先) を他 variant と揃えるため。 */}
      <Header variant="k" />
      <main>{children}</main>
    </>
  );
}
