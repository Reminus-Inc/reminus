import { Header } from "@/app/_components/layout/header";

export default async function TopELayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="e" />
      <main>{children}</main>
    </>
  );
}
