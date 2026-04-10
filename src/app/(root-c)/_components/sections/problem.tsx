import { cn } from "@/lib/utils";
import { ClipboardList, Shield, Users, Search } from "lucide-react";

const problems = [
  {
    icon: ClipboardList,
    title: "開発の見通しが不透明",
    description: "プロダクトの開発構想やスケジュール、開発体制が定まらない...",
  },
  {
    icon: Shield,
    title: "技術判断ができない",
    description: "障害やリスク対策をしたい、社内に技術判断能力を持ちたい...",
  },
  {
    icon: Users,
    title: "外注の課題",
    description: "外注先の選定・管理ができない、外注から脱却したい...",
  },
  {
    icon: Search,
    title: "採用が進まない",
    description: "エンジニアやCTOの採用の進め方がわからない...",
  },
];

type ProblemProps = {
  className?: string;
};
export function Problem({ className }: ProblemProps) {
  return (
    <section className={cn("content-auto font-sans", className)}>
      <div className="mx-auto w-[88%] max-w-[1200px] pb-20 pt-24 sm:pb-28 sm:pt-32">
        <h2 className="text-center text-xl font-bold !leading-[1.7] tracking-wider text-gray-800 min-[375px]:text-[22px] sm:text-2xl  md:text-3xl lg:text-4xl">
          技術・プロダクトの
          <br />
          こんな悩み、ありませんか？
        </h2>

        <div className="mx-auto mt-10 grid max-w-[1000px] grid-cols-2 gap-x-6 gap-y-8 sm:mt-14 sm:gap-x-10 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-12">
          {problems.map(({ icon: Icon, title, description }, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-gray-100 sm:size-14 md:size-18 xl:size-20">
                <Icon
                  strokeWidth={1.8}
                  className="size-5 text-gray-500 sm:size-6 md:size-8 xl:size-9"
                />
              </div>
              <h3 className="mt-3 text-[13px] font-bold !leading-[1.5] tracking-wide text-gray-800 sm:mt-4 sm:text-sm md:mt-5 md:text-lg xl:mt-6 xl:text-xl">
                {title}
              </h3>
              <p className="mt-1.5 self-start text-[11px] !leading-[1.7] tracking-wide text-gray-500 sm:mt-2 sm:text-xs md:mt-3 md:text-base xl:mt-4 xl:text-lg">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-emerald-500 from-60% to-emerald-400">
        <div className="flex justify-center">
          <div className="h-0 w-0 border-l-[40px] border-r-[40px] border-t-[34px] border-l-transparent border-r-transparent border-t-white sm:border-l-[60px] sm:border-r-[60px] sm:border-t-[50px]" />
        </div>

        <div className="mx-auto w-[88%] max-w-[1200px] pb-14 pt-8 text-center sm:pb-18 sm:pt-10">
          <p className="text-lg font-bold !leading-[1.6] tracking-wider text-white sm:text-xl md:text-2xl lg:text-3xl">
            Reminus CTOパートナーは、
            <br />
            SaaS事業の技術の課題を解決するCTO代行サービスです。
          </p>
        </div>
      </div>
    </section>
  );
}
