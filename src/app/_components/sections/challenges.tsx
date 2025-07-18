"use client";

import { AlertTriangle } from "lucide-react";

export function Challenges() {
  return (
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-8 md:mb-12">
            こんな課題を抱えていませんか？
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="flex items-start gap-3 text-left">
              <AlertTriangle className="h-5 w-5 text-red-500 mt-1 shrink-0" />
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                適切なエンジニア／CTOが採用できず、開発が停滞している
              </p>
            </div>
            <div className="flex items-start gap-3 text-left">
              <AlertTriangle className="h-5 w-5 text-red-500 mt-1 shrink-0" />
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                言語・クラウド・アーキテクチャなど技術選定の判断材料が足りない
              </p>
            </div>
            <div className="flex items-start gap-3 text-left">
              <AlertTriangle className="h-5 w-5 text-red-500 mt-1 shrink-0" />
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                技術負債が膨らみ、リリース速度と品質が低下している
              </p>
            </div>
            <div className="flex items-start gap-3 text-left">
              <AlertTriangle className="h-5 w-5 text-red-500 mt-1 shrink-0" />
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                プロダクト志向の組織文化や評価制度をどう作ればいいかわからない
              </p>
            </div>
            <div className="flex items-start gap-3 text-left">
              <AlertTriangle className="h-5 w-5 text-red-500 mt-1 shrink-0" />
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                投資家・取引先に技術計画を説明できず、信頼を得にくい
              </p>
            </div>
            <div className="flex items-start gap-3 text-left">
              <AlertTriangle className="h-5 w-5 text-red-500 mt-1 shrink-0" />
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                経営とエンジニアリングを橋渡しする&ldquo;技術ブレーン&rdquo;が社内にいない
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-emerald-600">
              その課題、ReminusのCTOパートナーが解決します。
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}