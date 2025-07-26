import { CaseStudies } from "@/app/_components/sections/case-studies";
import { Challenges } from "../_components/sections/challenges";
import { ClientLogos } from "../_components/sections/client-logos";
import { CompanyOverview } from "../_components/sections/company-overview";
import { Cta } from "../_components/sections/cta";
import { EngagementStyle } from "../_components/sections/engagement-style";
import { FirstView } from "../_components/sections/first-view";
import { Management } from "../_components/sections/management";
import { PhaseSupport } from "../_components/sections/phase-support";
import { ServiceOfferings } from "../_components/sections/service-offerings";
import { ServicePlans } from "../_components/sections/service-plans";
import { Solutions } from "../_components/sections/solutions";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      <section className="relative">
        <FirstView />
      </section>
      <div className="border-b border-gray-200 bg-white py-8">
        <div className="container mx-auto px-6">
          <ClientLogos />
        </div>
      </div>
      <section className="relative">
        <Challenges />
      </section>
      <section className="relative">
        <Solutions />
      </section>
      <section className="relative">
        <ServicePlans />
      </section>
      <section className="relative">
        <PhaseSupport />
      </section>
      <section className="relative">
        <EngagementStyle />
      </section>
      <section className="relative">
        <Cta />
      </section>
      <section className="relative" data-nosnippet>
        <CaseStudies />
      </section>
      <section className="relative" data-nosnippet>
        <ServiceOfferings />
      </section>
      <section className="relative" data-nosnippet>
        <Management />
      </section>

      <CompanyOverview />
    </div>
  );
}
