import type { Metadata } from "next";
import { CaseStudies } from "../_components/sections/case-studies";
import { Column } from "@/app/_components/sections/column";
import { ClientLogos } from "@/app/_components/sections/client-logos";
import { CompanyOverview } from "@/app/_components/sections/company-overview";
import { Cta } from "../_components/sections/cta";
import { Faq } from "../_components/sections/faq";
import { FirstView } from "../_components/sections/first-view";
import { Management } from "@/app/_components/sections/management";
import { Problem } from "../_components/sections/problem";
import { WhyReminus } from "../_components/sections/why-reminus";
import { ServiceMenu } from "../_components/sections/service-menu";
import { DownloadRequest } from "../_components/sections/download-request";
import { ServiceOverview } from "../_components/sections/service-overview";

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
        <ServiceMenu className="bg-gray-50" />
        <WhyReminus className="bg-white" />
        <Cta className="from-white to-white" />
        <Column className="bg-white" />
        <Faq className="bg-gray-50" />
        <Management className="bg-white" />
        <DownloadRequest />
        <CompanyOverview />
      </div>
    </>
  );
}
