import React from "react";
import Image from "next/image";
import {
  Zap,
  Users,
  Shield,
  AlertCircle,
  CheckCircle,
  LucideIcon,
} from "lucide-react";
import { Section } from "../ui/section";
import { Heading } from "../ui/heading";
import { cn } from "@/lib/utils";
import { MainHeading } from "../ui/main-heading";
import { CustomDownloadButton } from "@/app/_components/ui/download-button";
import { SectionHeader } from "../ui/section-header";

const features = [
  {
    image: "/illust-service-overview-1.svg",
    imageClassName: "-mt-5",
    imageHeight: 178,
    title: "プロダクト開発を最短で進める技術判断",
    points: [
      "MVP設計・機能の優先度・技術選定など、プロダクト成長に直結する技術判断を経営とセットで即断サポート。",
      "技術の不安で足を止めず、プロダクトとマーケットに集中できる状態を作ります。",
    ],
  },
  {
    image: "/illust-service-overview-2.svg",
    imageHeight: 158,
    title: "開発を停滞させない体制設計と採用支援",
    points: [
      "事業戦略に沿った内製・外注の判断や体制設計から、採用やパートナー選定まで支援。",
      "求人票やスカウト文面までサポート。採用コストと承諾率を最適化しエンジニア採用に向き合う土台を作ります。",
    ],
  },
  {
    image: "/illust-service-overview-3.svg",
    imageHeight: 163,
    title: "CTO採用待ちでプロダクトの進化を止めない",
    points: [
      "次の資金調達に求められるARR（売上）から逆算し、CTO不在でも技術判断と開発体制づくりを代行。",
      "専任CTOの採用を待たずに、今日から事業計画達成に向けてアクセルを踏める状態を作ります。",
    ],
  },
];

export function ServiceOverview() {
  return (
    <div
      id="service-overview"
      className="mx-auto w-[82%] max-w-[1200px] py-24 sm:py-32 md:w-[86%]"
    >
      <SectionHeader
        label="Reminus CTO パートナーとは？"
        headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
        tag="h2"
      >
        技術・採用・開発体制に不安を抱えるスタートアップに、
        <br className="hidden lg:inline" />
        <span className="highlight-underline text-emerald-500">
          経営直下で伴走するCTO代行サービス
        </span>
        です。
      </SectionHeader>

      <div className="mt-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col items-center gap-8 sm:flex-row-reverse sm:gap-12 md:pl-10",
              index !== features.length - 1 &&
                "mb-8 pb-8 sm:border-b sm:border-gray-200"
            )}
          >
            <div className="flex-1">
              <h3 className="text-xl font-bold !leading-[1.6] tracking-wide text-gray-800 sm:text-2xl md:text-3xl">
                {feature.title}
              </h3>
              <ul className="mt-3 space-y-1.5 pl-2 md:pl-3">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-baseline gap-3">
                    <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-200 sm:h-3 sm:w-3" />
                    <p className="text-sm !leading-[1.7] text-gray-800 sm:text-base">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0">
              <Image
                src={feature.image}
                width={180}
                height={feature.imageHeight}
                alt={feature.title}
                className={feature.imageClassName}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="bleed mt-16 px-4">
        <CustomDownloadButton subtitle="詳細事例とプランを公開中" />
      </div>
    </div>
  );
}

export const PhaseMerit = () => {
  return (
    <Section className="bg-gray-50" id="service-overview">
      <MainHeading>
        CTO雇用だけじゃない。
        <br className="lg:hidden" />
        現実的で柔軟な選択肢
      </MainHeading>

      <div className="space-y-20">
        <div>
          <div className="relative mx-auto max-w-3xl">
            <div className="rounded-lg border border-gray-200 bg-white px-6 py-10 md:px-16">
              <ul className="space-y-7">
                <ServiceFeature
                  icon={Zap}
                  title="月額サブスクで即戦力"
                  description={
                    <>
                      月額40万〜のサブスクリプション制で、1ヶ月ごとにON／OFF可能。
                      <br />
                      スポットCTOを必要なときだけ柔軟にご利用いただけます。
                    </>
                  }
                />
                <ServiceFeature
                  icon={Users}
                  title="初期投資0円でコストを最小化"
                  description={
                    <>
                      採用費0、エージェント手数料0。
                      <br />
                      平均年俸1,200万超のフルタイムCTO採用と比べ、月額40万〜で即稼働。
                    </>
                  }
                />
                <ServiceFeature
                  icon={Shield}
                  title="解雇リスク0"
                  description="貴社とのマッチ度に応じたCTO代行が支援するため、採用トラブルを未然にブロック。"
                />
              </ul>
            </div>
          </div>
        </div>

        <div>
          <Heading level="h3" className="mb-14 text-center">
            フェーズに合わせた支援プランを
            <span className="whitespace-nowrap">ご提案します！</span>
          </Heading>

          <div className="flex flex-col gap-16 lg:flex-row lg:justify-center lg:gap-5">
            <div className="hidden w-32 items-end lg:flex">
              <PhaseHeaderColumn />
            </div>

            <PhaseColumn
              title="創業期"
              challenge={
                <>
                  MVPローンチにあたり、技術の不安がたくさんあり優先度がつけられない。
                  <br />
                  エンジニアの集め方もわからない。
                </>
              }
              proposalTitle="技術顧問・エンジニア採用顧問"
              proposal="経営から現場まで、技術と採用の課題をなんでも相談。優先度をつけ対策を提案。"
            />
            <PhaseColumn
              title="MVP後〜探索期"
              challenge={
                <>
                  技術的な見通しがないために、経営が製品戦略を磨けず、現場は事業インパクトのある開発ができない。
                </>
              }
              proposalTitle="経営に技術を持ち込む"
              proposal="経営視点で技術を説明し、市場・製品戦略のブラッシュアップを支える。"
            />
            <PhaseColumn
              title="PMF・グロース期"
              challenge={
                <>
                  戦略に対して拡大した組織で実行が追いつかない。
                  <br />
                  学習サイクルにブレーキ。
                </>
              }
              proposalTitle="執行伴走"
              proposal={
                <>
                  経営と並走し、執行の設計と推進を支援。技術・組織・採用の実行を統括。
                </>
              }
            />
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <CustomDownloadButton subtitle="プランと料金を公開中" />
      </div>
    </Section>
  );
};

