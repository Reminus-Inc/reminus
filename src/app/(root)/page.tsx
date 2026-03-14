import { CaseStudies } from "@/app/_components/sections/case-studies";
import { ClientLogos } from "../_components/sections/client-logos";
import { CompanyOverview } from "../_components/sections/company-overview";
import { News } from "../_components/sections/news";
import { Cta } from "../_components/sections/cta";
import { FirstView } from "../_components/sections/first-view";
import { Management } from "../_components/sections/management";
import { ServiceOverview } from "../_components/sections/service-overview";
import { WhyReminus } from "../_components/sections/why-reminus";
import { Comparison } from "../_components/sections/comparison";
import { ServiceMenu } from "../_components/sections/service-menu";
import { DownloadRequest } from "../_components/sections/download-request";

export default function Home() {
  return (
    <>
      <FirstView />
      <ClientLogos />
      <div className="content-auto">
        <ServiceOverview />
        <ServiceMenu className="bg-gray-50" />
        <WhyReminus className="bg-white" />
        <Cta className="from-white to-gray-50" />
        <CaseStudies className="bg-gray-50" />
        <Comparison className="bg-white" />
        <Management className="bg-gray-50" />
        <News />
        <DownloadRequest />
        <CompanyOverview />
      </div>
    </>
  );
}
