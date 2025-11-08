import { CaseStudies } from "@/app/_components/sections/case-studies";
import { Challenges } from "../_components/sections/challenges";
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
      <Challenges />
      <Solutions />
      <ServiceOverview />
      <Cta className=" from-gray-50 to-white" />
      <CaseStudies />
      <NoteArticles />
      <Management />
      <Cta className=" from-white to-gray-100" />
      <CompanyOverview />
    </>
  );
}
