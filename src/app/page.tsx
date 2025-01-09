import { CaseStudies } from "@/app/_components/case-studies";
import { Contact } from "@/app/_components/contact";
import { Competence } from "@/app/_components/competence";
import { Hero } from "@/app/_components/hero";
import { Services } from "./_components/services";

export default async function Home() {
  // "use cache";
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative">
        <Hero />
      </section>
      <section className="relative py-24 mx-auto">
        <Services />
      </section>

      <section className="relative">
        <Competence />
      </section>

      <section className="relative mx-auto">
       <CaseStudies />
      </section>

      {/*<section className="relative bg-white py-24">*/}
      {/*  <Contact />*/}
      {/*</section>*/}
    </div>
  );
}
