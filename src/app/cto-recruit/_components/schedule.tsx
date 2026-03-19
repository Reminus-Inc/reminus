import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

const steps = [
  {
    number: "STEP 1",
    title: "採用企画",
    period: "〜2週間",
    description: "CTO役割設計・選考プロセス整理",
  },
  {
    number: "STEP 2",
    title: "採用準備",
    period: "2週間〜1ヶ月",
    description: "求人票・スカウト文設計・媒体設定",
  },
  {
    number: "STEP 3",
    title: "スカウト実施",
    period: "1ヶ月〜",
    description: "候補者選定・パーソナライズスカウト",
  },
  {
    number: "STEP 4",
    title: "面談・面接・オファー",
    period: "並行して推進",
    description: "面談同席・面接FB・レター支援",
    note: "※スカウト実施と並行して進めます",
  },
];

interface ScheduleProps {
  className?: string;
}

export function Schedule({ className }: ScheduleProps) {
  return (
    <section
      id="schedule"
      className={cn("py-16 md:py-20", className)}
    >
      <div className="mx-auto w-[82%] max-w-[800px] md:w-[86%]">
        <SectionHeader
          label="導入の流れ"
          headingClassName="text-xl sm:text-2xl md:text-3xl !leading-[1.8]"
          align="center"
        >
          最短
          <span className="text-emerald-500">2週間</span>
          で、採用設計が完了します。
        </SectionHeader>

        {/* リード文 */}
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-gray-600 md:text-base">
          一般的に6〜12ヶ月かかるCTO採用。Reminusは半年以内の採用完了を目標に、最初の2週間で採用企画を完了させます。
        </p>

        {/* タイムライン */}
        <div className="relative mx-auto mt-10 max-w-xl pl-6 md:mt-14 md:pl-8">
          {/* 縦ライン */}
          <div className="absolute left-[7px] top-2 bottom-0 w-0.5 bg-emerald-300 md:left-[9px]" />

          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "relative pb-8 md:pb-10",
                index === steps.length - 1 && "pb-0"
              )}
            >
              {/* ドット */}
              <div className="absolute left-[-21px] top-1 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 md:left-[-23px] md:h-4 md:w-4" />

              {/* コンテンツ */}
              <div>
                {/* ステップ番号 */}
                <p className="text-xs font-bold tracking-wider text-emerald-600">
                  {step.number}
                </p>

                {/* タイトル + 期間バッジ */}
                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <span className="inline-flex rounded-full bg-emerald-50 px-3 py-0.5 text-sm font-medium text-emerald-700">
                    {step.period}
                  </span>
                </div>

                {/* 説明文 */}
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>

                {/* 並行注記（STEP4のみ） */}
                {step.note && (
                  <p className="mt-1 text-xs text-gray-400">
                    {step.note}
                  </p>
                )}
              </div>
            </div>
          ))}

          {/* PDCA枠 */}
          <div className="relative mt-2 ml-0">
            {/* ライン終端接続 */}
            <div className="absolute left-[-21px] top-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-300 md:left-[-23px] md:h-4 md:w-4" />
            <div className="rounded-lg border border-dashed border-emerald-300 bg-white px-4 py-3">
              <p className="text-sm text-gray-500">
                <span className="mr-1.5">⟳</span>
                定例MTG 週1回 ＋ 採用PDCA
              </p>
            </div>
          </div>
        </div>

        {/* ボトムメッセージ */}
        <div className="mt-10 border-t border-b border-emerald-200 bg-emerald-50 py-8 text-center md:mt-14">
          <p className="text-base font-medium leading-relaxed text-gray-800 md:text-lg">
            CTO採用を、半年で終わらせる。
            <br className="sm:hidden" />
            それがReminusの伴走です。
          </p>
        </div>
      </div>
    </section>
  );
}
