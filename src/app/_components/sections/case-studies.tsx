"use client";

import { MainHeading } from "../ui/main-heading";
import { Section } from "../ui/section";
import { CustomDownloadButton } from "@/app/_components/ui/download-button";
import { Carousel } from "@/components/ui/carousel";

import { Shapes } from "lucide-react";

type CaseStudyItem = {
  category: string;
  title: string;
  scale: string;
  financialBackground: string;
  serviceTypeList: ServiceType[];
  supportContentList: string[];
  resultList: string[];
};

const SERVICE_TYPE = {
  DEVELOPMENT: "技術",
  PRODUCT: "プロダクト",
  ORGANIZATION: "組織",
  RECRUITMENT: "採用",
} as const;
type ServiceType = (typeof SERVICE_TYPE)[keyof typeof SERVICE_TYPE];

const caseStudyItemList: CaseStudyItem[] = [
  {
    category: "医療\u00d7AI SaaS スタートアップ",
    title: "MVPを事業計画通りリリース。\nスカウト返信率改善で即戦力を2名獲得。",
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
    category: "GovTech SaaS スタートアップ",
    title: "GovTech SaaSの製品構想を整理し、開発ロードマップ〜外注監修まで一気通貫",
    scale: "資本金 1,000万円",
    financialBackground: "自己資本（新規事業）",
    serviceTypeList: [
      SERVICE_TYPE.DEVELOPMENT,
      SERVICE_TYPE.PRODUCT,
    ],
    supportContentList: [
      "行政制度特有の業務を踏まえ、開発ロードマップと技術戦略を策定",
      "セールスの戦略とスケジュールを踏まえMVP範囲を精緻化",
      "外注先の選定と、発注後の外注先管理をサポート"
    ],
    resultList: [
      "（現在ご支援中）"
    ],
  },
  {
    category: "製造業 SaaS スタートアップ",
    title: "プロダクト構想を開発計画に落とし込み、ゼロから内製組織を立ち上げ。",
    scale: "資本金 3,000万円",
    financialBackground: "自己資本（黒字）",
    serviceTypeList: [
      SERVICE_TYPE.DEVELOPMENT,
      SERVICE_TYPE.PRODUCT,
    ],
    supportContentList: [
      "販売戦略から逆算して、MVPの開発ロードマップと技術戦略を策定",
      "内製リソースがゼロの状態から3名の初期チームと開発基盤を構築"
    ],
    resultList: [
      "（現在ご支援中）"
    ],
  },
  {
    category: "経営管理 SaaS スタートアップ",
    title: "MVPを実現しシード調達に成功。\n副業エンジニア拡大後、CTO採用達成。",
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
    scale: "従業員数10名",
    financialBackground: "自己資本 (新規事業）",
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
    <Section id="case-studies">
      <div className="space-y-16">
        <MainHeading>事例紹介</MainHeading>

        <div className="max-w-8xl mx-auto hidden grid-cols-1 gap-6 md:grid md:grid-cols-2 xl:grid-cols-3">
          {caseStudyItemList.map((item, index) => (
            <CaseStudyCard key={index} caseStudyItem={item} />
          ))}
        </div>

        <div className="bleed md:hidden">
          <Carousel
            opts={{ align: "start" }}
            items={caseStudyItemList.map((item, index) => (
              <CaseStudyCard key={index} caseStudyItem={item} />
            ))}
          />
        </div>

        <div className="mt-12 flex justify-center">
          <CustomDownloadButton subtitle="成果の詳細を公開中" />
        </div>
      </div>
    </Section>
  );
}

function CaseStudyCard({ caseStudyItem }: { caseStudyItem: CaseStudyItem }) {
  return (
    <div className="rounded-md border border-solid border-gray-300 bg-white ">
      <div className="p-5 sm:p-6">
      <p className="-ml-0.5 flex items-center gap-1.5 text-lg font-bold tracking-wide text-gray-600 sm:text-sm">
        <Shapes
          className="h-4 w-4 text-primary sm:h-5 sm:w-5"
          strokeWidth={2}
        />
        {caseStudyItem.category}
      </p>
      <p className="mt-1.5 whitespace-pre-line text-base font-bold leading-6 tracking-wide text-gray-800 sm:text-lg sm:leading-7">
        {caseStudyItem.title}
      </p>
      </div>
      <div className="mt-1.5 sm:mt-2 px-4 pb-4">
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
              {caseStudyItem.serviceTypeList.map((item, index) => (
              <span key={index} className="whitespace-nowrap">
                  {item}
                {index < caseStudyItem.serviceTypeList.length - 1 && (
                  <span className="mx-1.5 text-gray-300">/</span>
                )}
                </span>
              ))}
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
    <div className="py-2.5 pl-4">
      <p className="w-[60px] text-xs font-bold leading-5 tracking-wide text-gray-600 sm:w-[68px] sm:text-sm sm:leading-relaxed">
        {children}
      </p>
    </div>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <div className="grow pl-6 pr-2 py-2.5">
      <div className="text-xs leading-5 tracking-wide text-gray-600 sm:text-sm sm:leading-relaxed">
        {children}
      </div>
    </div>
  );
}
