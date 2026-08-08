import type { Metadata } from "next";
import { CaseStudies } from "../_components/sections/case-studies";
import { ClientLogos } from "../_components/sections/client-logos";
import { CompanyOverview } from "../_components/sections/company-overview";
import { NoteArticles } from "../_components/sections/note-articles";
import { Cta } from "../_components/sections/cta";
import { FirstView } from "../_components/sections/first-view";
import { Management } from "../_components/sections/management";
import { Solutions } from "../_components/sections/solutions";
import { ServiceOverview } from "../_components/sections/service-overview";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

// K版トップページ。2025-11-19 時点 (ca8daf4 "feat: note heading") のトップを
// ほぼそのまま復元したもの。当時はまだ variant 分岐前で (root) が唯一のトップだった。
// 当時のセクションと、それが依存する ui コンポーネントを (root-k)/_components に
// スナップショットしてあるので、その後の共有コンポーネントの変更には影響されない。
export default function HomeK() {
  return (
    <>
      <FirstView />
      <ClientLogos />
      <ServiceOverview />
      <Solutions />
      <Cta className="from-white to-white" />
      <CaseStudies />
      <NoteArticles />
      <Management />
      <Cta className="from-white to-gray-100" />
      <CompanyOverview />
    </>
  );
}
