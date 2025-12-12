import { CaseStudies } from "@/app/_components/sections/case-studies";
import { ClientLogos } from "../_components/sections/client-logos";
import { CompanyOverview } from "../_components/sections/company-overview";
import { News } from "../_components/sections/news";
import { Cta } from "../_components/sections/cta";
import { FirstView } from "../_components/sections/first-view";
import { Management } from "../_components/sections/management";
import { Solutions } from "../_components/sections/solutions";
import {
  PhaseMerit,
  ServiceOverview,
} from "../_components/sections/service-overview";
import { WhyReminus } from "../_components/sections/why-reminus";

export default function Home() {
  return (
    <>
      <FirstView />
      <ClientLogos />
      <ServiceOverview />
      <WhyReminus />
      <Solutions />
      <Cta className="from-white to-gray-50" />
      <PhaseMerit />
      <CaseStudies />
      <Management />
      <News />
      <Cta className="from-white to-gray-100" />
      <CompanyOverview />
    </>
  );
}
