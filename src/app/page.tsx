import { Competence } from "@/app/_components/competence";
import { Hero } from "@/app/_components/hero";
import { Services } from "./_components/services";
import { CaseStudies } from "@/app/_components/case-studies";
import React from "react";
import { Contact } from "@/app/_components/contact";
import { Management } from "./_components/management";
import { CTOPartnerPlans } from "./_components/cto-partner-plans";
import { CTOPartnerServiceRange } from "./_components/cto-partner-service-range";

export default function Home() {
  // "use cache";
  return (
    <div className="flex flex-col min-h-svh">
      <section className="relative">
        <Hero />
      </section>
      <section className="relative">
        <CTOPartnerPlans />
      </section>
      <section className="relative">
        <CTOPartnerServiceRange />
      </section>
      <section className="relative">
        <Services />
      </section>
      <section className="relative">
        <CaseStudies />
      </section>
      
      <section className="relative">
        <Competence />
      </section>
      <section className="relative">
        <Management />
      </section>
      <section className="relative">
        <Contact />
      </section>
    </div>
  );
}
