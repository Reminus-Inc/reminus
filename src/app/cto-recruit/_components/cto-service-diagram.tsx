import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

interface CtoServiceDiagramProps {
  className?: string;
}

export function CtoServiceDiagram({ className }: CtoServiceDiagramProps) {
  return (
    <section
      id="cto-service-diagram"
      className={cn("py-16 font-sans md:py-20", className)}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label=""
          headingClassName="text-xl sm:text-2xl md:text-3xl !leading-[1.8]"
          align="center"
        >
          企業の成長に合わせた、
          <br className="sm:hidden" />
          2つの支援
        </SectionHeader>

        {/* 共通基盤ラベル + 2カード + 矢印 */}
        <div className="mt-8 sm:mt-12">
          {/* 共通基盤ラベル */}
          <div className="rounded-t-xl border border-b-0 border-emerald-200 bg-emerald-50 px-4 py-3 text-center">
            <span className="text-sm font-semibold tracking-wide text-emerald-700 sm:text-base">
              CTO経験者による支援
            </span>
          </div>

          {/* カードエリア */}
          <div className="rounded-b-xl border border-emerald-200 bg-white px-4 py-6 sm:px-6 sm:py-8 md:px-8">
            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-0">
              {/* カード1: CTO代行 */}
              <div className="w-full flex-1 rounded-xl bg-blue-50 p-5 shadow-sm sm:p-6">
                <div className="text-center">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 sm:text-sm">
                    立ち上げ期
                  </span>
                  <h3 className="mt-3 text-lg font-bold tracking-wide text-gray-800 sm:text-xl">
                    CTO代行
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed tracking-wide text-gray-600 sm:text-base">
                    技術リーダーとして参画し、
                    <br className="sm:hidden" />
                    事業の基盤を構築
                  </p>
                </div>
              </div>

              {/* 矢印: PC=水平→, SP=垂直↓ */}
              <div className="flex flex-col items-center px-2 py-1 md:px-4 md:py-0">
                {/* SP: 垂直矢印 */}
                <div className="flex flex-col items-center md:hidden">
                  <span className="mb-1 text-xs font-medium text-gray-500">
                    事業の成長に伴い
                  </span>
                  <svg
                    width="24"
                    height="32"
                    viewBox="0 0 24 32"
                    fill="none"
                    className="text-emerald-400"
                  >
                    <path
                      d="M12 0L12 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M4 20L12 28L20 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {/* PC: 水平矢印 */}
                <div className="hidden flex-col items-center md:flex">
                  <span className="mb-1 whitespace-nowrap text-xs font-medium text-gray-500">
                    事業の成長に伴い
                  </span>
                  <svg
                    width="48"
                    height="24"
                    viewBox="0 0 48 24"
                    fill="none"
                    className="text-emerald-400"
                  >
                    <path
                      d="M0 12H40"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M36 4L44 12L36 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* カード2: CTO採用 */}
              <div className="w-full flex-1 rounded-xl bg-emerald-50 p-5 shadow-sm sm:p-6">
                <div className="text-center">
                  <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 sm:text-sm">
                    組織化期
                  </span>
                  <h3 className="mt-3 text-lg font-bold tracking-wide text-gray-800 sm:text-xl">
                    CTO採用
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed tracking-wide text-gray-600 sm:text-base">
                    自前CTOを採用するための
                    <br className="sm:hidden" />
                    全工程を伴走
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
