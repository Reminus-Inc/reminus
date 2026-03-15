import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

const phases = [
  {
    name: "母集団形成",
    color: "bg-blue-500",
    items: [
      { label: "媒体選定", isPro: false },
      { label: "求人整理", isPro: false },
      { label: "スカウト型作成", isPro: false },
      { label: "スカウト代行", isPro: true },
    ],
  },
  {
    name: "面談",
    color: "bg-blue-400",
    items: [
      { label: "面接録画フィードバック", isPro: false },
      { label: "書類スクリーニング", isPro: true },
      { label: "面談同席", isPro: true },
    ],
  },
  {
    name: "面接",
    color: "bg-blue-300",
    items: [
      { label: "面接録画フィードバック", isPro: false },
      { label: "面接同席", isPro: true },
    ],
  },
  {
    name: "オファー",
    color: "bg-blue-200",
    items: [
      { label: "面談録画フィードバック", isPro: false },
      { label: "レターレビュー", isPro: false },
    ],
  },
];

export function ServiceFlow({ className }: { className?: string }) {
  return (
    <section
      id="service-flow"
      className={cn("content-auto py-24 font-sans sm:py-32", className)}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="支援メニュー"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
          align="center"
        >
          その課題、
          <br className="sm:hidden" />
          <span className="highlight-underline text-emerald-500">
            Reminus
          </span>
          が解決します。
        </SectionHeader>

        {/* フロー図 */}
        <div className="mt-16">
          {/* フェーズ矢印 - PC */}
          <div className="hidden md:flex md:justify-center md:gap-2">
            {phases.map((phase, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={cn(
                    "relative flex h-14 items-center justify-center rounded-lg px-8 text-lg font-bold tracking-wider text-white",
                    phase.color,
                  )}
                >
                  {phase.name}
                </div>
                {index < phases.length - 1 && (
                  <div className="mx-1 text-2xl text-gray-300">→</div>
                )}
              </div>
            ))}
          </div>

          {/* 支援メニューカード */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="rounded-xl border border-solid border-gray-200 bg-white shadow-sm"
              >
                {/* SP: フェーズヘッダー */}
                <div
                  className={cn(
                    "rounded-t-xl px-4 py-3 text-center font-bold tracking-wider text-white md:hidden",
                    phase.color,
                  )}
                >
                  {phase.name}
                </div>
                {/* PC: フェーズヘッダー */}
                <div className="hidden px-4 py-3 text-center md:block">
                  <p className="text-sm font-bold tracking-wider text-gray-600">
                    {phase.name}
                  </p>
                </div>
                <div className="space-y-2 px-4 pb-5">
                  {phase.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-2 text-sm tracking-wide text-gray-700 sm:text-base"
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

        {/* 補足 */}
        <div className="mt-10 rounded-xl bg-emerald-50 p-6 sm:p-8">
          <p className="text-center text-sm !leading-[1.9] tracking-wide text-gray-700 sm:text-base">
            <span className="font-bold text-emerald-600">
              CTOの業務を知り尽くしたプロフェッショナル
            </span>
            が、
            <br className="hidden sm:inline" />
            採用戦略の企画から実行まで、貴社の採用チームの一員として伴走します。
          </p>
        </div>
      </div>
    </section>
  );
}
