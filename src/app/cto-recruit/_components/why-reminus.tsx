import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

const solutions = [
  {
    pain: "技術力を正しく見極められない",
    title: "CTO経験者が、\n候補者の技術力を直接評価",
    description:
      "GitHub・使用技術・設計力をCTO経験者が直接評価します。",
    icon: "🔍",
  },
  {
    pain: "CTO層にスカウトが届かない",
    title: "技術を深く理解した\n一人ひとりに合わせたスカウト",
    description:
      "技術経歴を深く読み込み、一通ずつカスタマイズしたスカウトで返信率を向上させます。",
    icon: "✉️",
  },
  {
    pain: "面談まで進むが、辞退される",
    title: "面談・面接に同席し、\n技術者目線で魅力を伝える",
    description:
      "面談同席・面接設計に踏み込み、技術的な魅力を候補者に響く言葉で伝えます。",
    icon: "🤝",
  },
  {
    pain: "採用後にミスマッチが発覚する",
    title: "第三者のCTOの目で、\nミスマッチを未然に防ぐ",
    description:
      "書類選考からオファー設計まで技術的第三者として関与。ノウハウも積極的に公開します。",
    icon: "🎯",
  },
];

export function WhyReminus({ className }: { className?: string }) {
  return (
    <section
      id="why-reminus"
      className={cn("content-auto py-16 font-sans sm:py-24 md:py-24", className)}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="Reminusが選ばれる理由"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
          align="center"
        >
          技術がわかるから、
          <br className="hidden sm:inline" />
          採用の
          <span className="highlight-underline text-emerald-500">全工程</span>
          で力を発揮できる。
        </SectionHeader>

        <div className="mt-8 flex flex-col gap-4 sm:mt-16 sm:gap-8 lg:gap-10">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-solid border-gray-200 bg-white shadow-sm"
            >
              {/* 課題ラベル */}
              <div className="flex items-center gap-2 border-b border-solid border-gray-100 bg-gray-50 px-5 py-3 sm:px-8 sm:py-4">
                <span className="text-base sm:text-lg">{solution.icon}</span>
                <span className="text-xs font-bold tracking-wider text-gray-500 sm:text-sm">
                  課題:
                </span>
                <span className="text-xs font-bold tracking-wide text-gray-700 sm:text-sm">
                  {solution.pain}
                </span>
              </div>
              {/* ソリューション */}
              <div className="flex flex-col gap-3 p-5 sm:flex-row sm:gap-8 sm:p-8">
                <div className="flex items-center gap-2 sm:flex-shrink-0 sm:flex-col sm:items-start sm:gap-1">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 sm:h-10 sm:w-10">
                    <svg
                      className="h-4 w-4 text-emerald-500 sm:h-5 sm:w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold tracking-wider text-emerald-600 sm:hidden">
                    Reminusなら
                  </span>
                </div>
                <div>
                  <div className="mb-1 hidden text-xs font-bold tracking-wider text-emerald-600 sm:block">
                    Reminusなら
                  </div>
                  <h3 className="whitespace-pre-line text-base font-bold !leading-[1.6] tracking-wide text-gray-800 sm:text-lg md:text-xl">
                    {solution.title}
                  </h3>
                  <p className="mt-2 text-sm !leading-[1.9] tracking-wide text-gray-600 sm:text-base">
                    {solution.description}
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
