import type { Metadata } from "next";
import { CaseStudies } from "@/app/_components/sections/case-studies";
import { ClientLogos } from "@/app/_components/sections/client-logos";
import { CompanyOverview } from "@/app/_components/sections/company-overview";
import { News } from "@/app/_components/sections/news";
import { Cta } from "@/app/_components/sections/cta";
import { FirstView } from "@/app/_components/sections/first-view";
import { Management } from "@/app/_components/sections/management";
import { Problem } from "@/app/_components/sections/problem";
import { WhyReminus } from "@/app/_components/sections/why-reminus";
import { ServiceMenu } from "@/app/_components/sections/service-menu";
import { DownloadRequest } from "@/app/_components/sections/download-request";
import { ServiceOverview } from "@/app/_components/sections/service-overview";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

// C版トップページ（A版ベース）
export default function HomeC() {
  return (
    <>
      <FirstView />
      <ClientLogos />
      <div className="content-auto">
        <Problem />
        <ServiceOverview className="bg-white" />
        <CaseStudies className="bg-gray-50" />
        <ServiceMenu className="bg-gray-50" showChatSection={false} />
        <WhyReminus className="bg-white" />
        <Cta className="from-white to-gray-50" />
        <Management className="bg-gray-50" />
        <News />
        <DownloadRequest />
        <CompanyOverview />
      </div>
    </>
  );
}
