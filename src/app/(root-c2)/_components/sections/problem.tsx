import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";
import { TriangleAlert } from "lucide-react";

// C2版のお悩みセクション（共有版と文言・体裁を一部差し替え。C2 のみに適用）
const problems = [
  "MVPの構想〜開発の進め方が定まらない、技術がわからない",
  "内製か外注かの判断に迷う、外注先の選定や管理に悩んでいる",
  "エンジニアやCTOの採用の進め方が手探り、外注から脱却したい",
  "ロードマップの実現可否を見極めたい、開発速度を速めたい",
  "障害やセキュリティの対策をしたい、社内で技術判断をしたい",
  "ARRが伸び悩んでいるが、開発〜販売まで、課題がわからない",
];

type ProblemProps = {
  className?: string;
};
export function Problem({ className }: ProblemProps) {
  return (
    <section className={cn("content-auto font-sans", className)}>
      <div className="mx-auto w-[88%] max-w-[1200px] pb-20 pt-24 sm:pb-28 sm:pt-32">
        <SectionHeader
          align="center"
          headingClassName="text-xl min-[375px]:text-[22px] sm:text-3xl md:text-4xl lg:text-[40px] !leading-[1.7]"
        >
          こんなお悩み、ありませんか？
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
                  <span className="text-sm font-semibold !leading-[1.7] tracking-wide text-gray-800 sm:text-base md:text-lg">
                    {problem}
                  </span>
                </li>
              ))}
            </ul>

            {/* 創業期 〜 事業成長 */}
            <div className="flex flex-col items-center gap-2 sm:gap-3 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-full lg:pl-16">
              <span className="whitespace-nowrap text-xs tracking-widest text-gray-800 sm:text-sm">
                創業期
              </span>
              <div className="flex flex-grow flex-col items-center">
                <div className="h-full w-[24px] bg-gradient-to-b from-transparent to-gray-300 sm:w-[40px] lg:h-[220px]" />
                <div className="h-0 w-0 border-l-[24px] border-r-[24px] border-t-[24px] border-l-transparent border-r-transparent border-t-gray-300 sm:border-l-[40px] sm:border-r-[40px] sm:border-t-[40px]" />
              </div>
              <span className="whitespace-nowrap text-xs tracking-widest text-gray-800 sm:text-sm">
                事業成長
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-emerald-500">
        <div className="flex justify-center">
          <div className="h-0 w-0 border-l-[40px] border-r-[40px] border-t-[34px] border-l-transparent border-r-transparent border-t-white sm:border-l-[60px] sm:border-r-[60px] sm:border-t-[50px]" />
        </div>

        <div className="mx-auto w-[88%] max-w-[1200px] pb-11 pt-8 text-center sm:pb-12 sm:pt-10 lg:pb-16 lg:pt-11">
          <p className="text-lg font-bold !leading-[1.7] tracking-wider text-white min-[375px]:text-xl sm:text-2xl md:text-3xl">
            レミナスCTO代行は、
            <br />
            SaaS事業の技術の課題を解決するCTO代行サービスです。
          </p>
        </div>
      </div>
    </section>
  );
}
