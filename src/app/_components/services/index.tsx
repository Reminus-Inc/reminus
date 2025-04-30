"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Users,
  Layout,
  Cpu,
  BarChart,
  CheckCircle,
  MapPin,
  Network,
  Zap,
  DollarSign,
  TrendingUp,
  Handshake,
} from "lucide-react";
import { MotionDiv } from "@/app/_components/hero/cc";
import { ServiceCard } from "./card";
import { ReactNode } from "react";

export type Service = {
  title: string;
  titleDialog?: ReactNode;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  summary: string;
  description: string;
  points: { title: string; description: string }[];
};

const services: Service[] = [
  {
    title: "社外CTO",
    icon: MapPin,
    summary: "経営とエンジニアリングを結びつけ、持続的な事業成長を可能にする",
    description:
      "技術戦略の策定、開発ロードマップの作成、エンジニアリング施策の推進を通じて、経営者が抱える技術的課題を解決します。",
    points: [
      {
        title: "技術戦略の策定",
        description:
          "採用技術をどこかで大きく見直さないといけないかもしれない、という不安はありませんか？事業戦略に基づいた技術戦略とその実現ロードマップを策定し、長期的な技術選定を支援します。",
      },
      {
        title: "開発ロードマップの策定",
        description:
          "開発効率と実現性を両立するには、経営視点とエンジニアリング視点の高度な融合が必要です。事業計画とソフトウェア特性を踏まえ、開発順序とスケジュールを明確化します。",
      },
      {
        title: "経営視点のリスク管理・エンジニアリング施策推進",
        description:
          "持続的な成長には、事業状況に応じたリスク検知や技術戦略と現状のギャップ把握、さらにそれを埋める施策の実行が重要です。技術戦略と現状を繋ぎ、施策の管理と推進を行います。",
      },
    ],
  },
  {
    title: "アーキテクト",
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
    title: "フロントエンド",
    titleDialog: (
      <>
        フロントエンド
      </>
    ),
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
    title: "自動テストエンジニア",
    titleDialog: (
      <>
        自動テスト
        <br className="sm:hidden" />
        エンジニア
      </>
    ),
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

export function Services() {
  const handleServiceListClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'service_list_click', {
        'event_category': 'engagement',
        'event_label': 'service_list'
      });
    }
  };

  return (
    <div
      className="container px-4 md:px-6 relative py-24 md:py-36"
      id="services"
    >
      <h2 className="text-3xl font-bold tracking-tighter text-center mb-20">
        提供サービス
      </h2>
      <MotionDiv
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
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
    </div>
  );
}
