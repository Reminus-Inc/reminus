import { Header } from "@/app/_components/layout/header";

export default async function TopLLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="l" />
      <main>{children}</main>
    </>
  );
}
