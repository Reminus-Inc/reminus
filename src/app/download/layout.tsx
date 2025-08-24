import { Header } from "../_components/layout/header";

export default async function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header showNavMenu={true} />
      <main>{children}</main>
    </>
  );
}
