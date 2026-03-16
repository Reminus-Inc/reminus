import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

const steps = [
  {
    number: "01",
    title: "無料相談",
    description:
      "現在の採用課題や求めるCTO像をヒアリング。最適な支援の方向性をお伝えします。",
    duration: "30分〜",
  },
  {
    number: "02",
    title: "ご提案",
    description:
      "課題に合わせた支援内容・スケジュール・お見積りを具体的にご提案します。",
    duration: "1週間以内",
  },
  {
    number: "03",
    title: "ご契約",
    description:
      "内容にご納得いただけたらご契約。月額制のシンプルな料金体系です。",
    duration: "",
  },
  {
    number: "04",
    title: "支援スタート",
    description:
      "定例MTGで採用戦略を策定し、スカウト・面接支援など伴走を開始します。",
    duration: "",
  },
];

export function GettingStarted({ className }: { className?: string }) {
  return (
    <section
      id="getting-started"
      className={cn("content-auto py-16 font-sans sm:py-24 md:py-24", className)}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="導入の流れ"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
          align="center"
        >
          お問い合わせから
          <span className="highlight-underline text-emerald-500">
            ご契約まで
          </span>
          、
          <br className="hidden sm:inline" />
          シンプルなステップで進められます。
        </SectionHeader>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-16 sm:gap-5 md:grid-cols-4 md:gap-0">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* 矢印（PC） */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-12 z-10 hidden -translate-y-1/2 translate-x-1/2 text-2xl text-emerald-300 md:block">
                  →
                </div>
              )}

              <div className="flex h-full w-full flex-col items-center rounded-2xl border border-solid border-gray-200 bg-white px-4 py-5 shadow-sm sm:px-6 sm:py-8 md:mx-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 sm:h-14 sm:w-14">
                  <span className="text-lg font-bold text-emerald-600 sm:text-xl">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-bold tracking-wide text-gray-800 sm:mt-4 sm:text-xl">
                  {step.title}
                </h3>
                {step.duration && (
                  <p className="mt-0.5 text-xs font-medium tracking-wide text-emerald-600 sm:mt-1">
                    {step.duration}
                  </p>
                )}
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
