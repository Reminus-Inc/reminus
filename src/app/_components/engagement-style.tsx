"use client"

import { DownloadButton } from "./download-button"

export function EngagementStyle() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            プランに応じた<span className="text-emerald-600">関わり方</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            上位プランになるにつれて、より密接な関わり方で伴走支援いたします。
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
          <div className="space-y-10">
            {/* Item 1 */}
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-shrink-0 flex md:block">
                <div className="bg-emerald-100 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="text-emerald-600 font-bold">1</span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-emerald-600">定期ミーティング</h3>
                <p className="text-gray-700 mt-1">
                  週1回45分程度の定期ミーティングを実施します。
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-shrink-0 flex md:block">
                <div className="bg-emerald-100 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="text-emerald-600 font-bold">2</span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-emerald-600">スポットミーティング</h3>
                <p className="text-gray-700 mt-1">
                  プランに応じて月に2〜3回程度、適宜スポットのミーティングを実施いたします。
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-shrink-0 flex md:block">
                <div className="bg-emerald-100 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="text-emerald-600 font-bold">3</span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-emerald-600">技術・採用相談</h3>
                <p className="text-gray-700 mt-1">
                  技術的な方向性の壁打ちやレビュー、採用に関する相談など、日々の課題に対するアドバイスを提供します。
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-shrink-0 flex md:block">
                <div className="bg-emerald-100 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="text-emerald-600 font-bold">4</span>
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <h3 className="text-lg font-semibold text-emerald-600">戦略領域の支援</h3>
                  <span className="text-xs font-medium text-white bg-emerald-600 px-2 py-0.5 rounded-full inline-block w-fit">
                    Early~
                  </span>
                </div>
                <p className="text-gray-700 mt-1">
                  技術・採用戦略の立案、組織体制設計、製品戦略と技術戦略の接続など、経営層の戦略機能の一部を担います。
                </p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-shrink-0 flex md:block">
                <div className="bg-emerald-100 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="text-emerald-600 font-bold">5</span>
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <h3 className="text-lg font-semibold text-emerald-600">日常的なコミュニケーション</h3>
                  <span className="text-xs font-medium text-white bg-emerald-600 px-2 py-0.5 rounded-full inline-block w-fit">
                    Early~
                  </span>
                </div>
                <p className="text-gray-700 mt-1">
                  プランに応じてSlack Connectや貴社Slackワークスペースへ参加し、より密にコミュニケーションを図ります。
                </p>
              </div>
            </div>

            {/* Item 6 */}
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-shrink-0 flex md:block">
                <div className="bg-emerald-100 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="text-emerald-600 font-bold">6</span>
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <h3 className="text-lg font-semibold text-emerald-600">執行の伴走支援</h3>
                  <span className="text-xs font-medium text-white bg-emerald-600 px-2 py-0.5 rounded-full inline-block w-fit">
                    Growth
                  </span>
                </div>
                <p className="text-gray-700 mt-1">
                ロードマップ策定、技術施策や開発計画の推進、スカウト伴走や採用管理など、実行を深く支援します。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <DownloadButton
              variant="round"
              className="inline-flex items-center justify-center border border-emerald-600 text-emerald-600 bg-white hover:bg-emerald-50 font-medium py-3 px-8 rounded-full text-base transition-colors"
              iconPosition="right"
            >
              ダウンロード
            </DownloadButton>
          </div>
        </div>
      </div>
    </section>
  )
}
