import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";
import { TriangleAlert } from "lucide-react";

const problems = [
  "MVPの構想〜開発スケジュールが定まらない、技術判断ができない",
  "内製か外注かの判断に迷う、外注先の選定や管理に行き詰まっている",
  "エンジニアやCTOの採用の進め方がわからない、外注から脱却できない",
  "ロードマップの実現可否を判断したい、開発速度を速めたい",
  "障害やセキュリティ対策を適切に行いたい、社内に技術判断能力を持ちたい",
  "ARRが伸び悩んでいるが、開発〜販売まで、どこに課題があるか分からない",
];

type ProblemProps = {
  className?: string;
};
export function Problem({ className }: ProblemProps) {
  return (
    <section className={cn("content-auto font-sans", className)}>
      <div className="mx-auto w-[88%] max-w-[1200px] pb-20 pt-24 sm:pb-28 sm:pt-32">
        <SectionHeader
          label="Problem"
          align="center"
          headingClassName="text-xl min-[375px]:text-[22px] sm:text-3xl md:text-4xl lg:text-[40px] !leading-[1.7]"
        >
          こんなお悩みありませんか？
        </SectionHeader>

        <div className="mt-10 flex justify-center sm:mt-14">
          <div className="relative flex gap-6 sm:gap-10 md:gap-16 lg:block">
            <ul className="flex flex-col gap-3 sm:gap-4 md:gap-5">
              {problems.map((problem, i) => (
                <li className="flex items-center gap-3" key={i}>
                  <TriangleAlert
                    strokeWidth={2.5}
                    className="h-[18px] w-[18px] shrink-0 text-red-500 sm:h-[22px] sm:w-[22px]"
                  />
                  <span className="text-xs font-semibold !leading-[1.7] tracking-wide text-gray-800 sm:text-base md:text-lg">
                    {problem}
                  </span>
                </li>
              ))}
            </ul>

            {/* 創業期 〜 レイター */}
            <div className="flex flex-col items-center gap-2 sm:gap-3 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-full lg:pl-16">
              <span className="whitespace-nowrap text-xs tracking-widest text-gray-800 sm:text-sm">
                創業期
              </span>
              <div className="flex flex-grow flex-col items-center">
                <div className="h-full w-[24px] bg-gradient-to-b from-transparent to-gray-300 sm:w-[40px] lg:h-[220px]" />
                <div className="h-0 w-0 border-l-[24px] border-r-[24px] border-t-[24px] border-l-transparent border-r-transparent border-t-gray-300 sm:border-l-[40px] sm:border-r-[40px] sm:border-t-[40px]" />
              </div>
              <span className="whitespace-nowrap text-xs tracking-widest text-gray-800 sm:text-sm">
                レイター
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-emerald-500 from-60% to-emerald-400">
        <div className="flex justify-center">
          <div className="h-0 w-0 border-l-[40px] border-r-[40px] border-t-[34px] border-l-transparent border-r-transparent border-t-white sm:border-l-[60px] sm:border-r-[60px] sm:border-t-[50px]" />
        </div>

        <div className="mx-auto w-[88%] max-w-[1200px] pb-14 pt-8 text-center sm:pb-18 sm:pt-10">
          <p className="text-xl font-bold !leading-[1.6] tracking-wider text-white min-[375px]:text-[23px] sm:text-3xl md:text-4xl">
            そのお悩み、
            <span className="whitespace-nowrap">CTO代行にお任せください！</span>
          </p>
          <p className="mt-6 text-base font-medium !leading-[1.8] tracking-wider text-white sm:text-lg md:text-xl lg:mt-8 lg:text-[22px]">
            Reminus CTOパートナーは、
            <br />
            SaaS事業にまつわる技術の課題を解決するCTO代行サービスです。
          </p>
        </div>
      </div>
    </section>
  );
}
