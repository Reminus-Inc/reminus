import { Header } from "@/app/_components/layout/header";

// variant a 専用のレイアウト。(root-c) 等と同じく 1 variant = 1 グループで、
// variant を直書きする。ロゴの戻り先と資料DL の遷移先が LP 定義から導出される。
export default async function MvpALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header lp="mvp" variant="a" />
      <main>{children}</main>
    </>
  );
}
