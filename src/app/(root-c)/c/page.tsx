import type { Metadata } from "next";
import { CaseStudies } from "@/app/_components/sections/case-studies";
import { Column } from "@/app/_components/sections/column";
import { ClientLogos } from "../_components/sections/client-logos";
import { CompanyOverview } from "@/app/_components/sections/company-overview";
import { Cta } from "@/app/_components/sections/cta";
import { Faq } from "../_components/sections/faq";
import { FirstView } from "../_components/sections/first-view";
import { Management } from "@/app/_components/sections/management";
import { Problem } from "@/app/_components/sections/problem";
import { WhyReminus } from "../_components/sections/why-reminus";
import { ServiceMenu } from "../_components/sections/service-menu";
import { ServiceOverview } from "../_components/sections/service-overview";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

// C版トップページ（A版ベース）
export default function HomeC() {
  return (
    <>
      <FirstView />
      <div className="mt-10 sm:mt-14">
        <ClientLogos />
      </div>
      <div className="content-auto">
        <Problem />
        <ServiceOverview className="bg-white" />
        <ServiceMenu className="bg-gray-50" />
        <WhyReminus className="bg-white" />
        <Cta className="from-white to-gray-50" />
        <CaseStudies className="bg-gray-50" />
        <Column className="bg-white" />
        <Faq className="bg-gray-50" />
        <Management className="bg-white" />
        <Cta className="from-white to-white" />
        <CompanyOverview />
      </div>
    </>
  );
}
