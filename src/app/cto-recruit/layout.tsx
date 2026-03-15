import { Header } from "../_components/layout/header";

export default async function CtoRecruitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
