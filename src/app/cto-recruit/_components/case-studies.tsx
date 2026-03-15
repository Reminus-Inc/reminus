import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";
import Image from "next/image";

type CaseStudyItem = {
  title: string;
  companyName?: string;
  logoPath?: string;
  category?: string;
  scale: string;
  financialBackground?: string;
  recruitmentChallenge: string[];
  supportContent: string[];
  recruitmentResult: string[];
};

const caseStudyItems: CaseStudyItem[] = [
  {
    companyName: "1backoffice合同会社",
    logoPath: "/logos/1backoffice.png",
    title: "開発プロセス設計と連動した\n1人目エンジニア採用を推進",
    scale: "創業2年",
    financialBackground: "自己資金",
    recruitmentChallenge: [
      "開発プロセスが未整備で、自社に最適な1人目エンジニアの要件が曖昧",
      "バックオフィスSaaSは機能数が多く、求める技術スタックの優先順位がつけられない",
    ],
    supportContent: [
      "開発プロセスに最適化したエンジニア要件を定義",
      "技術スタックの優先度整理と求人設計",
    ],
    recruitmentResult: [
      "CTO代行が設計した開発プロセスに最適化したエンジニア要件を策定",
      "要件に基づく採用活動を推進し、採用パイプラインを構築",
    ],
  },
  {
    category: "社名非公開（医療AI SaaS）",
    title: "スカウト返信率を改善し\n即戦力エンジニアを2名獲得",
    scale: "シード1億円調達",
    recruitmentChallenge: [
      "即戦力エンジニアを採用したいが、スカウトの返信率が低い",
      "CTO不在で技術的な魅力を候補者に伝えられない",
    ],
    supportContent: [
      "スカウト文面の最適化（CTO視点での技術的魅力の言語化）",
      "役割設計の見直しと候補者への訴求ポイント再構築",
    ],
    recruitmentResult: [
      "スカウト文面と役割設計を最適化し、返信率が大幅に改善",
      "入社意欲のある即戦力エンジニアを2名獲得",
    ],
  },
  {
    category: "経営管理 SaaS スタートアップ",
    title: "開発組織を6名に拡大後\nCTO採用に成功",
    scale: "シード1億円調達",
    recruitmentChallenge: [
      "エンジニア採用のノウハウがなく、外注から内製への移行が困難",
      "CTO候補にアプローチする方法やチャネルが分からない",
    ],
    supportContent: [
      "副業エンジニアの採用支援で段階的に開発組織を構築",
      "CTO候補の要件定義とサーチ戦略の策定",
    ],
    recruitmentResult: [
      "副業エンジニア6名まで開発組織を拡大",
      "組織の成長に合わせたCTO採用に成功",
    ],
  },
];

export function CtoRecruitCaseStudies({
  className,
}: {
  className?: string;
}) {
  return (
    <section
      id="case-studies"
      className={cn("content-auto py-24 font-sans sm:py-32", className)}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="導入事例"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
          align="center"
        >
          <span className="highlight-underline text-emerald-500">
            CTO代行の現場
          </span>
          から生まれた
          <br className="hidden sm:inline" />
          採用支援の実績。
        </SectionHeader>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {caseStudyItems.map((item, index) => (
            <CaseStudyCard key={index} item={item} />
          ))}
        </div>

        <p className="mt-6 text-center text-xs tracking-wide text-gray-400">
          ※一部、CTO代行支援における採用関連の成果を含みます
        </p>
      </div>
    </section>
  );
}

function CaseStudyCard({ item }: { item: CaseStudyItem }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-solid border-gray-200 bg-white shadow-sm">
      {/* ヘッダー */}
      <div className="bg-gradient-to-r from-emerald-500 from-60% to-emerald-500/85 px-5 py-4 sm:px-6">
        <p className="whitespace-pre-wrap text-base font-bold !leading-[1.65] tracking-wide text-white sm:text-lg">
          {item.title}
        </p>
      </div>

      {/* ボディ */}
      <div className="flex flex-grow flex-col px-5 pb-5 pt-4 sm:px-6">
        {/* 企業情報 */}
        {item.logoPath && item.companyName ? (
          <div className="flex flex-col gap-1.5">
            <p className="text-xs tracking-wide text-gray-500">
              {item.companyName}
            </p>
            <Image
              src={item.logoPath}
              alt={item.companyName}
              width={100}
              height={32}
              className="h-auto max-h-[32px] w-auto object-contain"
            />
          </div>
        ) : (
          <p className="text-sm font-bold tracking-wide text-gray-700">
            {item.category}
          </p>
        )}

        {/* タグ */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] tracking-wide text-gray-500">
            #{item.scale}
          </span>
          {item.financialBackground && (
            <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] tracking-wide text-gray-500">
              #{item.financialBackground}
            </span>
          )}
        </div>

        {/* 採用課題 */}
        <div className="mt-4">
          <p className="text-xs font-bold tracking-wide text-gray-600">
            採用の課題
          </p>
          <ul className="mt-1.5 list-disc space-y-1 pl-4 text-xs leading-5 tracking-wide text-gray-700">
            {item.recruitmentChallenge.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        </div>

        {/* 支援内容 */}
        <div className="mt-3">
          <p className="text-xs font-bold tracking-wide text-gray-600">
            支援内容
          </p>
          <ul className="mt-1.5 list-disc space-y-1 pl-4 text-xs leading-5 tracking-wide text-gray-700">
            {item.supportContent.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        </div>

        {/* 成果 */}
        <div className="mt-auto pt-4">
          <div className="rounded-lg bg-emerald-50 px-4 py-3">
            <p className="text-xs font-bold tracking-wide text-emerald-700">
              採用の成果
            </p>
            <ul className="mt-1.5 list-disc space-y-1 pl-4 text-xs leading-5 tracking-wide text-emerald-800">
              {item.recruitmentResult.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
