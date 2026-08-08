import { Header } from "@/app/_components/layout/header";

// LP ホーム (/mvp) 専用のレイアウト。ここは「まだ variant が決まっていない状態」なので
// variant は渡さない。ロゴの戻り先は /mvp、資料DL は LP 定義の downloadPath になる。
export default async function MvpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header lp="mvp" />
      <main>{children}</main>
    </>
  );
}
