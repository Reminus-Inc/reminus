import { CaseStudies } from "@/app/_components/cast-studies";
import { Contact } from "@/app/_components/contact";
import { Competence } from "@/app/_components/competence";
import { Services } from "@/app/_components/services";
import { Hero } from "@/app/_components/hero";

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

      {/*<section className="relative">*/}
      {/*  <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />*/}
      {/*  <div className="absolute inset-0 grid-pattern opacity-10" />*/}
      {/*  <div className="absolute inset-0 noise opacity-50" />*/}
      {/*  <Competence />*/}
      {/*</section>*/}

      {/*<section className="relative bg-gradient-to-b from-white to-gray-50 py-24">*/}
      {/*  <div className="absolute inset-0 noise" />*/}
      {/*  <CaseStudies />*/}
      {/*</section>*/}

      {/*<section className="relative bg-white py-24">*/}
      {/*  <Contact />*/}
      {/*</section>*/}
    </div>
  );
}
