"use client";

import { CtoPartnerHero } from "./cto-partner-hero";
import { EngineeringElements } from "../engineering-elements";
import { ServicePlans } from "../service-plans";
import { PhaseSupport } from "../phase-support";
import { EngagementStyle } from "../engagement-style";
import { CtoPartnerCta } from "../cto-partner-cta";

export function CtoPartner() {
  return (
    <div className="flex flex-col">
      <main className="">
        <CtoPartnerHero />
        <EngineeringElements />
        {/*<ServicePlans />
        <PhaseSupport />
        <EngagementStyle />
        <CtoPartnerCta /> */}
      </main>
    </div>
  );
}