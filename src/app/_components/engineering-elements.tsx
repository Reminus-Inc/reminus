"use client";

import { Code, Users, Briefcase } from "lucide-react";

export function EngineeringElements() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            3つの<span className="text-emerald-600">エンジニアリング要素</span>を補完
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reminus CTOパートナーは、すべてのSaaSスタートアップに必要となる<br className="hidden md:block" />技術戦略、エンジニア採用、組織開発の3要素をサポートします。
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* 技術戦略 */}
          <div className="mb-8 bg-emerald-50 lg:bg-gradient-to-r lg:from-emerald-50 lg:to-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 p-8 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Code className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">技術戦略</h3>
                <div className="text-sm text-emerald-700 font-medium mt-2 bg-emerald-100 px-3 py-1 rounded-full">
                  Starter / Early / Growth
                </div>
              </div>
              <div className="p-8 md:w-2/3 md:border-l border-emerald-100 bg-white flex items-center">
                <p className="text-gray-600 text-lg">
                  <strong>技術は、戦略を広げ、実行を支え、事業の可能性を拡張します。</strong>
                  <span className="block mt-2">
                  開発初期の壁打ちから、プロダクトや市場戦略に沿った技術の意思決定、技術施策の運用やロードマップ策定伴走まで、プランに応じて支援します。
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* エンジニア採用 */}
          <div className="mb-8 bg-emerald-50 lg:bg-gradient-to-r lg:from-emerald-50 lg:to-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 p-8 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">エンジニア採用</h3>
                <div className="text-sm text-emerald-700 font-medium mt-2 bg-emerald-100 px-3 py-1 rounded-full">
                  Starter / Early / Growth
                </div>
              </div>
              <div className="p-8 md:w-2/3 md:border-l border-emerald-100 bg-white flex items-center">
                <p className="text-gray-600 text-lg">
                  <strong>「いい人がいない」は、採り方が設計されていないだけかもしれません。</strong>
                  <span className="block mt-2">
                  スカウトや選考の定期相談から、採用戦略・プロセス設計、優先度判断、スカウト伴走や実行推進まで、組織コンディションに応じて支援します。
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* 組織開発 */}
          <div className="mb-8 bg-emerald-50 md:bg-gradient-to-r md:from-emerald-50 md:to-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 p-8 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">組織開発</h3>
                <div className="text-sm text-emerald-700 font-medium mt-2 bg-emerald-100 px-3 py-1 rounded-full">
                  Early / Growth
                </div>
              </div>
              <div className="p-8 md:w-2/3 md:border-l border-emerald-100 bg-white flex items-center">
                <p className="text-gray-600 text-lg">
                  <strong>組織の設計と開発マネジメントが、"バットを振れる回数"を増やします。</strong>
                  <span className="block mt-2">
                    組織構造や職能の設計、開発プロセスやカルチャーの整備、マネジメント施策の運用や実行伴走まで、プランに応じて支援します。
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}