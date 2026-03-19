import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

const phases = [
  {
    name: "母集団形成",
    color: "bg-blue-500",
    items: [
      { label: "媒体選定", isPro: false },
      { label: "求人設計", isPro: false },
      { label: "スカウト代行", isPro: true },
    ],
  },
  {
    name: "面談",
    color: "bg-blue-500",
    items: [
      { label: "書類スクリーニング", isPro: true },
      { label: "面談同席", isPro: true },
    ],
  },
  {
    name: "面接",
    color: "bg-blue-500",
    items: [
      { label: "面接録画FB", isPro: false },
      { label: "面接同席", isPro: true },
    ],
  },
  {
    name: "オファー",
    color: "bg-blue-500",
    items: [
      { label: "レターレビュー", isPro: false },
      { label: "条件設計支援", isPro: false },
    ],
  },
];

interface ServiceFlowCardsProps {
  className?: string;
}

export function ServiceFlowCards({ className }: ServiceFlowCardsProps) {
  return (
    <section
      id="service-flow"
      className={cn("py-14 md:py-18", className)}
    >
      <div className="mx-auto w-[88%] max-w-[1000px] md:w-[86%]">
        <SectionHeader
          label="支援領域"
          headingClassName="text-xl sm:text-2xl md:text-3xl !leading-[1.8]"
          align="center"
        >
          母集団形成からオファーまで、
          <br className="sm:hidden" />
          <span className="text-emerald-500">すべて</span>
          をカバー。
        </SectionHeader>

        {/* PC: フェーズ矢印 + 支援メニューカード */}
        <div className="mt-10 hidden md:block">
          {/* フェーズ矢印 */}
          <div className="flex justify-center gap-2">
            {phases.map((phase, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={cn(
                    "relative flex h-12 items-center justify-center rounded-lg px-6 text-base font-bold tracking-wider text-white lg:h-14 lg:px-8 lg:text-lg",
                    phase.color,
                  )}
                >
                  {phase.name}
                </div>
                {index < phases.length - 1 && (
                  <div className="mx-1 text-xl text-gray-300 lg:mx-2 lg:text-2xl">→</div>
                )}
              </div>
            ))}
          </div>

          {/* 支援メニューカード */}
          <div className="mt-6 grid grid-cols-4 gap-3 lg:gap-4">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="rounded-xl border border-solid border-gray-200 bg-white shadow-sm"
              >
                <div className="px-4 py-3 text-center">
                  <p className="text-sm font-bold tracking-wider text-gray-600">
                    {phase.name}
                  </p>
                </div>
                <div className="space-y-2 px-4 pb-5">
                  {phase.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-2 text-sm tracking-wide text-gray-700"
                    >
                      <span className="text-emerald-500">・</span>
                      <span>{item.label}</span>
                      {item.isPro && (
                        <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-bold text-blue-600">
                          Pro
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SP/タブレット: 2x2グリッド */}
        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-3 md:hidden">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-solid border-gray-200 bg-white shadow-sm"
            >
              <div className={cn("px-3 py-2 sm:py-2.5", phase.color)}>
                <p className="text-center text-[11px] font-bold tracking-widest text-white sm:text-xs">
                  {phase.name}
                </p>
              </div>
              <div className="space-y-1 px-3 py-2.5 sm:px-3.5 sm:py-3">
                {phase.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center gap-1.5 text-[11px] !leading-[1.8] tracking-wide text-gray-700 sm:text-xs"
                  >
                    <span className="text-emerald-500">・</span>
                    <span>{item.label}</span>
                    {item.isPro && (
                      <span className="ml-auto shrink-0 rounded bg-blue-50 px-1.5 py-0.5 text-[9px] font-bold text-blue-500">
                        Pro
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
