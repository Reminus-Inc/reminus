import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

// Phase SVG Icons — clean line art, blue-500 theme matching phase arrows
function PeopleSearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-2a4 4 0 014-4h4" />
      <circle cx="18" cy="12" r="3" />
      <path d="M20.5 14.5L23 17" strokeWidth="2.5" />
    </svg>
  );
}

function ConversationIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      <path d="M8 9h8" />
      <path d="M8 13h5" />
    </svg>
  );
}

function ClipboardCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  );
}

function AwardIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

const phaseIcons = [PeopleSearchIcon, ConversationIcon, ClipboardCheckIcon, AwardIcon];

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
                    "relative fleh h-12 items-center justify-center rounded-lg px-6 text-base font-bold tracking-wider text-white lg:h-14 lg:px-8 lg:text-lg",
                    phase.color,
                  )}
                >
                  {phase.name}
                </div>
                {index < phases.length - 1 && (
                  <div className="mx-1 text-xl text-gray-300 lg:mx-2 lg:text-2xl">{"\u2192"}</div>
                )}
              </div>
            ))}
          </div>

          {/* 支援メニューカード（アイコン付き） */}
          <div className="mt-6 grid grid-cols-4 gap-3 lg:gap-4">
            {phases.map((phase, index) => {
              const PhaseIcon = phaseIcons[index];
              return (
                <div
                  key={index}
                  className="rounded-xl border border-solid border-gray-200 bg-white shadow-sm"
                >
                  <div className="flex flex-col items-center px-4 pt-5 pb-2">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50">
                      <PhaseIcon className="h-5 w-5 text-blue-500" />
                    </div>
                    <p className="mt-2 text-sm font-bold tracking-wider text-gray-600">
                      {phase.name}
                    </p>
                  </div>
                  <div className="space-y-2 px-4 pb-5">
                    {phase.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center gap-2 text-sm tracking-wide text-gray-700"
                      >
                        <span className="text-emerald-500">{"\u30FB"}</span>
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
              );
            })}
          </div>
        </div>

        {/* SP/タブレット: 2x2グリッド */}
        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-3 md:hidden">
          {phases.map((phase, index) => {
            const PhaseIcon = phaseIcons[index];
            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-solid border-gray-200 bg-white shadow-sm"
              >
                <div className={cn("flex items-center justify-center gap-1.5 px-3 py-2 sm:py-2.5", phase.color)}>
                  <PhaseIcon className="h-3.5 w-3.5 text-white/90" />
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
                      <span className="text-emerald-500">{"\u30FB"}</span>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
