import { SimpleHeader } from "@/app/_components/layout/simple-header";

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SimpleHeader />
      <main>{children}</main>
    </>
  );
}
