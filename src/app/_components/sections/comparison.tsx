import { cn } from "@/lib/utils";
import { SectionHeader } from "../ui/section-header";
import {
  ComparisonTable,
  MARK_TYPE,
  type ComparisonRow,
} from "./why-reminus/comparison-table";

const COMPARISON_DATA: ComparisonRow[] = [
  {
    title: "ノウハウ",
    reminus: { mark: MARK_TYPE.CIRCLE, description: "SaaS特化" },
    advisor: { mark: MARK_TYPE.CIRCLE, description: "幅広い実績" },
    freelance: { mark: MARK_TYPE.TRIANGLE, description: "属人的" },
  },
  {
    title: "スピード",
    reminus: { mark: MARK_TYPE.DOUBLE_CIRCLE },
    advisor: { mark: MARK_TYPE.CIRCLE },
    freelance: { mark: MARK_TYPE.CIRCLE },
  },
  {
    title: "コスト",
    reminus: { mark: MARK_TYPE.CIRCLE },
    advisor: { mark: MARK_TYPE.DOUBLE_CIRCLE },
    freelance: { mark: MARK_TYPE.DOUBLE_CIRCLE },
  },
  {
    title: "事業推進力",
    reminus: { mark: MARK_TYPE.CIRCLE, description: "経営目線" },
    advisor: { mark: MARK_TYPE.TRIANGLE, description: "技術中心" },
    freelance: { mark: MARK_TYPE.TRIANGLE_TO_CIRCLE, description: "属人的" },
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
          label="まとめ"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
          align="center"
        >
          <span className="highlight-underline text-emerald-500">
            SaaS・経営目線・推進力
          </span>
          &nbsp;なら、<br  /> ReminusのCTO代行を！
        </SectionHeader>

        <div className=" mt-16 px-6">
          <ComparisonTable data={COMPARISON_DATA} />
        </div>
      </div>
    </section>
  );
}
