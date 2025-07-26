import CtoTeamHeader from "./cto-team-header";

export default async function CtoTeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CtoTeamHeader />
      <main className="theme-cto-team">{children}</main>
    </>
  );
}
