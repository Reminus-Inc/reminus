import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

const solutions = [
  {
    pain: "技術力を正しく見極められない",
    title: "CTO経験者が、\n候補者の技術力を直接評価",
    description:
      "GitHub・使用技術・設計力をCTO経験者が直接評価します。",
    number: "01",
    iconPath:
      "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
  {
    pain: "CTO層にスカウトが届かない",
    title: "技術を深く理解した\n一人ひとりに合わせたスカウト",
    description:
      "技術経歴を深く読み込み、一通ずつカスタマイズしたスカウトで返信率を向上させます。",
    number: "02",
    iconPath:
      "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
  },
  {
    pain: "面談まで進むが、辞退される",
    title: "面談・面接に同席し、\n技術者目線で魅力を伝える",
    description:
      "面談同席・面接設計に踏み込み、技術的な魅力を候補者に響く言葉で伝えます。",
    number: "03",
    iconPath:
      "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
  },
  {
    pain: "採用後にミスマッチが発覚する",
    title: "第三者のCTOの目で、\nミスマッチを未然に防ぐ",
    description:
      "書類選考からオファー設計まで技術的第三者として関与。ノウハウも積極的に公開します。",
    number: "04",
    iconPath:
      "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
];

function SolutionIcon({
  path,
  className,
}: {
  path: string;
  className?: string;
}) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

export function WhyReminus({ className }: { className?: string }) {
  return (
    <section
      id="why-reminus"
      className={cn(
        "content-auto py-16 font-sans sm:py-24 md:py-24",
        className,
      )}
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

        <div className="relative mt-8 sm:mt-16">
          {/* PC: ステップ間の接続線 */}
          <div className="absolute left-7 top-10 hidden h-[calc(100%-80px)] w-px bg-gradient-to-b from-emerald-200 via-emerald-300 to-emerald-200 lg:block" />

          <div className="flex flex-col gap-4 sm:gap-8 lg:gap-10">
            {solutions.map((solution, index) => (
              <div key={index} className="flex gap-6 lg:gap-8">
                {/* PC: ステップインジケーター */}
                <div className="relative z-10 hidden flex-shrink-0 lg:flex lg:flex-col lg:items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500 shadow-lg shadow-emerald-500/20">
                    <SolutionIcon
                      path={solution.iconPath}
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  <span className="mt-1.5 text-[11px] font-bold tracking-widest text-emerald-500">
                    {solution.number}
                  </span>
                </div>

                {/* カード本体 */}
                <div className="flex-1 overflow-hidden rounded-2xl border border-solid border-gray-200 bg-white shadow-sm">
                  {/* 課題ラベル */}
                  <div className="flex items-center gap-2 border-b border-solid border-gray-100 bg-gray-50 px-5 py-3 sm:px-8 sm:py-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-100 lg:hidden">
                      <SolutionIcon
                        path={solution.iconPath}
                        className="h-3.5 w-3.5 text-emerald-600"
                      />
                    </div>
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
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
