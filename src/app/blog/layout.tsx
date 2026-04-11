import { Header } from "@/app/_components/layout/header";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header showNavMenu={false} shadow />
      <main>{children}</main>
    </>
  );
}
