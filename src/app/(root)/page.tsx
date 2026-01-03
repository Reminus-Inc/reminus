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

export default function Home() {
  return (
    <>
      <FirstView />
      <ClientLogos />
      <ServiceOverview />
      <ServiceMenu className="bg-gray-50" />
      <WhyReminus />
      <Cta className="from-white to-white" />
      <CaseStudies />
      <Management className="bg-gray-50" />
      <Cta className="from-gray-50 to-white" />
      <News />
      <CompanyOverview />
    </>
  );
}
