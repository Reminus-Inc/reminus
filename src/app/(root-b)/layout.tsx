import { Header } from "../_components/layout/header";

export default async function TopBLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="b" />
      <main>{children}</main>
    </>
  );
}
