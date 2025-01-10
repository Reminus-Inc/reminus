"use client";

import { motion } from "framer-motion";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartContainer } from "@/components/ui/chart";
import { Users } from "lucide-react";
import { MotionDiv } from "./hero/cc";

const serviceData = [
  {
    name: "CTO・VPoE・EM",
    count: 2,
  },
  {
    name: "VPoT\nフロントアーキ",
    count: 3,
  },
  {
    name: "SREing\nオブザーバビリティ\nパフォーマンス改善",
    count: 2,
  },
  {
    name: "自動テスト・QAE",
    count: 1,
  },
];

const totalClients = serviceData.reduce((acc, curr) => acc + curr.count, 0);

const caseStudies = [
  {
    title: "創業期のコア機能リード〜調達後は社外CTOとして技術戦略牽引",
    industry: "FinTech",
    companySize: "シード",
    description: [
      "創業期、複雑な財務計算モデルのロジックを実装できる人材が欠けており、技術顧問として参画。ドメインレイヤのコアのみを集中的に担当。加えて、複雑な機能のアーキテクチャアドバイザリを担当。",
      "着実なMVP構築により、投資家からの信頼獲得に貢献。シードラウンドでの調達に成功。",
      "調達後は社外CTOとして経営層で経営戦略に沿った技術戦略を担当。エンジニアリング施策の統括、採用設計と開発組織立ち上げを牽引。",
      "事例記載時点でエンジニア数を2名から6名まで拡大しており、プロダクトのスケールを加速中。",
    ],
    services: ["社外CTO", "VPoE", "EM", "VPoT"],
  },
  {
    title: "越境ECの全方位パフォーマンス改善で機会損失を最小化",
    industry: "越境EC",
    companySize: "シリーズA",
    description: [
      "速度低下による機会損失が事業課題となったECで、フロントエンドからインフラまでシステム全体を分析。CDNキャッシュやRemix実装、N+1とスロークエリ、Cloud Runなど全方位的に改善施策を立案。",
      "99%ileのレイテンシを10秒以上から3秒まで短縮して機会損失を大幅に抑えつつ、さらにインフラコストは20%削減を達成。",
      "加えて、Sentryの計装改善とアプリメトリクス導入によるパフォーマンス改善基盤を構築。",
      "事業計画を踏まえた長期のパフォーマンス戦略策定も実施し、持続性のあるパフォーマンス改善を実現。"
  ], 
    services: ["パフォーマンスチューニング", "SREing", "オブザーバビリティ", "フロントエンドアーキテクト"],
  },
  {
    title: "業界特化型ナレッジベースSaaSの立ち上げを一手に担い推進",
    industry: "事業会社",
    companySize: "新規サービス立ち上げ",
    description: [
    "業界特化のナレッジベースSaaS立ち上げにおいて、技術とビジネス双方に精通する人材が不足しており、当初は技術顧問として参画。構想と競合調査、既存サービスとのクロスセル方針、MVPロードマップを一手に策定。",
    "既存サービスに対する後方互換性のある移行計画により、スムースなMVP構築進行を実現。",
    "全体アーキテクチャとSREingも担当し、LLMとRAGを絡めた非同期ナレッジ基盤の設計やIaCによるインフラ構築、運用設計を担当。",
    "Web側の立ち上げも一手に担い、Next.js App RouterのStreamingやParallel Routesを活用した先進的なWeb体験を実現。",
    ],
    services: ["VPoT", "EM", "SREing", "フロントエンドアーキテクト"],
  },
  {
    "title": "オブザーバビリティでパフォーマンス課題特定と障害対応安定化を実現",
    "industry": "アパレル",
    "companySize": "シリーズB",
    "description": [
      "トラフィック増に伴うコンピューティングとストレージコストがランウェイを圧迫。創業メンバの離任もあって原因の推測も困難という課題があり、オブザーバビリティの技術顧問として参画。",
      "GoのWebとバッチへのOpenTelemetry計装とADOT含むインフラ構成を行い、X-Rayでトレースの可視化を実現。",
      "その後、ADOT経由でHoneycombへの移行とイネーブルメントを実施。トレースの多集計により多角的なカットでボトルネックを特定し、インフラ構成改善のアドバイザリを実施。",
      "システムおよび障害対応の安定化とインフラコストの削減に寄与。",
    ],
    "services": [
      "オブザーバビリティ",
      "SREing",
    ]
  }
];


const CHART_COLORS = [
  "rgb(38, 38, 38)",
  "rgb(82, 82, 82)",
  "rgb(115, 115, 115)",
  "rgb(163, 163, 163)",
] as const;

export function CaseStudies() {
  return (
    <section className="py-24 md:py-36 bg-neutral-50 flex justify-center">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-16"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              支援事例
            </h2>
          </div>

          {/* Stats Section */}
          <div className="mx-auto">
            <div className="flex flex-col lg:flex-row lg:justify-center gap-8 items-center lg:h-[300px]">
              {/* Chart - Larger Width */}
              <div className="h-full w-full lg:max-w-3xl order-2 ld:order-1 h-[300px]">
                <ChartContainer
                  config={{
                    count: {
                      label: "件数",
                    },
                  }}
                  className="w-full lg:max-w-3xl h-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={serviceData}
                      layout="vertical"
                    >
                      <XAxis type="number" domain={[0, "dataMax"]} hide />
                      <YAxis
                        dataKey="name"
                        type="category"
                        tickLine={false}
                        axisLine={false}
                        width={130}
                        interval={0}
                        tick={{ fill: "rgb(115, 115, 115)" }}
                        className="text-xs md:text-md"
                      />
                      <Bar
                        dataKey="count"
                        radius={[4, 4, 4, 4]}
                        label={{
                          position: "insideRight",
                          
            
                          formatter: (value: number) => `${value}件　`,
                          fontSize: 14,
                          fill: "rgb(255, 255, 255)",
                        }}
                      >
                        {serviceData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={CHART_COLORS[index]}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>

              {/* Total Clients - Smaller Width */}
              <MotionDiv 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center lg:text-left order1 lg:order-2 lg:flex lg:items-end lg:h-full">
                <div className="space-y-2 lg:mb-10">
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-neutral-600">
                    <Users className="w-5 h-5" />
                    <span className="text-sm tracking-wide">累計支援社数</span>
                  </div>
                  <p className="text-neutral-800">
                    <span className="text-4xl font-bold">{totalClients}</span><span className="text-xl ml-1">社</span>
                  </p>
                </div>
              </MotionDiv>
            </div>
          </div>

          <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full md:p-2 xl:p-0">
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{study.industry}</Badge>
                      <Badge variant="outline">{study.companySize}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                  <ul className="list-disc pl-5 text-slate-600 text-sm space-y-2">
            {study.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
                    <div className="flex flex-wrap gap-2">
                      {study.services.map((service) => (
                        <Badge key={service} variant="secondary">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
