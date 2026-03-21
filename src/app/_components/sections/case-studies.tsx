import { Carousel } from "@/components/ui/carousel";
import { CircleAlert, CircleCheckBig } from "lucide-react";

import { SectionHeader } from "../ui/section-header";
import { cn } from "@/lib/utils";
import Image from "next/image";

type CaseStudyItemBase = {
  title: string;
  scale: string;
  financialBackground?: string;
  challengeList: string[];
  resultList: string[];
};
type CaseStudyItemWithLogo = CaseStudyItemBase & {
  companyName: string;
  logoPath: string;
  logoWidth: number;
  logoHeight: number;
  logoClassName?: string;
};
type CaseStudyItemWithoutLogo = CaseStudyItemBase & {
  category: string;
};
type CaseStudyItem = CaseStudyItemWithLogo | CaseStudyItemWithoutLogo;

const caseStudyItemList: CaseStudyItem[] = [
  {
    companyName: "1backoffice合同会社",
    title:
      "バックオフィスDXプロダクトの開発プロセス設計と初期エンジニア採用を一体で支援",
    logoPath: "/logos/1backoffice.png",
    logoWidth: 526,
    logoHeight: 40,
    logoClassName: "w-[140px]",
    scale: "創業2年",
    financialBackground: "自己資金",
    challengeList: [
      "バックオフィスSaaSは機能数が多いため開発生産性の見通しが重要",
      "開発プロセスが未整備で、自社に最適な1人目エンジニアの要件が曖昧",
    ],
    resultList: [
      "エンジニアが最も効率よくAIと分担・協働できる仕組みを構築",
      "開発プロセスに最適化したエンジニア要件を定義し、採用活動を推進",
    ],
  },
  {
    companyName: "千葉エコ・エネルギー株式会社",
    title:
      "農地法SaaSの製品構想を整理し、開発ロードマップ策定〜外注監修まで一気通貫",
    logoPath: "/logos/chiba-eco.webp",
    logoWidth: 300,
    logoHeight: 40,
    logoClassName: "w-[100px]",
    scale: "売上高数億円",
    challengeList: [
      "システム開発のノウハウ・リソースがない",
      "外注先選定・管理のポイントがわからない",
    ],
    resultList: [
      "農地法特有の業務手続きを踏まえ、開発ロードマップと技術戦略を策定",
      "セールスの戦略とスケジュールを踏まえてMVP範囲を精緻化",
      "外注先の選定と、発注後は外注管理サポート",
    ],
  },
  {
    category: "製造業SaaS スタートアップ",
    title: "プロダクト構想を開発計画に落とし込み、ゼロから内製組織を立ち上げ。",
    scale: "資本金3,000万円",
    financialBackground: "自己資金",
    challengeList: [
      "製造業の業務知見はあるが、SaaS化にあたって技術の実現可否を判断できる人材がいない",
      "エンジニアがゼロで、開発体制の作り方も開発の進め方もわからない",
    ],
    resultList: [
      "プロダクト・業界特有の技術リスクを洗い出し、MVPロードマップと技術戦略を策定",
      "技術基盤を構築し、業務委託エンジニアを1名採用。開発を予定通り推進",
    ],
  },
  {
    category: "医療AI SaaS",
    title: "MVPを事業計画通りリリース。\nスカウト返信率改善で即戦力を2名獲得。",
    scale: "シード1億円調達",
    challengeList: [
      "CTO不在で技術投資の優先順位がつけられず、開発工数が分散",
      "即戦力エンジニアを採用したいが、スカウトの返信率が低い",
    ],
    resultList: [
      "CTO代行が技術投資に優先度をつけ工数を削減し、事業計画どおりMVPをリリース",
      "スカウト文面と役割設計を最適化し、入社意欲のあるエンジニアを2名獲得",
    ],
  },
  {
    category: "経営管理SaaS",
    title: "MVPを実現しシード調達に成功。チーム拡大後、CTO採用達成。",
    scale: "シード1億円調達",
    challengeList: [
      "財務モデリングが技術的に複雑で設計・開発が困難",
      "エンジニア採用のノウハウがなく、外注の内製化が難しい",
    ],
    resultList: [
      "設計支援によりMVPを実現し、シードラウンドでの資金調達に成功",
      "副業エンジニア6名まで開発組織を拡大後、CTO採用に成功",
    ],
  },
  {
    category: "士業特化CRM",
    title: "エンジニア2名・コードなしの状態から内製開発組織を立ち上げ。",
    scale: "従業員数10名",
    financialBackground: "自己資金",
    challengeList: [
      "エンジニアはいるが、内製開発をどう進めればいいかわからない",
      "仕様を正確かつ効率的にエンジニアに伝える方法が分からない",
    ],
    resultList: [
      "1.5ヶ月で技術基盤と内製チームを立ち上げ、開発を開始",
      "企画と開発を高速で回せる開発プロセスを仕組み化",
    ],
  },
];

