"use client";

import { CtoPartnerHero } from "./cto-partner-hero";

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