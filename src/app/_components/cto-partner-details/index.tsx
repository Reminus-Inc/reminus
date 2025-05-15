"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { DownloadButton } from "@/app/_components/download-button";
import { ContactButton } from "@/app/_components/contact-button";

const plans = [
  {
    name: "Starter",
    description: "技術と採用のアドバイザリ。現場含めた技術・採用課題への壁打ちやレビュー",
    forPhase: "創業期",
    features: [
      "技術的な方向性の壁打ちやレビュー",
      "スカウト文面や訴求方法の定期相談",
      "週1回45分の定期相談と月2回程度のスポットミーティング"
    ]
  },
  {
    name: "Early",
    description: "経営に技術を持ち込む。戦略の意思決定加速と精度向上",
    forPhase: "MVP後〜探索期",
    features: [
      "技術戦略の立案と製品戦略の壁打ち",
      "組織体制設計と職能設計",
      "採用戦略とプロセスの設計",
      "週1回1時間の定例とSlack Connectによる継続的なサポート"
    ]
  },
  {
    name: "Growth",
    description: "戦略起点の執行伴走。技術・組織・採用全体の統括と推進",
    forPhase: "PMF・グロース期",
    features: [
      "技術施策の運用と進捗管理",
      "マネジメント施策の運用管理",
      "採用PDCA管理と推進",
      "週1回1時間の定例と週4時間程度の施策運用や進捗管理"
    ]
  }
];

export function CTOPartnerDetails() {
  return (
    <section className="py-16 md:py-24 bg-white" id="cto-partner">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              CTOパートナーサービス
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              非エンジニア創業者のスタートアップフェーズに合わせた3つのプラン
            </p>
          </div>

          {/* Value Proposition */}
          <div className="bg-gray-50 rounded-xl p-8 md:p-10"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  経営と技術をつなぐ<br />CTOパートナー
                </h3>
                <p className="text-gray-600">
                  非エンジニア創業者が直面する技術的課題を解決し、事業成長を加速させます。
                  技術戦略の策定から採用、組織構築まで、スタートアップの成長フェーズに合わせた
                  包括的なサポートを提供します。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <DownloadButton />
                  <ContactButton />
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-lg mb-4 text-gray-800">CTOパートナーが解決する課題</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">技術選定や開発ロードマップの不確実性</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">エンジニア採用と組織構築の難しさ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">経営と技術のコミュニケーションギャップ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">技術的負債の蓄積と将来的なスケーラビリティ</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline Process */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-center mb-12">スタートアップの成長フェーズに合わせた3つのプラン</h3>
            
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>
            
            <div className="space-y-16 md:space-y-0 relative">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Number Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`bg-white rounded-xl shadow-md p-6 md:p-8 md:w-5/6 ${
                    index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  }`}>
                    <div className="bg-blue-50 text-blue-600 text-sm font-medium px-3 py-1 rounded-full inline-block mb-2">
                      {plan.forPhase}向け
                    </div>
                    <h4 className="text-xl font-bold mb-2">{plan.name}プラン</h4>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Plan Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
              >
                <div className="p-6">
                  <div className="bg-blue-50 text-blue-600 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                    {plan.forPhase}向け
                  </div>
                  <h3 className="text-xl font-bold mb-2">{plan.name}プラン</h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="bg-green-100 text-green-600 p-1 rounded-full mt-1">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 border-t border-gray-200">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-gray-300 hover:bg-gray-100"
                  >
                    <a href="#contact" className="flex items-center justify-center gap-2">
                      <span>詳細を問い合わせる</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <p className="text-gray-600 mb-6">
              各プランの詳細や料金については、お気軽にお問い合わせください。
              <br />
              貴社の状況に合わせたカスタマイズも可能です。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <DownloadButton />
              <ContactButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
