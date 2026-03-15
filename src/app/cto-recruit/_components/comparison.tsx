import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

const comparisonItems = [
  {
    category: "支援範囲",
    rpo: "母集団形成・求人設計が中心",
    reminus: "母集団形成〜面接同席・オファー設計まで一気通貫",
  },
  {
    category: "技術理解",
    rpo: "人事・採用観点での評価が中心",
    reminus: "CTO経験に基づく技術・アーキテクチャの深い理解",
  },
  {
    category: "候補者の見極め",
    rpo: "経歴・スキルシートベースの書類スクリーニング",
    reminus: "技術力 × 事業理解 × 組織構築力を総合評価",
  },
  {
    category: "スカウト品質",
    rpo: "テンプレートベースの大量送信型",
    reminus: "技術スタック・事業課題を踏まえたパーソナライズ",
  },
  {
    category: "面接支援",
    rpo: "面接日程調整・フィードバック共有",
    reminus: "面接設計・同席・録画フィードバック・見極め支援",
  },
];

export function Comparison({ className }: { className?: string }) {
  return (
    <section
      id="comparison"
      className={cn("content-auto py-16 font-sans sm:py-24 md:py-32", className)}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="エンジニアRPOとの違い"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
          align="center"
        >
          <span className="highlight-underline text-emerald-500">
            下流工程まで伴走
          </span>
          できるのが、
          <br className="hidden sm:inline" />
          Reminusの強み。
        </SectionHeader>

        <p className="mt-4 text-center text-sm !leading-[1.9] tracking-wide text-gray-600 sm:mt-6 sm:text-base">
          一般的なエンジニアRPO（採用代行）は上流の母集団形成が中心。
          <br className="hidden sm:inline" />
          Reminusは技術を理解するCTO代行会社だからこそ、面接・オファーまで踏み込めます。
        </p>

        {/* PC: テーブル */}
        <div className="mt-10 hidden overflow-hidden rounded-2xl border border-solid border-gray-200 shadow-sm sm:mt-14 md:block">
          <table className="w-full">
            <thead>
              <tr>
                <th className="w-[22%] border-b border-solid border-gray-200 bg-gray-50 px-6 py-4 text-left text-sm font-bold tracking-wider text-gray-500" />
                <th className="w-[39%] border-b border-l border-solid border-gray-200 bg-gray-50 px-6 py-4 text-center text-sm font-bold tracking-wider text-gray-500">
                  一般的なエンジニアRPO
                </th>
                <th className="w-[39%] border-b border-l border-solid border-gray-200 bg-emerald-50 px-6 py-4 text-center text-sm font-bold tracking-wider text-emerald-700">
                  Reminus CTO採用
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonItems.map((item, index) => (
                <tr
                  key={index}
                  className={
                    index < comparisonItems.length - 1
                      ? "border-b border-solid border-gray-100"
                      : ""
                  }
                >
                  <td className="bg-gray-50 px-6 py-5 text-sm font-bold tracking-wider text-gray-700">
                    {item.category}
                  </td>
                  <td className="border-l border-solid border-gray-100 px-6 py-5 text-sm !leading-[1.8] tracking-wide text-gray-500">
                    {item.rpo}
                  </td>
                  <td className="border-l border-solid border-gray-100 bg-emerald-50/30 px-6 py-5 text-sm font-medium !leading-[1.8] tracking-wide text-gray-800">
                    {item.reminus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SP: カード型 */}
        <div className="mt-8 flex flex-col gap-3 md:hidden">
          {comparisonItems.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-solid border-gray-200 shadow-sm"
            >
              <div className="bg-gray-50 px-4 py-2.5">
                <span className="text-xs font-bold tracking-wider text-gray-600">
                  {item.category}
                </span>
              </div>
              <div className="flex flex-col gap-2.5 px-4 py-3">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-gray-200">
                    <span className="text-[8px] text-gray-500">▲</span>
                  </span>
                  <span className="text-xs !leading-[1.8] tracking-wide text-gray-500">
                    {item.rpo}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <span className="text-[8px] text-emerald-600">◎</span>
                  </span>
                  <span className="text-xs font-medium !leading-[1.8] tracking-wide text-gray-800">
                    {item.reminus}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
