import { cn } from "@/lib/utils";

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
      className={cn("content-auto py-16 font-sans sm:py-20", className)}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 rounded-2xl border border-solid border-emerald-100 bg-emerald-50/50 px-4 py-8 sm:py-10"
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
