import type { Metadata } from "next";
import { CaseStudies } from "../_components/sections/case-studies";
import { ClientLogos } from "../_components/sections/client-logos";
import { CompanyOverview } from "../_components/sections/company-overview";
import { News } from "../_components/sections/news";
import { Cta } from "../_components/sections/cta";
import { FirstView } from "../_components/sections/first-view";
import { Management } from "../_components/sections/management";
import { ServiceOverview } from "../_components/sections/service-overview";
import { WhyReminus } from "../_components/sections/why-reminus";
import { ServiceMenu } from "../_components/sections/service-menu";
import { DownloadRequest } from "../_components/sections/download-request";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

// B版トップページ（614c920 時点のセクション構成）
export default function HomeB() {
  return (
    <>
      <FirstView />
      <ClientLogos />
      <ServiceOverview />
      <ServiceMenu className="bg-gray-50" />
      <Cta className="from-gray-50 to-gray-50" />
      <WhyReminus className="bg-gray-50" />
      <CaseStudies />
      <Management className="bg-gray-50" />
      <Cta className="from-gray-50 to-white" />
      <News />
      <DownloadRequest />
      <CompanyOverview />
    </>
  );
}
