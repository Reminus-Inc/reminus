import { Header } from "@/app/_components/layout/header";

export default function DownloadPageCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header showNavMenu={false} shadow variant="c" />
      <main>{children}</main>
    </>
  );
}
