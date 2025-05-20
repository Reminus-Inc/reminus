"use client";

import { DownloadButton } from "./download-button";

export function EngagementStyle() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            プランに応じた<span className="text-emerald-600">関わり方</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            プランに応じて、より密接な関わり方で伴走支援します。上位プランではより包括的なサポートが可能になります。
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="grid grid-cols-12 gap-4 items-start">
                <div className="col-span-1">
                  <div className="bg-emerald-100 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-emerald-700 font-bold">1</span>
                  </div>
                </div>
                <div className="col-span-4">
                  <h3 className="text-lg font-semibold text-emerald-700">定期ミーティング</h3>
                </div>
                <div className="col-span-7">
                  <p className="text-gray-700">
                    週1回45分〜1時間の定期ミーティングを実施します。すべてのプランで提供されます。
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="grid grid-cols-12 gap-4 items-start">
                <div className="col-span-1">
                  <div className="bg-emerald-100 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-emerald-700 font-bold">2</span>
                  </div>
                </div>
                <div className="col-span-4">
                  <h3 className="text-lg font-semibold text-emerald-700">スポットミーティング</h3>
                </div>
                <div className="col-span-7">
                  <p className="text-gray-700">
                    月に2〜3回程度、必要に応じて追加のミーティングを設定できます。すべてのプランで提供されます。
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="grid grid-cols-12 gap-4 items-start">
                <div className="col-span-1">
                  <div className="bg-emerald-100 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-emerald-700 font-bold">3</span>
                  </div>
                </div>
                <div className="col-span-4">
                  <h3 className="text-lg font-semibold text-emerald-700">技術・採用相談</h3>
                </div>
                <div className="col-span-7">
                  <p className="text-gray-700">
                    技術的な方向性の壁打ちやレビュー、採用に関する相談など、日々の課題に対するアドバイスを提供します。
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="grid grid-cols-12 gap-4 items-start">
                <div className="col-span-1">
                  <div className="bg-emerald-200 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-emerald-700 font-bold">4</span>
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold text-emerald-700">戦略・設計レビュー</h3>
                    <span className="ml-2 bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap">
                      Early以上
                    </span>
                  </div>
                </div>
                <div className="col-span-7">
                  <p className="text-gray-700">
                    技術戦略の立案、製品戦略の壁打ち、開発プロセスと開発生産性の設計、組織体制設計など、より戦略的な領域での支援を提供します。
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="grid grid-cols-12 gap-4 items-start">
                <div className="col-span-1">
                  <div className="bg-emerald-300 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-emerald-700 font-bold">5</span>
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold text-emerald-700">日常的なコミュニケーション</h3>
                    <span className="ml-2 bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap">
                      Early以上
                    </span>
                  </div>
                </div>
                <div className="col-span-7">
                  <p className="text-gray-700">
                    <span className="font-medium">Early:</span> Slack Connect による連携　
                    <span className="font-medium">Growth:</span> 貴社のSlackワークスペースへの参画
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="grid grid-cols-12 gap-4 items-start">
                <div className="col-span-1">
                  <div className="bg-emerald-400 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-emerald-700 font-bold">6</span>
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold text-emerald-700">伴走支援</h3>
                    <span className="ml-2 bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap">
                      Growthのみ
                    </span>
                  </div>
                </div>
                <div className="col-span-7">
                  <p className="text-gray-700">
                    開発チームや経営会議などの会議体のファシリテーション、技術・採用・組織の実行を統括するなど、より深い関わりによる伴走支援を提供します。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <DownloadButton
              variant="round"
              className="inline-flex items-center justify-center border border-emerald-600 text-emerald-600 bg-transparent hover:bg-emerald-50 font-medium py-3 px-6 rounded-full text-base"
              iconPosition="right"
            >
              サービス資料をダウンロード
            </DownloadButton>
          </div>
        </div>
      </div>
    </section>
  );
}