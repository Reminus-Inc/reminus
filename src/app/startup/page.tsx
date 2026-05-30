import type { Metadata } from "next";
import { CaseStudies } from "@/app/_components/sections/case-studies";
import { ClientLogos } from "@/app/_components/sections/client-logos";
import { CompanyOverview } from "./_components/sections/company-overview";
import { Column } from "@/app/_components/sections/column";
import { Cta } from "@/app/_components/sections/cta";
import { FirstView } from "./_components/sections/first-view";
import { Management } from "@/app/_components/sections/management";
import { ServiceOverview } from "./_components/sections/service-overview";
import { WhyReminus } from "./_components/sections/why-reminus";
import { ServiceMenu } from "./_components/sections/service-menu";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

// B版トップページ（614c920 時点のセクション構成）
export default function HomeB() {
  return (
    <>
      <FirstView />
      <div className="mt-4 sm:mt-10">
        <ClientLogos />
      </div>
      <ServiceOverview />
      <ServiceMenu className="bg-gray-50" />
      <Cta className="from-gray-50 to-gray-50" />
      <WhyReminus className="bg-gray-50" />
      <CaseStudies />
      <Management className="bg-gray-50" />
      <Cta className="from-gray-50 to-white" />
      <Column className="bg-white" />
      <CompanyOverview />
    </>
  );
}
