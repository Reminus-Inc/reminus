"use client";

import { CtoPartnerHero } from "./cto-partner-hero";
import { EngineeringElements } from "../engineering-elements";

export function CtoPartner() {
  return (
    <div className="flex flex-col">
      <main className="">
        <CtoPartnerHero />
        {/*<ServicePlans />
        <PhaseSupport />
        <EngagementStyle />
        <CtoPartnerCta /> */}
      </main>
    </div>
  );
}