type ServiceFeatureProps = {
  icon: LucideIcon;
  title: string;
  description: React.ReactNode;
};
const ServiceFeature = ({
  icon: Icon,
  title,
  description,
}: ServiceFeatureProps) => (
  <li className="space-y-1.5">
    <div className="flex items-center gap-2">
      <Icon className="h-5 w-5 stroke-[2.5] text-emerald-500" />
      <h4 className="text-base font-bold tracking-wide text-gray-800 sm:text-xl">
        {title}
      </h4>
    </div>
    <p className="text-sm leading-7 text-gray-800 sm:text-base sm:leading-7">
      {description}
    </p>
  </li>
);

function PhaseHeaderColumn() {
  return (
    <div className="flex flex-1 flex-col gap-5">
      <div className="space-y-5">
        <ChallengeBox>
          <div className="flex h-full items-center justify-center gap-2 pb-1">
            <AlertCircle className="h-5 w-5 text-gray-700" />
            <span className="text-lg font-bold tracking-wide text-gray-700">
              課題
            </span>
          </div>
        </ChallengeBox>
        <DownArrow className="invisible opacity-0" />
        <ProposalBox>
          <div className="flex h-full items-center justify-center gap-2 pb-1">
            <CheckCircle className="h-5 w-5 stroke-[2.5] text-emerald-500" />
            <span className="text-lg font-bold tracking-wide text-emerald-500">
              ご提案
            </span>
          </div>
        </ProposalBox>
      </div>
    </div>
  );
}

type PhaseColumnProps = {
  title: string;
  challenge: React.ReactNode;
  proposalTitle: string;
  proposal: React.ReactNode;
};
const PhaseColumn = ({
  title,
  challenge,
  proposalTitle,
  proposal,
}: PhaseColumnProps) => (
  <div className="flex flex-1 flex-col gap-5 lg:max-w-[320px]">
    <PhaseHeader title={title} />
    <div className="space-y-5">
      <ChallengeBox text={challenge} />
      <DownArrow />
      <ProposalBox title={proposalTitle} text={proposal} />
    </div>
  </div>
);

type PhaseHeaderProps = {
  title: string;
};
const PhaseHeader = ({ title }: PhaseHeaderProps) => (
  <div className="flex w-full">
    <div className="flex-1 bg-emerald-500 px-5 py-3.5 text-center">
      <span className="text-xl font-bold tracking-wider text-white">
        {title}
      </span>
    </div>
    <div className="relative left-[-0.2px] hidden w-5 shrink-0 lg:block">
      <div
        className="absolute inset-0 left-0 h-full w-5 bg-emerald-500"
        style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
      />
    </div>
  </div>
);

const ChallengeBox = ({
  text,
  children,
}: {
  text?: React.ReactNode;
  children?: React.ReactNode;
}) => (
  <div className="rounded border border-gray-300 bg-white p-5 lg:h-44 xl:h-32">
    <MobileLabel type="challenge" text="課題" className="text-gray-700" />
    {text && <div className="text-base leading-7 text-gray-700">{text}</div>}
    {children}
  </div>
);

type ProposalBoxProps = {
  title?: string;
  text?: React.ReactNode;
  children?: React.ReactNode;
};
const ProposalBox = ({ title, text, children }: ProposalBoxProps) => (
  <div className="rounded border border-emerald-500 bg-white p-5 lg:h-40 xl:h-40">
    <MobileLabel type="proposal" text="ご提案" className="text-emerald-500" />
    {title && (
      <h5 className="mb-1 text-base font-bold tracking-wide text-gray-800 lg:text-emerald-500">
        {title}
      </h5>
    )}
    {text && <p className="text-base leading-7 text-gray-800">{text}</p>}
    {children}
  </div>
);

type MobileLabelProps = {
  type: "challenge" | "proposal";
  text: string;
  className?: string;
};
const MobileLabel = ({ type, text, className }: MobileLabelProps) => (
  <div className={cn("mb-2 flex items-center gap-2 lg:hidden", className)}>
    {type === "challenge" ? (
      <AlertCircle className="h-5 w-5 text-gray-700" />
    ) : (
      <CheckCircle className="h-5 w-5 text-emerald-500" />
    )}
    <span className="text-lg font-bold tracking-wide">{text}</span>
  </div>
);

const DownArrow = ({ className }: { className?: string }) => (
  <div className={cn("flex justify-center", className)}>
    <div className="relative h-5 w-14">
      <div
        className="absolute inset-0 bg-emerald-500"
        style={{ clipPath: "polygon(50% 0, 100% 0, 50% 100%, 0 0)" }}
      />
    </div>
  </div>
);
