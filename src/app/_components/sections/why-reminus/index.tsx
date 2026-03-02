import Image from "next/image";
import { SectionHeader } from "../../ui/section-header";
import { cn } from "@/lib/utils";
import { ComparisonTable, MARK_TYPE } from "./comparison-table";
import type { ComparisonRow } from "./comparison-table";

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
  },
];

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

const COMPARISON_DATA: ComparisonRow[] = [
  {
    title: "ノウハウ",
    reminus: { mark: MARK_TYPE.CIRCLE, description: "SaaS特化" },
    advisor: { mark: MARK_TYPE.CIRCLE, description: "幅広い実績" },
    freelance: { mark: MARK_TYPE.TRIANGLE, description: "属人的" },
  },
  {
    title: "スピード",
    reminus: { mark: MARK_TYPE.DOUBLE_CIRCLE },
    advisor: { mark: MARK_TYPE.CIRCLE },
    freelance: { mark: MARK_TYPE.CIRCLE },
  },
  {
    title: "コスト",
    reminus: { mark: MARK_TYPE.CIRCLE },
    advisor: { mark: MARK_TYPE.DOUBLE_CIRCLE },
    freelance: { mark: MARK_TYPE.DOUBLE_CIRCLE },
  },
  {
    title: "事業推進力",
    reminus: { mark: MARK_TYPE.CIRCLE, description: "経営目線" },
    advisor: { mark: MARK_TYPE.TRIANGLE, description: "技術中心" },
    freelance: { mark: MARK_TYPE.TRIANGLE_TO_CIRCLE, description: "属人的" },
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
          label="選ばれる理由"
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
          <div className="relative flex flex-wrap justify-center gap-5">
            <div className="flex flex-wrap justify-center gap-5">
              <MemberCard {...MEMBER_DATA[0]} />
              <MemberCard {...MEMBER_DATA[1]} />
            </div>
            <div className="flex flex-wrap justify-center gap-5">
              <MemberCard {...MEMBER_DATA[2]} />
              <MemberCard {...MEMBER_DATA[3]} />
            </div>
          </div>

          <div className="mt-16 flex w-full flex-col items-center">
            <div className="space-y-12 sm:space-y-16 md:flex md:flex-wrap md:justify-center md:gap-x-12 md:gap-y-14 md:space-y-0 lg:gap-x-12 xl:gap-x-8">
              {GRAPH_DATA.map((member, i) => (
                <GraphCard key={i} {...member} />
              ))}
            </div>
          </div>

          <div className="mt-16 md:mt-20">
            <ComparisonTable data={COMPARISON_DATA} />
          </div>
        </div>
      </div>
    </section>
  );
}

type MemberCardProps = {
  label: string;
  title: string;
  career: string[];
  strengths: string[];
};

const MemberCard = ({ label, title, career, strengths }: MemberCardProps) => {
  return (
    <div className="w-full max-w-[326px] rounded-2xl border border-solid border-gray-200 bg-white p-4 pb-6 sm:w-auto">
      <div className="flex justify-center">
        <Image src="/member-icon.svg" width={90} height={90} alt="" />
      </div>

      <span className="relative mt-2 inline-block rounded-[2px] bg-gray-400 px-2 text-[11px] tracking-wider text-white after:absolute after:left-1/2 after:top-full after:-ml-1 after:skew-x-[20deg] after:border-[4px] after:border-transparent after:border-t-gray-400 after:content-['']">
        {label}
      </span>
      <h3 className="mt-1 text-base font-bold !leading-[1.5] tracking-wider text-gray-800 sm:text-lg">
        {title}
      </h3>

      <div className="mt-3 space-y-1.5">
        <span className="inline-block rounded-sm bg-emerald-500 px-2 py-0.5 text-xs !leading-[1.6] tracking-widest text-white sm:text-[12px]">
          経歴
        </span>
        <ul className="relative space-y-1 pl-1 before:absolute before:left-[7px] before:top-[0.5em] before:h-[calc(100%-1em)] before:w-[1] before:bg-emerald-200 before:content-[''] sm:before:left-[8px]">
          {career.map((item, i) => (
            <li
              key={i}
              className="flex items-baseline text-xs !leading-[1.5] tracking-wide text-gray-800 before:mr-2 before:inline-block before:h-[7px] before:w-[7px] before:rounded-full before:bg-emerald-200 before:content-[''] sm:text-[13px] sm:before:h-[9px] sm:before:w-[9px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-3 space-y-1.5">
        <span className="inline-block rounded-sm bg-emerald-500 px-2 py-0.5 text-xs !leading-[1.6] tracking-widest text-white sm:text-[12px]">
          強み
        </span>
        <ul className="space-y-1 pl-1">
          {strengths.map((item, i) => (
            <li
              key={i}
              className="flex items-baseline text-xs !leading-[1.5] tracking-wide text-gray-800 before:mr-2 before:inline-block before:h-[7px] before:w-[7px] before:rounded-full before:bg-emerald-200 before:content-[''] sm:text-[13px] sm:before:h-[9px] sm:before:w-[9px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

type GraphCardProps = {
  title: string;
  image: string;
  width: number;
  height: number;
};

function GraphCard({ title, image, width }: GraphCardProps) {
  return (
    <div className="md:w-[calc(50%-48px)] lg:w-auto">
      <h3 className="whitespace-pre-wrap text-lg font-bold !leading-[1.7] tracking-wider text-gray-800 lg:text-[22px]">
        {title}
      </h3>

      <div className="mt-6">
        <div
          className="hidden overflow-hidden lg:block"
          style={{ width: width }}
        >
          <Image
            src={image}
            width={411}
            height={287}
            alt=""
            className="hidden w-[411px] max-w-[411px] lg:block"
          />
        </div>
        <div className="block lg:hidden">
          <Image
            src={image}
            width={411}
            height={287}
            alt=""
            className="block lg:hidden"
          />
        </div>
      </div>
    </div>
  );
}
