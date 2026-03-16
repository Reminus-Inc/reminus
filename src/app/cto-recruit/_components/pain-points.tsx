import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

function PainIcon({ path, className }: { path: string; className?: string }) {
  return (
    <svg
      className={cn("h-6 w-6 sm:h-7 sm:w-7", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

const painPoints = [
  {
    iconPath:
      "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
    title: "技術力を正しく見極められない",
    description:
      "人事にも採用代行にも、技術の見極めはできません。",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    iconPath:
      "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
    title: "CTO層にスカウトが届かない",
    description:
      "テンプレのスカウトに、CTO層は反応しません。",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    iconPath:
      "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
    title: "面談まで進むが、辞退される",
    description:
      "技術で惹きつけられなければ、優秀層は他社へ。",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-400",
  },
  {
    iconPath:
      "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z",
    title: "採用後にミスマッチが発覚する",
    description:
      "肩書きだけの採用は、入社後のミスマッチに直結します。",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-400",
  },
];

export function PainPoints({ className }: { className?: string }) {
  return (
    <section
      id="pain-points"
      className={cn("content-auto py-16 font-sans sm:py-24 md:py-24", className)}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="採用の最難関"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
          align="center"
        >
          CTO採用が難しいのは、
          <br className="hidden lg:inline" />
          <span className="highlight-underline text-emerald-500">
            技術がわかる人
          </span>
          がいないから。
        </SectionHeader>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-16 sm:gap-6 md:grid-cols-2 md:gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="rounded-2xl border border-solid border-gray-200 bg-white p-5 shadow-sm sm:p-8"
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <div
                  className={cn(
                    "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl sm:h-14 sm:w-14",
                    point.iconBg,
                  )}
                >
                  <PainIcon path={point.iconPath} className={point.iconColor} />
                </div>
                <div>
                  <h3 className="text-lg font-bold !leading-[1.6] tracking-wide text-gray-800 sm:text-xl">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm !leading-[1.9] tracking-wide text-gray-600 sm:text-base">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
