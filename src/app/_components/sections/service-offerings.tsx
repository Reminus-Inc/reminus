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
import { ReactNode } from "react";
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
        <div className="h-full cursor-pointer rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-4">
            {React.createElement(service.icon, {
              className: "h-10 w-10 text-black",
            })}
          </div>
          <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
          <p className="mb-4 text-gray-600">{service.description}</p>
          <div className="group flex items-center font-medium text-black">
            <span>詳しく見る</span>
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </DialogTrigger>

      <DialogContent
        className="h-[95dvh] max-w-[95vw] border-0 p-0 md:h-[90dvh]"
        autoFocus={false}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogTitle className="hidden" />
        <div className="flex min-h-[160px] items-center bg-gradient-to-b from-neutral-800 to-black">
          <div className="mx-auto w-full max-w-6xl px-8 py-6 sm:py-8 md:py-12">
            <div className="flex items-start gap-6">
              {React.createElement(service.icon, {
                className: "w-14 h-14 shrink-0 text-white",
              })}
              <div>
                <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl md:text-3xl">
                  {service.titleDialog ? service.titleDialog : service.title}
                </h2>
                <p className="text-base text-neutral-200 sm:text-lg md:text-xl">
                  {service.summary}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto bg-white">
          <div className="mx-auto w-full max-w-6xl px-8 py-6 sm:py-8 md:py-12">
            <p className="mb-6 text-sm sm:mb-8 sm:text-lg md:mb-12 md:text-xl">
              {service.description}
            </p>

            <div className="space-y-6 sm:space-y-8 md:space-y-12">
              {service.points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5"
                >
                  <Check className="h-7 w-7 shrink-0 text-primary md:mt-1" />
                  <div>
                    <h4 className="mb-3 text-lg font-bold sm:text-xl md:text-2xl">
                      {point.title}
                    </h4>
                    <p className="text-sm text-muted-foreground sm:text-lg md:text-xl">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <DialogClose asChild className="">
          <X className="absolute right-6 top-6 h-10 w-10 shrink-0 cursor-pointer rounded-full p-2.5 text-white transition-colors hover:bg-white/10" />
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

//
// export function ServiceOfferings() {
//   const handleServiceListClick = () => {
//     if (typeof window !== "undefined" && window.gtag) {
//       window.gtag("event", "service_list_click", {
//         event_category: "engagement",
//         event_label: "service_list",
//       });
//     }
//   };
//
//   return (
//     <Section className="bg-gray-50" id="services">
//       <MainHeading>その他の提供サービス</MainHeading>
//       {/* Desktop view */}
//       <div
//         className="mb-16 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3"
//         onClick={handleServiceListClick}
//       >
//         {services.map((service, i) => (
//           <div key={i} className="h-full">
//             <ServiceCard service={service} />
//           </div>
//         ))}
//       </div>
//
//       <div className="bleed mb-16 md:hidden" onClick={handleServiceListClick}>
//         <Carousel
//           opts={{ align: "start" }}
//           items={services.map((service, i) => (
//             <ServiceCard key={i} service={service} />
//           ))}
//         />
//       </div>
//
//       <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
//         <DownloadButton asLink={true} />
//         <ContactButton />
//       </div>
//     </Section>
//   );
// }
