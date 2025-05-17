"use client";

import { CheckCircle, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ServicePlans() {
  return (
    <section id="plans" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            成長フェーズに合わせた<span className="text-emerald-600">3つのプラン</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          技術・採用・組織の観点から、貴社の成長を伴走支援します。<br className="hidden md:block"  />課題に沿って必要な領域にフォーカスし、成長の障壁を取り除きます。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-emerald-300 transition-all flex flex-col">
            <CardHeader className="text-center border-b pb-6">
              <CardTitle className="text-2xl text-emerald-600">Starterプラン</CardTitle>
              <CardDescription className="text-lg mt-2">技術と採用の定期的な相談</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 flex-grow pb-20">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p>技術方針の壁打ち・レビュー</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p>スカウト文面や選考内容の定期相談</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p>日々の技術・採用課題への定期相談</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-emerald-600 shadow-lg relative hover:shadow-xl transition-all flex flex-col">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              おすすめ
            </div>
            <CardHeader className="text-center border-b pb-6">
              <CardTitle className="text-2xl text-emerald-600">Earlyプラン</CardTitle>
              <CardDescription className="text-lg mt-2">経営に技術を持ち込む</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 flex-grow pb-20">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p>技術戦略の立案と製品戦略との接続設計</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p>採用戦略やプロセス、チャネル、JD設計</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p>組織体制と職能の設計、開発プロセス設計</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p>戦略レイヤの意思決定支援</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-emerald-300 transition-all flex flex-col">
            <CardHeader className="text-center border-b pb-6">
              <CardTitle className="text-2xl text-emerald-600">Growthプラン</CardTitle>
              <CardDescription className="text-lg mt-2">戦略を執行に落とし込む</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 flex-grow pb-20">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p>技術施策の運用支援と進捗管理</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p>採用活動の継続改善とPDCA管理</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p>マネジメントの実行支援と改善推進</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p>会議体の設計と必要に応じたファシリ</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p>開発組織全体の運営と組織間連携の支援</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}