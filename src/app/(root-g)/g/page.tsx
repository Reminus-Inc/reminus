import type { Metadata } from "next";
import { CaseStudies } from "@/app/_components/sections/case-studies";
import { ClientLogos } from "@/app/_components/sections/client-logos";
import { CompanyOverview } from "@/app/_components/sections/company-overview";
import { Cta } from "@/app/_components/sections/cta";
import { Column } from "../_components/sections/column";
import { FirstView } from "../_components/sections/first-view";
import { Management } from "../_components/sections/management";
import { Problem } from "../_components/sections/problem";
import { WhyReminus } from "../_components/sections/why-reminus";
import { ServiceMenu } from "../_components/sections/service-menu";
import { ServiceOverview } from "../_components/sections/service-overview";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

// G版トップページ（C版ベース）。C版との違い:
//   - 導入事例をクライアントロゴ直下に移動し、早い段階で実績を見せる
//   - その他事例 / FAQ / メンバー一覧を非表示 (D版と同じ絞り込み)
//   - 「SaaS」のワーディングを「プロダクト」に変更。共有セクションのうち
//     problem / column / management は g 用にフォークして文言を差し替えている。
//     導入事例のカテゴリ表記 (「医療AI SaaS」等) は顧客企業の業種表記なので据え置き
export default function HomeG() {
  return (
    <>
      <FirstView />
      <div className="mt-8 sm:mt-14">
        <ClientLogos />
      </div>
      <div className="content-auto">
        <CaseStudies className="bg-gray-50" showOtherCases={false} />
        <Problem />
        <ServiceOverview className="bg-white" />
        <ServiceMenu className="bg-gray-50" />
        <WhyReminus className="bg-white" />
        <Cta className="from-white to-gray-50" downloadHref="/c/download" />
        <Column className="bg-white" />
        <Management className="bg-gray-50" />
        <Cta className="from-white to-white" downloadHref="/c/download" />
        <CompanyOverview />
      </div>
    </>
  );
}
