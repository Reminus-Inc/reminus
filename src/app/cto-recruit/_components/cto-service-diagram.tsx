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
          ä¼æ¥­ã®æé·ã«åãããã
          <br className="sm:hidden" />
          2ã¤ã®æ¯æ´
        </SectionHeader>

        {/* å±éåºç¤ã©ãã« + 2ã«ã¼ã + ç¢å° */}
        <div className="mt-8 sm:mt-12">
          {/* å±éåºç¤ã©ãã« */}
          <div className="rounded-t-xl border border-b-0 border-emerald-200 bg-emerald-50 px-4 py-3 text-center">
            <span className="text-sm font-semibold tracking-wide text-emerald-700 sm:text-base">
              CTOçµé¨èã«ããæ¯æ´
            </span>
          </div>

          {/* ã«ã¼ãã¨ãªã¢ */}
          <div className="rounded-b-xl border border-emerald-200 bg-white px-4 py-6 sm:px-6 sm:py-8 md:px-8">
            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-0">
              {/* ã«ã¼ã1: CTOä»£è¡ */}
              <div className="w-full flex-1 rounded-xl bg-blue-50 p-5 shadow-sm sm:p-6">
                <div className="text-center">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 sm:text-sm">
                    ç«ã¡ä¸ãæ
                  </span>
                  <h3 className="mt-3 text-lg font-bold tracking-wide text-gray-800 sm:text-xl">
                    CTOä»£è¡
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed tracking-wide text-gray-600 sm:text-base">
                    æè¡ãªã¼ãã¼ã¨ãã¦åç»ãã
                    <br className="sm:hidden" />
                    äºæ¥­ã®åºç¤ãæ§ç¯
                  </p>
                </div>
              </div>

              {/* ç¢å°: PC=æ°´å¹³â, SP=åç´â */}
              <div className="flex flex-col items-center px-2 py-1 md:px-4 md:py-0">
                {/* SP: åç´ç¢å° */}
                <div className="flex flex-col items-center md:hidden">
                  <span className="mb-1 text-xs font-medium text-gray-500">
                    äºæ¥­ã®æé·ã«ä¼´ã
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
                {/* PC: æ°´å¹³ç¢å° */}
                <div className="hidden flex-col items-center md:flex">
                  <span className="mb-1 whitespace-nowrap text-xs font-medium text-gray-500">
                    äºæ¥­ã®æé·ã«ä¼´ã
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

              {/* ã«ã¼ã2: CTOæ¡ç¨ */}
              <div className="w-full flex-1 rounded-xl bg-emerald-50 p-5 shadow-sm sm:p-6">
                <div className="text-center">
                  <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 sm:text-sm">
                    çµç¹åæ
                  </span>
                  <h3 className="mt-3 text-lg font-bold tracking-wide text-gray-800 sm:text-xl">
                    CTOæ¡ç¨
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed tracking-wide text-gray-600 sm:text-base">
                    èªåCTOãæ¡ç¨ããããã®
                    <br className="sm:hidden" />
                    å¨å·¥ç¨ãä¼´èµ°
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
