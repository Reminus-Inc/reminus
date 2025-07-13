"use client";

import { CtoPartnerCta } from "../cto-partner-cta";
import { EngagementStyle } from "../engagement-style";
import { PhaseSupport } from "../phase-support";
import { ServicePlans } from "../service-plans";
import { CtoPartnerHero } from "./cto-partner-hero";

export function CtoPartner() {
  return (
    <div className="flex flex-col">
      <main className="">
        <CtoPartnerHero />
        <ServicePlans />
        <PhaseSupport />
        <EngagementStyle /> 
        {/* <導入事例 />*/}
        <CtoPartnerCta /> 
      </main>
    </div>
  );
}