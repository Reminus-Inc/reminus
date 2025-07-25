"use client";

import { ArrowRight, Check, X } from "lucide-react";
import {
  BarChart,
  CheckCircle,
  Network,
  Zap,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MotionDiv } from "@/app/_components/ui/motion-div";
import { DownloadButton } from "@/app/_components/ui/download-button";
import { ContactButton } from "@/app/_components/ui/contact-button";
import { ReactNode } from "react";
import { Carousel } from "@/components/ui/carousel";
import React from "react";

export type Service = {
  title: string;
  titleDialog?: ReactNode;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  summary: string;
  description: string;
  points: { title: string; description: string }[];
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full cursor-pointer">
          <div className="mb-4">
            {React.createElement(service.icon, {
              className: "h-10 w-10 text-black",
            })}
          </div>
          <h3 className="text-xl font-bold mb-3">{service.title}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <div className="flex items-center text-black font-medium group">
            <span>詳しく見る</span>
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </DialogTrigger>

      <DialogContent
        className="max-w-[95vw] h-[95dvh] md:h-[90dvh] p-0 border-0"
        autoFocus={false}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogTitle className="hidden" />
        <div className="min-h-[160px] bg-gradient-to-b from-neutral-800 to-black flex items-center">
          <div className="w-full max-w-6xl mx-auto px-8 py-6 sm:py-8 md:py-12">
            <div className="flex items-start gap-6">
              {React.createElement(service.icon, {
                className: "w-14 h-14 shrink-0 text-white",
              })}
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-white">
                  {service.titleDialog ? service.titleDialog : service.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-neutral-200">
                  {service.summary}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-auto flex-1">
          <div className="w-full max-w-6xl mx-auto px-8 py-6 sm:py-8 md:py-12">
            <p className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-12">
              {service.description}
            </p>

            <div className="space-y-6 sm:space-y-8 md:space-y-12">
              {service.points.map((point, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-5 items-start"
                >
                  <Check className="w-7 h-7 text-primary md:mt-1 shrink-0" />
                  <div>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
                      {point.title}
                    </h4>
                    <p className="text-sm sm:text-lg md:text-xl text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>

        <DialogClose asChild className="">
          <X className="absolute right-6 top-6 p-2.5 rounded-full hover:bg-white/10 transition-colors w-10 h-10 text-white shrink-0 cursor-pointer" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

const services: Service[] = [
  {
    title: "VPoT",
    icon: Network,
    summary:
      "短期的なロードマップ達成と将来のスケーラビリティを両立するアーキテクチャ設計",
    description:
      "個別の開発アイテムにおける技術リスクや想定負荷を見積もり、最適なアーキテクチャを設計します。高難易度の開発をリードし、短期的な成果と長期的な成長を両立します。",
    points: [
      {
        title: "長期視点のアーキテクチャ設計",
        description:
          "技術的な想定不足でせっかく作った機能が作り直しになるといった経験はありませんか？将来の事業拡大や負荷を見据えた設計で、開発持続性を実現します。",
      },
      {
        title: "安定した品質のアーキテクチャ",
        description:
          "複雑な機能も壊れにくく、安定した動作を実現します。的確な設計により、頻繁な改修にも耐えうるメンテナンス性の高い基盤を構築します。",
      },
      {
        title: "高難易度の開発をリード",
        description:
          "技術とビジネスの双方に精通したVPoTが人を巻き込んでリードし、複雑なプロジェクトでも確実に前進させます。課題を解決しながら短期的な成果と長期的な成長を両立します。",
      },
    ],
  },
  {
    title: "エンジニアリングマネージャ",
    icon: Users,
    summary: "組織をエンジニアリングに最適化し、なめらかなプロダクト開発を実現",
    description:
      "エンジニアリング組織のあり方に漠然とした不安はありませんか？貴社に最適なエンジニアリング文化を共に策定し、開発プロセスや採用戦略を通じて実現を支援します。",
    points: [
      {
        title: "エンジニアリング文化の醸成",
        description:
          "プロダクトを成長させられるエンジニアリング組織には共通の特徴があります。貴社のフェーズやメンバの特性に応じてそうしたエッセンスを導入し、組織独自のエンジニアリング文化を形成します。",
      },
      {
        title: "開発生産性の向上",
        description:
          "リソースを効果的に活用し出来高を最大化するには、技術とマネジメントの両方の視点が重要です。組織設計、開発プロセスの改善、コミュニケーション改善を通じて、開発生産性を最大化します。",
      },
      {
        title: "エンジニア採用強化",
        description:
          "優れたエンジニアに訴求し、また自社へのマッチ度を測るには、同等に優れたエンジニアの感性が必要です。組織状況やフェーズに応じた採用戦略とプロセスを設計し、組織拡大を支援します。",
      },
    ],
  },
  {
    title: "フロントエンド",
    titleDialog: <>フロントエンド</>,
    icon: Zap,
    summary:
      "売上や顧客満足度とコスト効率につながり、ブランド価値を高める最先端のUI/UX",
    description:
      "Next.jsやCDNなどの最先端の技術や設計手法を駆使して高速かつ直感的なユーザー体験を実現し、売上や顧客満足度につながるWebフロントエンドを実現します。",
    points: [
      {
        title: "パフォーマンスの最適化",
        description:
          "現状のソフトウェアアーキテクチャと売上や満足度につながる導線を踏まえ、インパクトが大きく費用対効果の高い施策を立案・実行。コンバージョン率の向上とブランド価値の向上を支援します。",
      },
      {
        title: "スケーラビリティを実現するフロントエンドアーキテクチャ",
        description:
          "データ取得やアセットのキャッシュにより、高速なユーザー体験の提供に加え、ランニングコスト削減も実現。トラフィック急増にも耐えられるスケーラブルなアーキテクチャを構築し、事業成長を支えます。",
      },
      {
        title: "Developer Experienceの向上",
        description:
          "先進的なフロントエンドアーキテクチャは、効率的で快適な開発環境を提供。フロントエンドエンジニアへの採用訴求力やエンゲージメント向上にもつながります。",
      },
    ],
  },
  {
    title: "SREing/オブザーバビリティ",
    titleDialog: (
      <>
        SREing/
        <br className="sm:hidden" />
        オブザーバビリティ
      </>
    ),
    icon: BarChart,
    summary:
      "障害検知力・障害対応力・システム信頼性を強化し、持続可能なシステム運用を支える",
    description:
      "OpenTelemetryやDatadogなどの技術活用による再現性のある運用基盤と、運用設計によるオペレーション改善の両面からシステムの信頼性を高め、機会損失を最小化します。",
    points: [
      {
        title: "オブザーバビリティの導入と活用",
        description:
          "システム性能や障害復旧に再現性を持たせるためには計測と可視化が不可欠です。計測の導入と利活用により、障害対応の民主化、パフォーマンス検証、ユーザー行動の可視化など、多様な効果を実現します。",
      },
      {
        title: "信頼性を高めるためのオペレーション設計",
        description:
          "障害の検知や対応が遅れたり、対応品質がばらつく課題はありませんか？モニタリングの構築やインシデント対応プロセスの標準化により、信頼性を向上し、ダウンタイムによる機会損失を最小化します。",
      },
      {
        title: "インフラ構築とコスト管理、システム運用の強化",
        description:
          "IaCを用いたインフラ管理や設計改善により、スケーラブルな基盤を構築し、リソースの最適化を通じたコスト削減を実現します。また、メトリクスを活用してシステムの課題を早期に発見し、対策を推進します。",
      },
    ],
  },
  {
    title: "パフォーマンスチューニング",
    titleDialog: (
      <>
        パフォーマンス
        <br className="sm:hidden" />
        チューニング
      </>
    ),
    icon: TrendingUp,
    summary: "売上・顧客満足度向上とコスト削減・利益率UPを同時に実現する",
    description:
      "表示速度低下やエラーによる機会損失、アクセス増によるコストに悩んでいませんか？事業状況に応じて短期の改善から長期戦略まで、システム全体を俯瞰して提案します。",
    points: [
      {
        title: "システム全体を踏まえた短期的なパフォーマンス改善",
        description:
          "パフォーマンスチューニングにより短期で売上や顧客満足度を向上するためには、全体最適が重要です。システム全体の現状を理解して費用対効果の高い施策を同時並行で実行していくことで、短期間でも目に見える成果を出します。",
      },
      {
        title: "事業計画を踏まえた長期的なパフォーマンス最適化",
        description:
          "将来の事業展開に備えた構成変更や抜本的な設計課題の改善には大きな工数とリードタイムが必要です。理想的なアーキテクチャを目指し、事業計画に沿った長期的な戦略と実現のロードマップを策定します。",
      },
      {
        title: "パフォーマンス改善でコスト効率も向上",
        description:
          "パフォーマンス向上にはお金がかかると思っていませんか？実は、優れたパフォーマンス改善はシステムの効率を大幅に向上し、むしろコストを削減します。売上向上とコスト効率の二兎を両立し、事業のスケールにも耐えられるようにします。",
      },
    ],
  },
  {
    title: "自動テスト",
    titleDialog: <>自動テスト</>,
    icon: CheckCircle,
    summary: "自動テストで事業成長速度と開発持続性を支える",
    description:
      "長期的な開発生産性と内部品質には自動テストが不可欠です。システムとドメインを踏まえて自動テストを導入し、事業成長を支えるコードベースとテスト基盤を構築します。",
    points: [
      {
        title: "自動テストロードマップの策定",
        description:
          "どこから始めれば良いかわからない、という課題は多くのチームが抱えています。システム全体の状況と事業目標を踏まえた優先順位を設定し、実行可能なロードマップを策定。導入から運用までを支援します。",
      },
      {
        title: "高度な技術課題までワンストップで対応",
        description:
          "エンジニアとの連携や技術的な課題の複雑さに直面していませんか？ソフトウェアエンジニアリングをバックボーンとし単騎で開発までこなせるSETが旗を振るため、スムーズなプロジェクト進行が実現します。",
      },
      {
        title: "組織やエンジニアリングプロセスの課題を自動テストで解決する",
        description:
          "品質課題の多くは人やプロセスに起因します。チーム間の連携やシステムとチームの関係性、QAプロセスを見直しながら自動テストによるShift-Leftを進めることで、組織全体の品質向上と生産性向上を両立します。",
      },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
} as const;

export function ServiceOfferings() {
  const handleServiceListClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "service_list_click", {
        event_category: "engagement",
        event_label: "service_list",
      });
    }
  };

  return (
    <div className="w-full py-16 bg-gray-50 flex justify-center" id="services">
      <div className="container px-4 md:px-6 max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-20">
          その他の提供サービス
        </h2>
        {/* Desktop view */}
        <MotionDiv
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          onClick={handleServiceListClick}
        >
          {services.map((service, i) => (
            <MotionDiv key={i} variants={item}>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
              >
                <ServiceCard service={service} />
              </MotionDiv>
            </MotionDiv>
          ))}
        </MotionDiv>

        <div className="md:hidden mb-16 bleed" onClick={handleServiceListClick}>
          <Carousel
            opts={{ align: "start" }}
            items={services.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <DownloadButton />
          <ContactButton />
        </div>
      </div>
    </div>
  );
}
