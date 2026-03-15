import { Metadata } from "next";
import { CtoRecruitFirstView } from "./_components/first-view";
import { PainPoints } from "./_components/pain-points";
// ServiceFlowはFVに統合したため非表示
// import { ServiceFlow } from "./_components/service-flow";
import { WhyReminus } from "./_components/why-reminus";
import { Comparison } from "./_components/comparison";
import { TrackRecord } from "./_components/track-record";
import { CtoRecruitCta } from "./_components/cta";
import { MidCta } from "./_components/mid-cta";
import { GettingStarted } from "./_components/getting-started";
import { Faq } from "./_components/faq";
import { CtoRecruitClientLogos } from "./_components/client-logos";
// import { CtoRecruitCaseStudies } from "./_components/case-studies";
import { Management } from "../_components/sections/management";
import { CompanyOverview } from "../_components/sections/company-overview";

export const metadata: Metadata = {
  title: "CTO採用支援 | 株式会社Reminus（レミナス）",
  description:
    "CTO代行で培った知見を活かし、CTO・エンジニアマネージャーの採用を支援。媒体選定・スカウト・面接設計・オファーまで一気通貫でサポートします。",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "CTO採用支援 | 株式会社Reminus（レミナス）",
    description:
      "CTO代行で培った知見を活かし、CTO・エンジニアマネージャーの採用を支援。媒体選定からオファーまで一気通貫でサポート。",
    url: "https://www.reminus.co.jp/cto-recruit",
    siteName: "株式会社Reminus",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CTO採用支援 | 株式会社Reminus（レミナス）",
    description:
      "CTO代行で培った知見を活かし、CTO・エンジニアマネージャーの採用を支援。",
  },
};

export default function CtoRecruitPage() {
  return (
    <>
      <CtoRecruitFirstView />
      <CtoRecruitClientLogos />
      <div className="content-auto">
        <PainPoints className="bg-white" />
        {/* ServiceFlowはFVに統合 */}
        <MidCta className="bg-gray-50" />
        <WhyReminus className="bg-white" />
        <Comparison className="bg-gray-50" />
        {/* 導入事例: クライアント許可取得後に再表示 */}
        {/* <CtoRecruitCaseStudies className="bg-gray-50" /> */}
        <TrackRecord className="bg-white" />
        <GettingStarted className="bg-white" />
        <Faq className="bg-gray-50" />
        <CtoRecruitCta className="from-gray-50 to-gray-50" />
        <Management className="bg-white" />
        <CompanyOverview />
      </div>
    </>
  );
}
