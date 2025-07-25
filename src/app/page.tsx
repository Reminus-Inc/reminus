import { FirstView } from "./_components/sections/first-view";
import { ClientLogos } from "./_components/sections/client-logos";
import { Challenges } from "./_components/sections/challenges";
import { Solutions } from "./_components/sections/solutions";
import { ServicePlans } from "./_components/sections/service-plans";
import { PhaseSupport } from "./_components/sections/phase-support";
import { EngagementStyle } from "./_components/sections/engagement-style";
import { CompanyOverview } from "./_components/sections/company-overview";
import { Cta } from "./_components/sections/cta";
import { ServiceOfferings } from "./_components/sections/service-offerings";
import { CaseStudies } from "@/app/_components/sections/case-studies";
import React from "react";
import { Management } from "./_components/sections/management";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      <section className="relative">
        <FirstView />
      </section>
      <section className="relative">
        <ClientLogos />
      </section>
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
      <section className="relative">
        <CaseStudies />
      </section>
      <section className="relative">
        <ServiceOfferings />
      </section>
      <section className="relative">
        <Management />
      </section>

      <CompanyOverview />
    </div>
  );
}
