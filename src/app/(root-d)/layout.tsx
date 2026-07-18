import { Header } from "@/app/_components/layout/header";

export default async function TopDLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="d" />
      <main>{children}</main>
    </>
  );
}
