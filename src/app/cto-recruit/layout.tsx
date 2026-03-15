import { Header } from "../_components/layout/header";
import { CtoRecruitNav } from "./_components/cto-recruit-nav";
import { FloatingCta } from "./_components/floating-cta";

export default async function CtoRecruitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header showNavMenu={false} rightContent={<CtoRecruitNav />} logoHref="/cto-recruit" />
      <main>{children}</main>
      <FloatingCta />
    </>
  );
}
