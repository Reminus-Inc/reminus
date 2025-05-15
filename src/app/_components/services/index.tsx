"use client";

import {
  BarChart,
  CheckCircle,
  MapPin,
  Network,
  Zap,
  TrendingUp,
} from "lucide-react";
import { MotionDiv } from "@/app/_components/hero/cc";
import { ServiceCard } from "./card";
import { DownloadButton } from "@/app/_components/download-button";
import { ContactButton } from "@/app/_components/contact-button";
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
    title: "CTOパートナー",
    icon: MapPin,
    summary: "技術と経営をつなぎ、スタートアップの成長フェーズに合わせて柔軟に対応",
    description:
      "非エンジニア創業者向けのCTOパートナーサービスは、スタートアップの成長フェーズに合わせて柔軟に対応します。技術戦略の策定からエンジニア採用、組織構築まで、貴社の状況に応じた最適なサポートを提供します。",
    points: [
      {
        title: "創業期からスケール期まで一貫したサポート",
        description:
          "創業期の技術選定や採用戦略の相談から、成長期の組織拡大に伴う技術戦略の策定、スケール期の技術的負債の管理まで、各フェーズに応じた最適なサポートを提供します。",
      },
      {
        title: "経営と技術のコミュニケーションギャップを解消",
        description:
          "非エンジニア創業者が直面する技術的課題を解決し、経営と技術のコミュニケーションギャップを埋めます。技術的な意思決定の精度と速度を向上させ、事業成長を加速します。",
      },
      {
        title: "柔軟な関わり方で貴社に最適なサポートを提供",
        description:
          "週次の定例ミーティングからSlackでの日常的な相談、プロジェクト進行の伴走まで、貴社の状況や課題に応じて柔軟に対応します。技術戦略の策定から採用、組織構築まで包括的にサポートします。",
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
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "service_list_click", {
        event_category: "engagement",
        event_label: "service_list",
      });
    }
  };

  return (
    <div className="w-full py-12 bg-gray-50 flex justify-center" id="services">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-20">
          その他の提供サービス
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

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <DownloadButton />
          <ContactButton />
        </div>
      </div>
    </div>
  );
}
