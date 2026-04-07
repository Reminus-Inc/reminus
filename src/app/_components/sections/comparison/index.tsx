import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";
import {
  ComparisonTable,
  MARK_TYPE,
  type ComparisonRow,
} from "./comparison-table";
import { CustomDownloadButton } from "@/app/_components/ui/download-button";

const COMPARISON_DATA: ComparisonRow[] = [
  {
    title: "ノウハウ",
    reminus: { mark: MARK_TYPE.DOUBLE_CIRCLE, description: "SaaS特化" },
    advisor: { mark: MARK_TYPE.CIRCLE, description: "幅広い実績" },
    freelance: { mark: MARK_TYPE.TRIANGLE_TO_CIRCLE, description: "属人的" },
  },
  {
    title: "技術力",
    reminus: { mark: MARK_TYPE.DOUBLE_CIRCLE, description: "有名SaaSレベル" },
    advisor: { mark: MARK_TYPE.CIRCLE, description: "幅広い実績" },
    freelance: { mark: MARK_TYPE.TRIANGLE_TO_CIRCLE },
  },
  {
    title: (
      <>
        事業
        <br className="sm:hidden" />
        推進力
      </>
    ),
    reminus: { mark: MARK_TYPE.DOUBLE_CIRCLE, description: "伴走型・経営目線" },
    advisor: { mark: MARK_TYPE.TRIANGLE, description: "技術中心" },
    freelance: { mark: MARK_TYPE.TRIANGLE_TO_CIRCLE },
  },
  {
    title: "コスト",
    reminus: { mark: MARK_TYPE.CIRCLE, description: "経営層水準" },
    advisor: { mark: MARK_TYPE.DOUBLE_CIRCLE, description: "稼働を省力化" },
    freelance: { mark: MARK_TYPE.CIRCLE_TO_DOUBLE_CIRCLE, description: "" },
  },
];

export function Comparison({ className }: { className?: string }) {
  return (
    <section
      id="comparison"
      className={cn("content-auto py-24 font-sans sm:py-32", className)}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="Summary"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
          align="center"
        >
          <span className="highlight-underline text-emerald-500">
            SaaS・経営目線・推進力
          </span>
          <span>
            &nbsp;なら、
            <br /> ReminusのCTO代行を！
          </span>
        </SectionHeader>

        <div className="mt-16">
          <ComparisonTable data={COMPARISON_DATA} />
        </div>

        <div className="bleed mt-16 px-4 md:mt-20">
          <CustomDownloadButton
            subtitle="Reminus CTOパートナー"
            title="資料ダウンロード"
          />
        </div>
      </div>
    </section>
  );
}
