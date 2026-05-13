import type { Metadata } from "next";
import { Blog } from "../_components/sections/blog";
import { CaseStudies } from "../_components/sections/case-studies";
import { ClientLogos } from "@/app/_components/sections/client-logos";
import { CompanyOverview } from "@/app/_components/sections/company-overview";
import { Cta } from "../_components/sections/cta";
import { Faq } from "../_components/sections/faq";
import { FirstView } from "../_components/sections/first-view";
import { Management } from "@/app/_components/sections/management";
import { Problem } from "../_components/sections/problem";
import { WhyReminus } from "../_components/sections/why-reminus";
import { ServiceMenu } from "../_components/sections/service-menu";
import { ServiceOverview } from "../_components/sections/service-overview";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

// B版トップページ（eebbca6 直前の /c スナップショット）
export default function HomeB() {
  return (
    <>
      <FirstView />
      <div className="mt-4 sm:mt-10">
        <ClientLogos />
      </div>
      <div className="content-auto">
        <Problem />
        <ServiceOverview className="bg-white" />
        <CaseStudies className="bg-gray-50" />
        <ServiceMenu className="bg-gray-50" />
        <WhyReminus className="bg-white" />
        <Cta className="from-white to-gray-50" />
        <Blog />
        <Faq className="bg-gray-50" />
        <Management className="bg-gray-50" />
        <Cta className="from-gray-50 to-white" />
        <CompanyOverview />
      </div>
    </>
  );
}
