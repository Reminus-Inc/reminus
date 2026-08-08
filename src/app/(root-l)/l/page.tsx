import type { Metadata } from "next";
import { CaseStudies } from "@/app/_components/sections/case-studies";
import { Column } from "@/app/_components/sections/column";
import { ClientLogos } from "@/app/_components/sections/client-logos";
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

// L版トップページ。C版の完全コピーで、資料DL の遷移先だけが違う
// (C は HubSpot 埋め込みの /c/download、L は通常フォームの /download)。
export default function HomeL() {
  return (
    <>
      <FirstView />
      <div className="mt-8 sm:mt-14">
        <ClientLogos />
      </div>
      <div className="content-auto">
        <Problem />
        <ServiceOverview className="bg-white" />
        <ServiceMenu className="bg-gray-50" />
        <WhyReminus className="bg-white" />
        <Cta className="from-white to-gray-50" downloadHref="/download" />
        <CaseStudies className="bg-gray-50" />
        <Column className="bg-white" />
        <Faq className="bg-gray-50" />
        <Management className="bg-white" />
        <Cta className="from-white to-white" downloadHref="/download" />
        <CompanyOverview />
      </div>
    </>
  );
}
