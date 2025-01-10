import { Competence } from "@/app/_components/competence";
import { Hero } from "@/app/_components/hero";
import { Services } from "./_components/services";
import { CaseStudies } from "@/app/_components/case-studies";
import React from "react";
import { Contact } from "@/app/_components/contact";

export default function Home() {
  // "use cache";
  return (
    <div className="flex flex-col min-h-svh">
      <section className="relative">
        <Hero />
      </section>
      <section className="relative mx-auto">
        <Services />
      </section>

      <section className="relative">
        <Competence />
      </section>

      <section className="relative">
        <CaseStudies />
      </section>
      <section className="relative">
        <Contact />
      </section>
    </div>
  );
}
