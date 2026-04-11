import { Header } from "@/app/_components/layout/header";

export default async function TopCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="c" />
      <main>{children}</main>
    </>
  );
}
