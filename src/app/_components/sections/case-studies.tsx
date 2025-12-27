"use client";

import { CustomDownloadButton } from "@/app/_components/ui/download-button";
import { Carousel } from "@/components/ui/carousel";

import { SectionHeader } from "../ui/section-header";
import {
  Hospital,
  Box,
  ChartBarBig,
  Users,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type CaseStudyItemBase = {
  title: string;
  scale: string;
  financialBackground: string;
  serviceTypeList: ServiceType[];
  supportContentList: string[];
  resultList: string[];
};
type CaseStudyItemWithLogo = CaseStudyItemBase & {
  companyName: string;
  logoPath: string;
};
type CaseStudyItemWithoutLogo = CaseStudyItemBase & {
  category: string;
  icon: LucideIcon;
};
type CaseStudyItem = CaseStudyItemWithLogo | CaseStudyItemWithoutLogo;

const SERVICE_TYPE = {
  DEVELOPMENT: "技術",
  PRODUCT: "プロダクト",
  ORGANIZATION: "組織",
  RECRUITMENT: "採用",
} as const;
type ServiceType = (typeof SERVICE_TYPE)[keyof typeof SERVICE_TYPE];

const caseStudyItemList: CaseStudyItem[] = [
  {
    companyName: "千葉エコ・エネルギー株式会社",
    title:
      "農地法SaaSの製品構想を整理し、開発ロードマップ策定〜外注監修まで一気通貫",
    logoPath: "/logos/chiba-eco.webp",
    scale: "売上高数億円",
    financialBackground: "非公開",
    serviceTypeList: [SERVICE_TYPE.PRODUCT, SERVICE_TYPE.DEVELOPMENT],
    supportContentList: [
      "農地法特有の業務手続きを踏まえ、開発ロードマップと技術戦略を策定",
      "セールスの戦略とスケジュールを踏まえてMVP範囲を精緻化",
      "外注先の選定と、発注後の外注先管理をサポート",
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
    serviceTypeList: [SERVICE_TYPE.ORGANIZATION, SERVICE_TYPE.RECRUITMENT],
    supportContentList: [
      "製品仕様が明確という特徴を活かし、開発速度を最大化する開発プロセスを設計",
      "開発プロセスに最適化されたエンジニア求人を定義し、採用方針を整理",
    ],
    resultList: ["（現在ご支援中）"],
  },
  {
    category: "医療\u00d7AI SaaS スタートアップ",
    title: "MVPを事業計画通りリリース。\nスカウト返信率改善で即戦力を2名獲得。",
    icon: Hospital,
    scale: "シードラウンド 1億円調達",
    financialBackground: "エクイティファイナンス",
    serviceTypeList: [SERVICE_TYPE.DEVELOPMENT, SERVICE_TYPE.RECRUITMENT],
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
      "プロダクト構想を開発計画に落とし込み、\nゼロから内製組織を立ち上げ。",
    icon: Box,
    scale: "資本金 3,000万円",
    financialBackground: "自己資金（黒字）",
    serviceTypeList: [SERVICE_TYPE.DEVELOPMENT, SERVICE_TYPE.PRODUCT],
    supportContentList: [
      "販売戦略から逆算して、MVPの開発ロードマップと技術戦略を策定",
      "内製リソースがゼロの状態から3名の初期チームと開発基盤を構築",
    ],
    resultList: ["（現在ご支援中）"],
  },
  {
    category: "経営管理 SaaS スタートアップ",
    title: "MVPを実現しシード調達に成功。\n副業エンジニア拡大後、CTO採用達成。",
    icon: ChartBarBig,
    scale: "シードラウンド 1億円調達",
    financialBackground: "エクイティファイナンス",
    serviceTypeList: [
      SERVICE_TYPE.DEVELOPMENT,
      SERVICE_TYPE.ORGANIZATION,
      SERVICE_TYPE.RECRUITMENT,
    ],
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
    icon: Users,
    scale: "従業員数10名",
    financialBackground: "自己資金（新規事業）",
    serviceTypeList: [SERVICE_TYPE.DEVELOPMENT, SERVICE_TYPE.ORGANIZATION],
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

export function CaseStudies() {
  return (
    <div
      id="case-studies"
      className="mx-auto w-[82%] max-w-[1200px] py-24 sm:py-32 md:w-[86%]"
    >
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
        <CustomDownloadButton subtitle="成果の詳細を公開中" asLink />
      </div>
    </div>
  );
}

type CaseStudyCardProps = {
  caseStudyItem: CaseStudyItem;
  className?: string;
};
function CaseStudyCard({ caseStudyItem, className }: CaseStudyCardProps) {
  const hasLogo = "logoPath" in caseStudyItem;

  return (
    <div
      className={cn(
        "h-full overflow-hidden rounded-md border border-solid border-gray-300 bg-white",
        className
      )}
    >
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-500/80 px-4 py-4 sm:px-6">
        <p className="whitespace-pre-wrap text-lg font-bold !leading-[1.65] tracking-wide text-white sm:text-[22px]">
          {caseStudyItem.title}
        </p>
      </div>

      <div className="mt-5 px-6 sm:px-8">
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
          <div className="flex items-center gap-3">
            <caseStudyItem.icon
              className="h-7 w-7 text-gray-600"
              strokeWidth={2}
            />
            <p className="text-lg font-bold tracking-wide text-gray-800">
              {caseStudyItem.category}
            </p>
          </div>
        )}
      </div>

      <div className="mt-4 overflow-hidden px-4 pb-5 sm:px-6">
        <Row isEven={false}>
          <Head>会社規模</Head>
          <Body>{caseStudyItem.scale}</Body>
        </Row>
        <Row isEven={true}>
          <Head>財務状況</Head>
          <Body>{caseStudyItem.financialBackground}</Body>
        </Row>
        <Row isEven={false}>
          <Head>支援業務</Head>
          <Body>
            <div className="flex flex-wrap gap-2">
              {caseStudyItem.serviceTypeList.map((item, index) => (
                <div
                  key={index}
                  className="rounded border border-gray-200 px-3 py-0.5"
                >
                  <p className="text-[11px] font-medium leading-5 text-gray-800">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Body>
        </Row>
        <Row isEven={true}>
          <Head>支援内容</Head>
          <Body>
            <ul className="flex list-disc flex-col gap-1">
              {caseStudyItem.supportContentList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Body>
        </Row>
        <Row isEven={false}>
          <Head>成果</Head>
          <Body>
            <ul className="flex list-disc flex-col gap-1">
              {caseStudyItem.resultList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Body>
        </Row>
      </div>
    </div>
  );
}

function Row({
  isEven,
  children,
}: {
  isEven: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`flex w-full ${isEven ? "bg-gray-50" : ""}`}>
      {children}
    </div>
  );
}

function Head({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-2.5 pl-5">
      <p className="w-[60px] text-xs leading-5 tracking-wide text-gray-800 sm:w-[68px] sm:text-sm sm:leading-relaxed">
        {children}
      </p>
    </div>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <div className="grow py-2.5 pl-6 pr-2">
      <div className="text-xs leading-5 tracking-wide text-gray-800 sm:text-sm sm:leading-relaxed">
        {children}
      </div>
    </div>
  );
}
