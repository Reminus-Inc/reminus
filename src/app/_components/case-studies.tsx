"use client";

import { motion } from "motion/react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DownloadButton } from "@/app/_components/download-button";
import { ContactButton } from "@/app/_components/contact-button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const caseStudies = [
  {
    title: "社外CTOとして技術戦略リード・調達後の組織立ち上げ",
    industry: "FinTech",
    companySize: "シード",
    description: [
      "創業期は複雑な財務計算モデルの初期実装とアーキテクチャを担当。着実なMVP構築により、投資家からの信頼獲得に貢献。シードラウンドでの調達に成功。",
      "調達後は社外CTOとして経営層で経営戦略に沿った技術戦略を担当。エンジニアリング施策の統括、採用設計と開発組織立ち上げを牽引。",
      "事例記載時点でエンジニア数を2名から6名まで拡大しており、プロダクトのスケールを加速中。",
    ],
    services: ["社外CTO", "技術顧問"],
  },
  {
    title: "越境ECの全方位パフォーマンス改善で機会損失を最小化",
    industry: "越境EC",
    companySize: "シリーズA",
    description: [
      "速度低下による機会損失が事業課題となったECで、フロントエンドからインフラまでシステム全体を分析。CDNキャッシュやRemix実装、N+1とスロークエリ、Cloud Runなど全方位的に改善施策を立案。",
      "99%ileのレイテンシを10秒以上から3秒まで短縮して機会損失を大幅に抑える成果を出す。",
      "事業計画を踏まえた長期のパフォーマンス戦略策定も実施し、持続性のあるパフォーマンス改善を支援。",
    ],
    services: ["パフォーマンス", "オブザーバビリティ", "フロントエンド"],
  },
  {
    title: "CS特化SaaSの立ち上げを事業構想から推進",
    industry: "事業会社",
    companySize: "新規サービス立ち上げ",
    description: [
      "業界特化のナレッジベースSaaS立ち上げにおいて、技術顧問として、構想と競合調査、既存サービスとのクロスセル戦略、MVPロードマップ策定に伴走。",
      "全体アーキテクチャとSREingも担当し、LLMとRAGを絡めた非同期ナレッジ基盤の設計やIaCによるインフラ構築、運用設計を担当。",
      "Web側の立ち上げも一手に担い、Next.js App RouterのStreamingやParallel Routesを活用した先進的なWeb体験を実現。",
    ],
    services: ["技術顧問", "アーキテクト", "フロントエンド"],
  },
  {
    title: "オブザーバビリティでパフォーマンス課題を特定",
    industry: "アパレル",
    companySize: "シリーズB",
    description: [
      "トラフィック増に伴うコンピューティング資源がランウェイを圧迫。原因の推測が困難という課題があり、オブザーバビリティの技術顧問として参画。",
      "GoのWebとバッチへのOpenTelemetry計装とADOT含むインフラ構成、Honeycombの導入とイネーブルメントにより、ボトルネック特定を実現。",
      "チームとしてシステムおよび障害対応の安定化と30%のインフラコストの削減を達成。",
    ],
    services: ["オブザーバビリティ", "SREing"],
  },
];
export function CaseStudies() {
  return (
    <section
      className="py-24 md:py-36 flex justify-center bg-gradient-to-b from-white to-neutral-100"
      id="case-studies"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-16"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              事例紹介
            </h2>
          </div>
          {/* Desktop view */}
          <div className="hidden md:grid max-w-8xl mx-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
                    <ul className="list-disc pl-5 text-slate-600 text-base space-y-2">
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

          {/* Mobile carousel view */}
          <Carousel className="md:hidden w-[85%] max-w-sm mx-auto">
            <CarouselContent>
              {caseStudies.map((study, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="h-full">
                      <CardHeader className="space-y-2">
                        <CardTitle className="text-xl">{study.title}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">{study.industry}</Badge>
                          <Badge variant="outline">{study.companySize}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ul className="list-disc pl-5 text-slate-600 text-base space-y-2">
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
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <DownloadButton />
            <ContactButton />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
