import { SectionHeader } from "@/app/_components/ui/section-header";
import { cn } from "@/lib/utils";

import { MemberCards } from "@/app/_components/sections/why-reminus/member-cards";

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
            BtoB SaaSに特化。
          </span>
          <br />
          経営視点を持ったメンバーが伴走します。
        </SectionHeader>

        <p className="mt-6 text-sm !leading-[1.8] tracking-wide text-gray-800 sm:text-base md:text-lg">
          CTOに求められる広範な課題に対応するため、Reminusには様々な専門領域と強みを持つメンバーが参画しています。
        </p>

        <div className="bleed mt-16 px-6">
          <MemberCards members={MEMBER_DATA} />
        </div>
      </div>
    </section>
  );
}
