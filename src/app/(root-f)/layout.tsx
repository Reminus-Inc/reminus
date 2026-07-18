import { Header } from "@/app/_components/layout/header";

export default async function TopFLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="f" />
      <main>{children}</main>
    </>
  );
}
