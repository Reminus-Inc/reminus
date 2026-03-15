import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

const steps = [
  {
    number: "01",
    title: "無料相談",
    description:
      "現在の採用課題や求めるCTO像をヒアリング。最適な採用戦略の方向性をご提案します。",
    duration: "30分〜",
  },
  {
    number: "02",
    title: "採用戦略の設計",
    description:
      "求人要件の整理、媒体選定、スカウト戦略など、具体的な採用プランを策定します。",
    duration: "1〜2週間",
  },
  {
    number: "03",
    title: "採用活動の実行",
    description:
      "スカウト送信、書類スクリーニング、面接支援など、プランに基づき伴走支援を開始します。",
    duration: "継続的に",
  },
];

export function GettingStarted({ className }: { className?: string }) {
  return (
    <section
      id="getting-started"
      className={cn("content-auto py-16 font-sans sm:py-24 md:py-32", className)}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="導入の流れ"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
          align="center"
        >
          <span className="highlight-underline text-emerald-500">
            最短1週間
          </span>
          で採用活動をスタートできます。
        </SectionHeader>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3 md:gap-0">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* 矢印（PC） */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-12 z-10 hidden -translate-y-1/2 translate-x-1/2 text-2xl text-emerald-300 md:block">
                  →
                </div>
              )}
              {/* 矢印（SP） */}
              {index < steps.length - 1 && (
                <div className="absolute -bottom-3.5 left-1/2 z-10 -translate-x-1/2 text-lg text-emerald-300 md:hidden">
                  ↓
                </div>
              )}

              <div className="flex w-full flex-col items-center rounded-2xl border border-solid border-gray-200 bg-white px-5 py-5 shadow-sm sm:px-6 sm:py-8 md:mx-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 sm:h-14 sm:w-14">
                  <span className="text-lg font-bold text-emerald-600 sm:text-xl">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-bold tracking-wide text-gray-800 sm:mt-4 sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-0.5 text-xs font-medium tracking-wide text-emerald-600 sm:mt-1">
                  {step.duration}
                </p>
                <p className="mt-2 text-center text-[13px] !leading-[1.9] tracking-wide text-gray-600 sm:mt-3 sm:text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
