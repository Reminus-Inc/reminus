import { CaseStudies } from "@/app/_components/sections/case-studies";
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

export default function Home() {
  return (
    <>
      <FirstView />
      <ClientLogos />
      <div className="content-auto">
        <ServiceOverview />
        <CaseStudies className="bg-gray-50"  />
        <ServiceMenu />
        <Cta className="from-white to-gray-50" />
        <WhyReminus className="bg-gray-50" />
        <Management />
        <Cta className="from-white to-white" />
        <News/>
        <DownloadRequest />
        <CompanyOverview />
      </div>
  </>
  );
}
