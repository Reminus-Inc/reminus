"use client";

import { MainHeading } from "../ui/main-heading";
import { Section } from "../ui/section";
import { DownloadButton } from "@/app/_components/ui/download-button";
import { ContactButton } from "@/app/_components/ui/contact-button";
import { Carousel } from "@/components/ui/carousel";

import { Shapes } from "lucide-react";

type CaseStudyItem = {
  category: string;
  title: string;
  scale: string;
  financialBackground: string;
  serviceTypeList: ServiceType[];
  resultList: string[];
};

const SERVICE_TYPE = {
  DEVELOPMENT: "技術",
  ORGANIZATION: "組織",
  RECRUITMENT: "採用",
} as const;
type ServiceType = (typeof SERVICE_TYPE)[keyof typeof SERVICE_TYPE];

const caseStudyItemList: CaseStudyItem[] = [
  {
    category: "医療\u00d7AI SaaS スタートアップ",
    title: "MVPを事業計画通りリリース。\nスカウト返信率改善で即戦力を2名獲得。",
    scale: "シードラウンド 資金調達 1億円",
    financialBackground: "エクイティファイナンス",
    serviceTypeList: [SERVICE_TYPE.DEVELOPMENT, SERVICE_TYPE.RECRUITMENT],
    resultList: [
      "CTO代行が技術施策に優先度をつけ最低限に絞り、顧客に価値を届ける機能開発に集中したことで、事業計画に沿ってMVPリリースを迎えられた",
      "事業状況に適したポジション設計とスカウト文面の最適化で、候補者から返事が返ってくるようになり、入社意欲のあるエンジニアを2名獲得",
    ],
  },
  {
    category: "事業計画 SaaS スタートアップ",
    title: "MVPを実現しシード調達に成功。\n副業エンジニア拡大後、CTO採用達成。",
    scale: "シードラウンド 資金調達 1億円",
    financialBackground: "エクイティファイナンス",
    serviceTypeList: [
      SERVICE_TYPE.DEVELOPMENT,
      SERVICE_TYPE.ORGANIZATION,
      SERVICE_TYPE.RECRUITMENT,
    ],
    resultList: [
      "事業特性上、最も重要な財務モデリング機能に特化して全体設計を策定したことで、MVPを実現し、シードラウンドでの資金調達に成功",
      "CTO代行がエンジニアへの訴求を軸足に採用プロセスを最適し、副業エンジニア6名まで開発組織を拡大後、CTO採用に成功",
    ],
  },
  {
    category: "士業特化バーティカルCRM SaaS スタートアップ",
    title: "エンジニア2名・コードなしの状態から内製開発組織を立ち上げ。",
    scale: "従業員10名",
    financialBackground: "自己資本 (コンサルティング事業利益の再投資)",
    serviceTypeList: [SERVICE_TYPE.DEVELOPMENT, SERVICE_TYPE.ORGANIZATION],
    resultList: [
      "CTO代行がシステム構想に対して技術の観点からMVPの範囲を決め、開発スケジュールを描いたことで、内製開発の立ち上げに成功",
      "Reminusエンジニアが2名伴走してコードを書きながら開発体制を立ち上げ、企画と開発を高速で回せる内製開発の仕組み化を実現",
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

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <DownloadButton />
          <ContactButton />
        </div>
      </div>
    </Section>
  );
}

function CaseStudyCard({ caseStudyItem }: { caseStudyItem: CaseStudyItem }) {
  return (
    <div className="rounded-md border border-solid border-gray-300 bg-white p-5 sm:p-6">
      <p className="-ml-0.5 flex items-center gap-1.5 text-xs font-bold tracking-wide text-gray-600 sm:text-sm">
        <Shapes
          className="h-4 w-4 text-primary sm:h-5 sm:w-5"
          strokeWidth={2}
        />
        {caseStudyItem.category}
      </p>
      <p className="mt-1.5 whitespace-pre-line text-base font-bold leading-6 tracking-wide text-gray-800 sm:text-lg sm:leading-7">
        {caseStudyItem.title}
      </p>
      <div className="mt-1.5 sm:mt-2">
        <Row isEven={false}>
          <Head>会社規模</Head>
          <Body>{caseStudyItem.scale}</Body>
        </Row>
        <Row isEven={true}>
          <Head>
            <span className="text-xs">
              主な
              <br className="hidden sm:inline" />
              ファイナンス
            </span>
          </Head>
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
      <p className="w-[72px] text-xs font-bold leading-5 tracking-wide text-gray-600 sm:w-[88px] sm:text-[13px] sm:leading-relaxed">
        {children}
      </p>
    </div>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <div className="grow px-4 py-2.5">
      <div className="text-xs leading-5 tracking-wide text-gray-600 sm:text-[13px] sm:leading-relaxed">
        {children}
      </div>
    </div>
  );
}
