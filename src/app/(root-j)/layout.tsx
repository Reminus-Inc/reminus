import { Header } from "@/app/_components/layout/header";

export default async function TopJLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="j" />
      <main>{children}</main>
    </>
  );
}
