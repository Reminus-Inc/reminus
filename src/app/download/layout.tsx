import { Header } from "@/app/_components/layout/header";

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header showNavMenu={false} />
      <main>{children}</main>
    </>
  );
}
