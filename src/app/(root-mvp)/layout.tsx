import { Header } from "@/app/_components/layout/header";

export default async function MvpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* LP は mvp、variant は a。ロゴの戻り先と資料DL の遷移先が LP 定義から導出される。 */}
      <Header lp="mvp" variant="a" />
      <main>{children}</main>
    </>
  );
}
