import { Header } from "../_components/layout/header";

export default async function TopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col pt-16">{children}</main>
    </>
  );
}
