import { CaseStudies } from "@/app/_components/sections/case-studies";
import { ClientLogos } from "../_components/sections/client-logos";
import { CompanyOverview } from "../_components/sections/company-overview";
import { NoteArticles } from "../_components/sections/note-articles";
import { Cta } from "../_components/sections/cta";
import { FirstView } from "../_components/sections/first-view";
import { Management } from "../_components/sections/management";
import { Solutions } from "../_components/sections/solutions";
import { ServiceOverview } from "../_components/sections/service-overview";

export default function Home() {
  return (
    <>
      <FirstView />
      <ClientLogos />
      <ServiceOverview />
      <Solutions />
      <Cta className="from-white to-white" />
      <CaseStudies />
      <NoteArticles />
      <Management />
      <Cta className="from-white to-gray-100" />
      <CompanyOverview />
    </>
  );
}
