import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";
import { DownloadButton } from "@/app/_components/ui/download-button";
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
      <div className="mx-auto w-[82%] max-w-[1200px] pb-20 pt-24 sm:pb-28 sm:pt-32">
        <SectionHeader
          label="Problem"
          align="center"
          headingClassName="text-xl min-[375px]:text-[22px] sm:text-3xl md:text-4xl lg:text-[40px] !leading-[1.7]"
        >
          こんなお悩みありませんか？
        </SectionHeader>

        <div className="mt-10 flex justify-center sm:mt-14">
          <div className="relative">
            <ul className="flex flex-col gap-4 md:gap-5">
              {problems.map((problem, i) => (
                <li className="flex items-center gap-3" key={i}>
                  <TriangleAlert
                    strokeWidth={2.5}
                    className="h-[18px] w-[18px] shrink-0 text-red-500 sm:h-[22px] sm:w-[22px]"
                  />
                  <span className="text-sm font-semibold !leading-[1.6] tracking-wide text-gray-800 sm:text-base md:text-lg">
                    {problem}
                  </span>
                </li>
              ))}
            </ul>

            {/* 創業期 〜 レイター */}
            <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-full flex-col items-center gap-3 pl-16 lg:flex">
              <span className="text-sm tracking-widest text-gray-800">
                創業期
              </span>
              <div className="flex w-[80px] flex-col items-center">
                <div className="h-[220px] w-10 bg-gradient-to-b from-transparent to-gray-300" />
                <div className="h-0 w-0 border-l-[40px] border-r-[40px] border-t-[40px] border-l-transparent border-r-transparent border-t-gray-300" />
              </div>
              <span className="text-sm tracking-widest text-gray-800">
                レイター
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-emerald-500 from-60% to-emerald-400">
        <div className="flex justify-center">
          <div className="h-0 w-0 border-l-[32px] border-r-[32px] border-t-[30px] border-l-transparent border-r-transparent border-t-white sm:border-l-[48px] sm:border-r-[48px] sm:border-t-[44px]" />
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
