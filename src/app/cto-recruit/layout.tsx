import { Header } from "../_components/layout/header";
import { CtoRecruitNav } from "./_components/cto-recruit-nav";

export default async function CtoRecruitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header showNavMenu={false} rightContent={<CtoRecruitNav />} />
      <main>{children}</main>
    </>
  );
}
