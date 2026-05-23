import { Header } from "@/app/_components/layout/header";

export default async function TopC2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="c2" />
      <main>{children}</main>
    </>
  );
}
