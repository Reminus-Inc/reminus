import { cn } from "@/lib/utils";
import { ContactButton } from "@/app/_components/ui/contact-button";

const phases = [
  {
    name: "母集団形成",
    items: ["媒体選定", "求人設計", "スカウト代行"],
  },
  {
    name: "面談",
    items: ["書類スクリーニング", "面談同席"],
  },
  {
    name: "面接",
    items: ["面接録画FB", "面接同席"],
  },
  {
    name: "オファー",
    items: ["レターレビュー", "条件設計支援"],
  },
];

export function CtoRecruitFirstView() {
  return (
    <div className="mx-auto w-[88%] max-w-[1200px] pb-8 pt-4 font-sans sm:pb-12 sm:pt-6 md:w-[86%] md:pb-16 md:pt-8">
      {/* ラベル */}
      <p className="text-xs font-bold tracking-wider text-emerald-600 sm:text-sm">
        累計6社以上のCTO代行実績から生まれた採用支援
      </p>

      {/* メインコピー */}
      <h1 className="mt-2 text-[22px] font-bold !leading-[1.5] tracking-wide text-gray-800 min-[375px]:text-2xl sm:mt-3 sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl">
        <span className="block">
          CTO採用のすべてを、
        </span>
        <span className="block">
          <span className="text-emerald-600">CTOの知見</span>
          で伴走。
        </span>
      </h1>

      {/* サブコピー */}
      <p className="mt-2 text-xs !leading-[1.8] tracking-wide text-gray-600 min-[375px]:text-sm sm:mt-3 sm:text-base md:text-lg">
        媒体選定からスカウト・面接設計・オファーまで、一気通貫で支援します。
      </p>

      {/* フェーズフロー - PC */}
      <div className="mt-6 hidden md:block sm:mt-8">
        {/* フェーズ矢印 */}
        <div className="flex items-center justify-between">
          {phases.map((phase, index) => (
            <div key={index} className="flex flex-1 items-center">
              <div className="flex-1 rounded-lg bg-emerald-600 px-3 py-2.5 text-center lg:px-4">
                <p className="text-sm font-bold tracking-wider text-white lg:text-base">
                  {phase.name}
                </p>
              </div>
              {index < phases.length - 1 && (
                <div className="mx-1 shrink-0 text-lg text-emerald-300 lg:mx-2 lg:text-xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 支援項目 */}
        <div className="mt-3 flex">
          {phases.map((phase, index) => (
            <div key={index} className="flex-1 px-1">
              <div className="space-y-1">
                {phase.items.map((item, itemIndex) => (
                  <p
                    key={itemIndex}
                    className="text-xs tracking-wide text-gray-600 lg:text-sm"
                  >
                    <span className="text-emerald-400">・</span>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* フェーズフロー - SP/タブレット */}
      <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-3 md:hidden">
        {phases.map((phase, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border border-solid border-emerald-100 bg-white"
          >
            <div className="bg-emerald-600 px-3 py-1.5 sm:py-2">
              <p className="text-center text-xs font-bold tracking-wider text-white sm:text-sm">
                {phase.name}
              </p>
            </div>
            <div className="px-2.5 py-2 sm:px-3 sm:py-2.5">
              {phase.items.map((item, itemIndex) => (
                <p
                  key={itemIndex}
                  className="text-[11px] !leading-[1.7] tracking-wide text-gray-600 sm:text-xs"
                >
                  <span className="text-emerald-400">・</span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-5 sm:mt-8 md:mt-10">
        <ContactButton
          href="/cto-recruit/contact"
          className="w-full max-w-[400px]"
        >
          まずは無料で相談する
        </ContactButton>
      </div>
    </div>
  );
}
