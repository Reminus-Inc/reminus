import { Metadata } from "next";
import { CtoRecruitFirstView } from "./_components/first-view";
import { PainPoints } from "./_components/pain-points";
import { TransitionStatement } from "./_components/transition-statement";
import { WhyReminus } from "./_components/why-reminus";
import { CtoServiceDiagram } from "./_components/cto-service-diagram";
import { ServiceFlowCards } from "./_components/service-flow-cards";
import { Comparison } from "./_components/comparison";
import { Schedule } from "./_components/schedule";
import { CtoRecruitCta } from "./_components/cta";
import { Faq } from "./_components/faq";
import { CtoRecruitClientLogos } from "./_components/client-logos";

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
        <ServiceFlowCards className="bg-gray-50" />
        <PainPoints className="bg-white" />
        <TransitionStatement />
        <WhyReminus className="bg-white" />
        <CtoServiceDiagram className="bg-gray-50" />
        <Comparison className="bg-white" />
        <Schedule className="bg-gray-50" />
        <CtoRecruitCta className="bg-white" />
        <Faq className="bg-gray-50" />
      </div>
    </>
  );
}
