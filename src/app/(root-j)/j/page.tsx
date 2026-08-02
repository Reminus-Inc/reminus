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

// J版トップページ（I版のコピー）。G版との違いは FirstView のみで、
//   - 箇条書き 3 点を 1 つのサブコピーに置き換え
//   - PC だけに出していたヒーロー画像を SP でも表示 (旧 c 版 b6965e5 と同じ方式)
// 以下は G版から引き継いだ C版との違い:
//   - 導入事例をクライアントロゴ直下に移動し、早い段階で実績を見せる
//   - その他事例 / FAQ / メンバー一覧を非表示 (D版と同じ絞り込み)
//   - 「SaaS」のワーディングを「プロダクト」に変更。共有セクションのうち
//     problem / column / management は g 用にフォークして文言を差し替えている。
//     導入事例のカテゴリ表記 (「医療AI SaaS」等) は顧客企業の業種表記なので据え置き
export default function HomeJ() {
  return (
    <>
      <FirstView />
      {/* 直後が グレー背景の導入事例 なので、白地側に余白を持たせて境界がロゴに
          張り付かないようにする。その分だけ導入事例の上余白 (既定 py-24/sm:py-32) を詰める。 */}
      <div className="mt-8 pb-12 sm:mt-14 sm:pb-16">
        <ClientLogos />
      </div>
      <div className="content-auto">
        <CaseStudies
          className="bg-gray-50 pt-16 sm:pt-24"
          showOtherCases={false}
        />
        <Problem />
        <ServiceOverview className="bg-white" />
        <ServiceMenu className="bg-gray-50" />
        <WhyReminus className="bg-white" />
        <Cta className="from-white to-gray-50" downloadHref="/download" />
        <Column className="bg-white" />
        <Management className="bg-gray-50" />
        <Cta className="from-white to-white" downloadHref="/download" />
        <CompanyOverview />
      </div>
    </>
  );
}
