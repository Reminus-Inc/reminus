import { CustomDownloadButton } from "@/app/_components/ui/download-button";
import { Carousel } from "@/components/ui/carousel";

import { SectionHeader } from "../ui/section-header";
import { cn } from "@/lib/utils";
import Image from "next/image";

type CaseStudyItemBase = {
  title: string;
  scale: string;
  financialBackground?: string;
  supportContentList: string[];
  resultList: string[];
};
type CaseStudyItemWithLogo = CaseStudyItemBase & {
  companyName: string;
  logoPath: string;
};
type CaseStudyItemWithoutLogo = CaseStudyItemBase & {
  category: string;
};
type CaseStudyItem = CaseStudyItemWithLogo | CaseStudyItemWithoutLogo;

const caseStudyItemList: CaseStudyItem[] = [
  {
    companyName: "千葉エコ・エネルギー株式会社",
    title:
      "農地法SaaSの製品構想を整理し、開発ロードマップ策定〜外注監修まで一気通貫",
    logoPath: "/logos/chiba-eco.webp",
    scale: "売上高数億円",
    supportContentList: [
      "農地法特有の業務手続きを踏まえ、開発ロードマップと技術戦略を策定",
      "セールスの戦略とスケジュールを踏まえてMVP範囲を精緻化",
      "外注先の選定と、発注後は外注管理サポート",
    ],
    resultList: ["（現在ご支援中）"],
  },
  {
    companyName: "1backoffice合同会社",
    title:
      "バックオフィスDXプロダクトの開発プロセス設計と初期エンジニア採用を一体で支援",
    logoPath: "/logos/1backoffice.png",
    scale: "創業2年",
    financialBackground: "自己資金",
    supportContentList: [
      "仕様が明確なバックオフィス業務の特性を活かし、AIをフル活用した開発プロセスを設計",
      "自社に最適化されたエンジニア求人を定義し、採用方針を整理",
    ],
    resultList: ["（現在ご支援中）"],
  },
  {
    category: "社名非公開（医療AI SaaS）",
    title: "MVPを事業計画通りリリース。\nスカウト返信率改善で即戦力を2名獲得。",

    scale: "シード1億円調達",
    supportContentList: [
      "CTO代行が技術投資に優先度をつけ、工数を削減",
      "事業状況に適した役割設計とスカウト文面の最適化",
    ],
    resultList: [
      "顧客への機能開発に集中し、事業計画に沿ってMVPリリース",
      "候補者から返信率が向上し、入社意欲のあるエンジニアを2名獲得",
    ],
  },
  {
    category: "製造業 SaaS スタートアップ",
    title:
      "プロダクト構想を開発計画に落とし込み、ゼロから内製組織を立ち上げ。",

    scale: "資本金3,000万円",
    financialBackground: "自己資金",
    supportContentList: [
      "販売戦略から逆算して、MVPの開発ロードマップと技術戦略を策定",
      "内製リソースがゼロの状態から3名の初期チームと開発基盤を構築",
    ],
    resultList: ["（現在ご支援中）"],
  },
  {
    category: "経営管理 SaaS スタートアップ",
    title: "MVPを実現しシード調達に成功。チーム拡大後、CTO採用達成。",

    scale: "シード1億円調達",
    supportContentList: [
      "競争優位性となる財務モデリングに特化して全体設計を策定",
      "CTO代行がエンジニアに訴求できる採用プロセスを構築",
    ],
    resultList: [
      "MVPを実現し、シードラウンドでの資金調達に成功",
      "副業エンジニア6名まで開発組織を拡大後、CTO採用に成功",
    ],
  },
  {
    category: "士業特化バーティカルCRM SaaS スタートアップ",
    title: "エンジニア2名・コードなしの状態から内製開発組織を立ち上げ。",

    scale: "従業員数10名",
    financialBackground: "自己資金",
    supportContentList: [
      "CTO代行がシステム構想からMVP範囲を決め、スケジュールを策定",
      "Reminusエンジニアが2名コードを書きながら開発体制を立ち上げ",
    ],
    resultList: [
      "1.5ヶ月で内製開発を立ち上げ",
      "企画と開発を高速で回せる開発プロセスの仕組み化を実現",
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

        <div className="bleed mt-16 px-4">
          <CustomDownloadButton
            title="資料ダウンロード"
            subtitle="成果の詳細を公開中"
          />
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
        <p className="whitespace-pre-wrap text-base font-bold !leading-[1.65] tracking-wide text-white sm:text-[22px]">
          {caseStudyItem.title}
        </p>
      </div>

      <div className="flex-grow rounded-b-lg border-b border-l border-r border-solid border-gray-300">
        <div className="mt-5 px-5 sm:px-8">
          {hasLogo ? (
            <div className="flex flex-col gap-2">
              <p className="text-xs tracking-wide text-gray-600" data-nosnippet>
                {caseStudyItem.companyName}
              </p>
              <div>
                <Image
                  src={caseStudyItem.logoPath}
                  alt={caseStudyItem.companyName}
                  width={120}
                  height={40}
                  className="h-auto max-h-[40px] w-auto object-contain"
                />
              </div>
            </div>
          ) : (
            // ロゴなし
            <p className="text-lg font-bold tracking-wide text-gray-800">
              {caseStudyItem.category}
            </p>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5 px-5 sm:px-8">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs tracking-wide text-gray-600">
            #{caseStudyItem.scale}
          </span>
          {caseStudyItem.financialBackground && (
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs tracking-wide text-gray-600">
              #{caseStudyItem.financialBackground}
            </span>
          )}
        </div>

        <div className="mt-4 space-y-3 px-5 pb-5 sm:px-8">
          <div>
            <p className="text-xs font-bold tracking-wide text-gray-700 sm:text-sm">
              支援内容
            </p>
            <ul className="mt-1.5 list-disc space-y-1 pl-4 text-xs leading-5 tracking-wide text-gray-800 sm:text-sm sm:leading-relaxed">
              {caseStudyItem.supportContentList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold tracking-wide text-gray-700 sm:text-sm">
              成果
            </p>
            <ul className="mt-1.5 list-disc space-y-1 pl-4 text-xs leading-5 tracking-wide text-gray-800 sm:text-sm sm:leading-relaxed">
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

