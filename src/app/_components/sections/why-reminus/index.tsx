import Image from "next/image";
import { SectionHeader } from "../../ui/section-header";
import { cn } from "@/lib/utils";

import { MemberCards } from "./member-cards";

const MEMBER_DATA = [
  {
    label: "Case 1",
    title: "バランスの良い経営者CTO",
    career: ["上場企業エンジニア", "スタートアップCTO 5年以上"],
    strengths: [
      "必要な性能やセキュリティを担保する技術力",
      "創業〜グロースを実現してきた経営目線",
      "ゼロから1人目を採用する採用力・訴求力",
    ],
  },
  {
    label: "Case 2",
    title: " 事業を前に進めるリーダー型CTO",
    career: ["外資セールスエンジニア", "経営管理スタートアップ共同創業"],
    strengths: [
      "市場戦略を形にしてきた製品構想〜企画力",
      "チームに最適化した開発の仕組み化力",
      "組織の実行に勢いを生み出す推進力",
    ],
  },
  {
    label: "Case 3",
    title: "技術×事業に特化したプリンシパルエンジニア",
    career: ["上場企業エンジニア", "有名スタートアップ シニアエンジニア"],
    strengths: [
      "事業に最適化した設計を高速で行う技術力",
      "技術の優先度とリソース配分の判断力",
      "PoCや問題解決を捌き続けてきた瞬発力",
    ],
  },
  {
    label: "Case 4",
    title: "ビジネス特化の戦略型CTO",
    career: ["システム開発会社 副部長", "シリーズA SaaS CTO"],
    strengths: [
      "SaaS開発の広範な知見・経験と技術選定力",
      "営業やマーケ、CSまで設計できる事業運用力",
      "開発組織のスピードを最大化する組織運営力",
    ],
  },
];

const GRAPH_DATA = [
  {
    title: "経営層から技術特化の者まで、\n多様なメンバーが揃う。",
    image: "/member-1.svg",
    width: 376,
    height: 285,
  },
  {
    title: "混沌のシード〜アーリーを\n牽引してきた精鋭揃い。",
    image: "/member-4.svg",
    width: 411,
    height: 287,
  },
  {
    title: "YoY300%の成長速度を\nくぐり抜けてきたメンバー多数。",
    image: "/member-5.svg",
    width: 337,
    height: 273,
    className: "relative left-[10%] md:left-0",
  },
];

export function WhyReminus({ className }: { className?: string }) {
  return (
    <section
      id="why-reminus"
      className={cn("content-auto py-24 font-sans sm:py-32", className)}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="Why Reminus?"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
        >
          <span className="highlight-underline text-emerald-500">
            BtoB SaaS スタートアップに特化。
          </span>
          <br />
          経営視点を持ったメンバーが伴走支援します。
        </SectionHeader>

        <p className="mt-6 text-sm !leading-[1.9] tracking-wide text-gray-800 sm:text-base md:text-lg">
          複雑化する技術課題に対応するため、Reminusには様々な専門領域と強みを持つメンバーが参画しています。
          <br />
          以下にご紹介するのはその一例です。貴社の課題解決に最適なメンバーが、チームの一員として伴走します。
        </p>

        <div className="bleed mt-16 px-6">
          <MemberCards members={MEMBER_DATA} />

          <div className="mt-18 flex w-full flex-col items-center">
            <div className="space-y-14 sm:space-y-16 md:flex md:flex-wrap md:justify-center md:gap-x-12 md:gap-y-14 md:space-y-0 lg:gap-x-12 xl:gap-x-12">
              {GRAPH_DATA.map((member, i) => (
                <GraphCard key={i} {...member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type GraphCardProps = {
  title: string;
  image: string;
  width: number;
  height: number;
  className?: string;
};

function GraphCard({ title, image, width, className }: GraphCardProps) {
  return (
    <div className="md:w-[calc(50%-48px)] lg:w-auto">
      <h3 className="whitespace-pre-wrap text-center text-lg font-bold !leading-[1.7] tracking-wider text-gray-800 sm:text-xl md:text-left lg:text-[22px]">
        {title}
      </h3>

      <div className="mt-6">
        {/* 〜 md */}
        <div className={cn(className, "block lg:hidden")}>
          <Image
            src={image}
            width={411}
            height={287}
            alt=""
            className="block lg:hidden"
          />
        </div>

        {/* lg 〜 */}
        <div
          className={cn(className, "hidden overflow-hidden lg:block")}
          style={{ width: width }}
        >
          <Image
            src={image}
            width={411}
            height={287}
            alt=""
            className="w-[411px] max-w-[411px]"
          />
        </div>
      </div>
    </div>
  );
}