export function CaseStudies({ className }: { className?: string }) {
  return (
    <section
      id="case-studies"
      className={cn(
        "content-auto overflow-x-hidden py-24 font-sans sm:py-32",
        className
      )}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="Case Studies"
          align="center"
          headingClassName="text-3xl sm:text-[40px] !leading-[1.7]"
        >
          事例のご紹介
        </SectionHeader>

        <div className="mt-12 sm:mt-16">
          <div className="bleed md:bleed-none">
            <Carousel
              className="mx-6 sm:mx-12 lg:mx-0"
              itemClassName="px-1.5 sm:px-3 xl:px-4 lg:basis-[50%]"
              items={caseStudyItemList.map((item, index) => (
                <CaseStudyCard key={index} caseStudyItem={item} />
              ))}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type CaseStudyCardProps = {
  caseStudyItem: CaseStudyItem;
  className?: string;
};
function CaseStudyCard({ caseStudyItem, className }: CaseStudyCardProps) {
  const hasLogo = "logoPath" in caseStudyItem;

  return (
    <div className={cn("flex h-full flex-col bg-white", className)}>
      <div className="rounded-t-lg bg-gradient-to-r from-emerald-500 from-60% to-emerald-500/85 px-4 py-4 sm:px-6">
        <p className="whitespace-pre-wrap text-base font-bold !leading-[1.7] tracking-wide text-white sm:text-lg md:text-xl lg:text-[22px]">
          {caseStudyItem.title}
        </p>
      </div>

      <div className="flex-grow rounded-b-lg border-b border-l border-r border-solid border-gray-300 p-4 sm:p-6">
        {hasLogo ? (
          // ロゴあり
          <>
            <Image
              src={caseStudyItem.logoPath}
              alt={caseStudyItem.companyName}
              width={caseStudyItem.logoWidth}
              height={caseStudyItem.logoHeight}
              className={cn(
                "h-auto w-auto object-contain",
                caseStudyItem.logoClassName
              )}
            />
            <p
              className="mt-5 text-sm tracking-wider text-gray-800"
              data-nosnippet
            >
              {caseStudyItem.companyName}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Chip label={caseStudyItem.scale} />
              {caseStudyItem.financialBackground && (
                <Chip label={caseStudyItem.financialBackground} />
              )}
            </div>
          </>
        ) : (
          // ロゴなし
          <>
            <p className="text-lg font-bold tracking-wider text-gray-800">
              社名非公開 ({caseStudyItem.category})
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              <Chip label={caseStudyItem.scale} />
              {caseStudyItem.financialBackground && (
                <Chip label={caseStudyItem.financialBackground} />
              )}
            </div>
          </>
        )}

        <div className="mt-5 space-y-3">
          {/* 課題 */}
          <div className="flex flex-col gap-2 bg-gray-100/80 p-4">
            <div className="flex items-center gap-2">
              <CircleAlert
                className="size-[16px] h-auto text-red-500 sm:size-[18px]"
                strokeWidth={2.5}
              />
              <p className="text-xs font-bold tracking-wider text-gray-900 sm:text-sm">
                抱えていた課題
              </p>
            </div>
            <ul className="list-disc space-y-1 pl-4 text-xs !leading-[1.5] tracking-wide text-gray-900 sm:pl-5 sm:text-sm">
              {caseStudyItem.challengeList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* 効果 */}
          <div className="flex flex-col gap-2 bg-sky-50 p-4">
            <div className="flex items-center gap-2">
              <CircleCheckBig
                className="size-[16px] h-auto text-blue-500 sm:size-[18px]"
                strokeWidth={2.5}
              />
              <p className="text-xs font-bold tracking-wider text-gray-900 sm:text-sm">
                導入効果
              </p>
            </div>
            <ul className="list-disc space-y-1 pl-4 text-xs !leading-[1.5] tracking-wide text-gray-900 sm:pl-5 sm:text-sm">
              {caseStudyItem.resultList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <span className="rounded border border-gray-200 px-3 py-0.5 text-[11px] font-medium leading-5 text-gray-800">
      {label}
    </span>
  );
}
