import { Header } from "@/app/_components/layout/header";

export default async function TopHLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="h" />
      <main>{children}</main>
    </>
  );
}
