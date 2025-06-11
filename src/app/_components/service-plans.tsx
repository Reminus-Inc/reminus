"use client";

import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { DownloadButton } from "./download-button";

export function ServicePlans() {
  return (
    <section id="plans" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            成長フェーズに合わせた<span className="text-emerald-600"><br className="md:hidden" />3つのプラン</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          技術・採用・組織の観点から、貴社の成長を伴走支援します。<br className="hidden md:block"  />課題に沿って必要な領域にフォーカスし、成長の障壁を取り除きます。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-2 flex flex-col">
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
                  <p>スカウト文面やJD内容の定期相談</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p>日々の技術・採用課題への定期相談</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-emerald-600 shadow-lg relative flex flex-col">
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
                  <p>採用戦略やプロセス設計、人材優先度判断</p>
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

          <Card className="border-2 flex flex-col">
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
                  <p>採用活動推進、スカウト伴走や広報支援</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p>マネジメントの実行支援と改善推進</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p>会議体の設計とファシテーション</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p>開発組織全体の運営と組織間連携の支援</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0" />
                <p className="text-base md:text-lg text-gray-700">
                  料金と事例を資料でご用意しております。
                </p>
              </div>
              <DownloadButton variant="primary" iconPosition="left">
                資料ダウンロード
              </DownloadButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}