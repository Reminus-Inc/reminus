import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

const solutions = [
  {
    pain: "CTOが採用できる媒体がわからない",
    solution: "実績に基づく有効媒体を選定",
    number: "01",
    iconPath:
      "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
  {
    pain: "給与相場や求人設計が難しい",
    solution: "CTO目線で刺さる求人を設計",
    number: "02",
    iconPath:
      "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
  },
  {
    pain: "スカウトの返信率が低い",
    solution: "技術×経営でパーソナライズスカウト",
    number: "03",
    iconPath:
      "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z",
  },
  {
    pain: "面接で見極められない",
    solution: "面接・オファーまでCTO経験者が伴走",
    number: "04",
    iconPath:
      "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  },
];

function SolutionIcon({
  path,
  className,
}: {
  path: string;
  className?: string;
}) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

export function WhyReminus({ className }: { className?: string }) {
  return (
    <section
      id="why-reminus"
      className={cn(
        "content-auto py-16 font-sans sm:py-24 md:py-24",
        className,
      )}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="Reminusが選ばれる理由"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
          align="center"
        >
          CTO採用の
          <span className="highlight-underline text-emerald-500">壁</span>
          を、
          <br className="hidden sm:inline" />
          CTO代行の知見で突破する。
        </SectionHeader>

        <div className="relative mt-10 sm:mt-16">
          {/* PC: ステップ間の接続線 */}
          <div className="absolute left-7 top-8 hidden h-[calc(100%-64px)] w-px bg-gradient-to-b from-emerald-200 via-emerald-300 to-emerald-200 lg:block" />

          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-5">
            {solutions.map((solution, index) => (
              <div key={index} className="flex gap-6 lg:gap-8">
                {/* PC: ステップインジケーター */}
                <div className="relative z-10 hidden flex-shrink-0 lg:flex lg:flex-col lg:items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500 shadow-lg shadow-emerald-500/20">
                    <SolutionIcon
                      path={solution.iconPath}
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  <span className="mt-1.5 text-[11px] font-bold tracking-widest text-emerald-500">
                    {solution.number}
                  </span>
                </div>

                {/* カード本体 — Pain→Solution 横並び図解（description削除） */}
                <div className="flex-1 overflow-hidden rounded-2xl border border-solid border-gray-200 bg-white shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-stretch">
                    {/* 課題エリア — 案D: gray-100背景 + dashed border + amberアイコン */}
                    <div className="flex items-center gap-3 bg-gray-100 px-5 py-3.5 sm:w-[43%] sm:px-6 sm:py-4">
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100 lg:hidden">
                        <SolutionIcon
                          path={solution.iconPath}
                          className="h-3.5 w-3.5 text-amber-500"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold tracking-widest text-gray-400 sm:text-xs">
                          課題
                        </span>
                        <p className="text-xs font-bold !leading-snug tracking-wide text-gray-600 sm:mt-0.5 sm:text-sm">
                          {solution.pain}
                        </p>
                      </div>
                    </div>

                    {/* 案F: Pain→Solution 矢印インジケーター */}
                    <div className="flex items-center justify-center border-y border-dashed border-gray-300 py-1 sm:border-x sm:border-y-0 sm:border-dashed sm:border-gray-300 sm:py-0 sm:px-1">
                      <div className="flex items-center gap-1 sm:flex-col sm:gap-0">
                        {/* SP: 下矢印 + ラベル */}
                        <svg
                          className="h-3.5 w-3.5 text-emerald-500 sm:hidden"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                        </svg>
                        <span className="text-[9px] font-bold tracking-wide text-emerald-600 sm:hidden">
                          Reminusなら
                        </span>
                        {/* PC: 右矢印 */}
                        <svg
                          className="hidden h-4 w-4 text-emerald-500 sm:block"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>

                    {/* ソリューションエリア — 案D: emerald-50背景 + emerald左ボーダー */}
                    <div className="flex flex-1 items-center gap-3 bg-emerald-50/40 px-5 py-3.5 sm:border-l-2 sm:border-solid sm:border-emerald-400 sm:px-6 sm:py-4">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 sm:h-9 sm:w-9">
                        <svg
                          className="h-4 w-4 text-emerald-600 sm:h-5 sm:w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold tracking-widest text-emerald-600 sm:text-xs">
                          Reminusなら
                        </span>
                        <h3 className="text-sm font-bold !leading-snug tracking-wide text-gray-800 sm:mt-0.5 sm:text-base md:text-lg">
                          {solution.solution}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
