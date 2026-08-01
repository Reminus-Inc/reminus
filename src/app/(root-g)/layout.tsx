import { Header } from "@/app/_components/layout/header";

export default async function TopGLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="g" />
      <main>{children}</main>
    </>
  );
}
