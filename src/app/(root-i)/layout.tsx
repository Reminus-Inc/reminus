import { Header } from "@/app/_components/layout/header";

export default async function TopILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="i" />
      <main>{children}</main>
    </>
  );
}
