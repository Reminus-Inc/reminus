import { CaseStudies } from "@/app/_components/sections/case-studies";
import { Challenges } from "../_components/sections/challenges";
import { ClientLogos } from "../_components/sections/client-logos";
import { CompanyOverview } from "../_components/sections/company-overview";
import { Cta } from "../_components/sections/cta";
import { FirstView } from "../_components/sections/first-view";
import { Management } from "../_components/sections/management";
import { ServiceOfferings } from "../_components/sections/service-offerings";
import { Solutions } from "../_components/sections/solutions";
import { ServiceOverview } from "../_components/sections/service-overview";

export default function Home() {
  return (
    <>
      <FirstView />
      <ClientLogos />
      <Challenges />
      <Solutions />
      <ServiceOverview />
      <Cta />
      <CaseStudies />
      <ServiceOfferings />
      <Management />
      <CompanyOverview />
    </>
  );
}
