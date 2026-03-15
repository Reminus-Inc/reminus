import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

const reasons = [
  {
    number: "01",
    title: "CTO代行で培った\n「CTOの仕事」への深い理解",
    description:
      "Reminusは累計6社以上でCTO代行を提供。CTOが日々どんな意思決定をし、どんなスキルが求められるかを熟知しています。この知見があるからこそ、貴社に最適なCTO像を精緻に定義し、候補者を正しく見極められます。",
  },
  {
    number: "02",
    title: "スタートアップ × SaaS\nに特化した採用知見",
    description:
      "平均取引期間9ヶ月以上、6ヶ月以上の取引率85%。SaaSスタートアップのフェーズごとに求められるCTO像の違いを理解し、事業フェーズに合った採用戦略を設計します。",
  },
  {
    number: "03",
    title: "企画から実行まで\n一気通貫の伴走支援",
    description:
      "媒体選定・求人設計などの企画面から、スカウト代行・面接同席・オファー設計などの実行面まで、採用プロセスの全工程を支援。採用担当を新たに雇う必要なく、CTO採用を推進できます。",
  },
];

export function WhyReminus({ className }: { className?: string }) {
  return (
    <section
      id="why-reminus"
      className={cn("content-auto py-16 font-sans sm:py-24 md:py-32", className)}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="Reminusが選ばれる理由"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
          align="center"
        >
          <span className="highlight-underline text-emerald-500">
            CTO代行会社だからこそ
          </span>
          できる、
          <br className="hidden sm:inline" />
          CTO採用支援。
        </SectionHeader>

        <div className="mt-10 flex flex-col gap-6 sm:mt-16 sm:gap-10 lg:gap-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-2xl border border-solid border-gray-200 bg-white p-6 shadow-sm sm:flex-row sm:gap-8 sm:p-8"
            >
              <div className="flex-shrink-0">
                <span className="text-4xl font-bold tracking-wider text-emerald-200 sm:text-5xl">
                  {reason.number}
                </span>
              </div>
              <div>
                <h3 className="whitespace-pre-line text-lg font-bold !leading-[1.6] tracking-wide text-gray-800 sm:text-xl md:text-2xl">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm !leading-[1.9] tracking-wide text-gray-600 sm:text-base">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
