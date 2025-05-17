"use client";

import { CtoPartnerCta } from "../cto-partner-cta";
import { EngineeringElements } from "../engineering-elements";
import { CtoPartnerHero } from "./cto-partner-hero";

export function CtoPartner() {
  return (
    <div className="flex flex-col">
      <main className="">
        <CtoPartnerHero />
        <EngineeringElements />
        {/*<ServicePlans />
        <PhaseSupport />
        <EngagementStyle />*/}
        <CtoPartnerCta /> 
      </main>
    </div>
  );
}