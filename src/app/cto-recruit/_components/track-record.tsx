import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

const stats = [
  {
    number: "6",
    unit: "社以上",
    label: "CTO代行の支援実績",
  },
  {
    number: "85",
    unit: "%",
    label: "6ヶ月以上の継続率",
  },
  {
    number: "9",
    unit: "ヶ月以上",
    label: "平均取引期間",
  },
  {
    number: "20",
    unit: "社以上",
    label: "累計支援企業数",
  },
];

export function TrackRecord({ className }: { className?: string }) {
  return (
    <section
      id="track-record"
      className={cn("content-auto py-16 font-sans sm:py-24 md:py-24", className)}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="実績"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
          align="center"
        >
          CTO代行の実績が、
          <br className="hidden sm:inline" />
          <span className="highlight-underline text-emerald-500">
            採用支援の品質
          </span>
          を裏付ける。
        </SectionHeader>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-1.5 rounded-2xl border border-solid border-emerald-100 bg-emerald-50/50 px-3 py-6 sm:gap-2 sm:px-4 sm:py-10"
            >
              <div className="flex items-baseline gap-0.5">
                <span className="text-4xl font-bold tracking-tight text-emerald-600 sm:text-5xl">
                  {stat.number}
                </span>
                <span className="text-base font-bold text-emerald-600 sm:text-lg">
                  {stat.unit}
                </span>
              </div>
              <p className="text-center text-xs tracking-wide text-gray-600 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
