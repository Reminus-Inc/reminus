"use client";

import { DownloadButton } from "../ui/download-button";

export function EngagementStyle() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            プランに応じた<span className="text-emerald-600">関わり方</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            上位プランになるにつれて、より密接な関わり方で伴走支援いたします。
          </p>
        </div>

        <div className="mx-auto max-w-4xl rounded-xl bg-white p-6 shadow-lg md:p-8">
          <div className="space-y-10">
            {/* Item 1 */}
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
              <div className="flex flex-shrink-0 md:block">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                  <span className="font-bold text-emerald-600">1</span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-emerald-600">
                  定期ミーティング
                </h3>
                <p className="mt-1 text-gray-700">
                  週1回45分程度の定期ミーティングを実施します。
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
              <div className="flex flex-shrink-0 md:block">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                  <span className="font-bold text-emerald-600">2</span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-emerald-600">
                  スポットミーティング
                </h3>
                <p className="mt-1 text-gray-700">
                  プランに応じて月に2〜3回程度、適宜スポットのミーティングを実施いたします。
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
              <div className="flex flex-shrink-0 md:block">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                  <span className="font-bold text-emerald-600">3</span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-emerald-600">
                  技術・採用相談
                </h3>
                <p className="mt-1 text-gray-700">
                  技術的な方向性の壁打ちやレビュー、採用に関する相談など、日々の課題に対するアドバイスを提供します。
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
              <div className="flex flex-shrink-0 md:block">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                  <span className="font-bold text-emerald-600">4</span>
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col gap-2 md:flex-row md:items-center">
                  <h3 className="text-lg font-bold text-emerald-600">
                    戦略領域の支援
                  </h3>
                  <span className="inline-block w-fit rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-medium text-white">
                    Early~
                  </span>
                </div>
                <p className="mt-1 text-gray-700">
                  技術・採用戦略の立案、組織体制設計、製品戦略と技術戦略の接続など、経営層の戦略機能の一部を担います。
                </p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
              <div className="flex flex-shrink-0 md:block">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                  <span className="font-bold text-emerald-600">5</span>
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col gap-2 md:flex-row md:items-center">
                  <h3 className="text-lg font-bold text-emerald-600">
                    日常的なコミュニケーション
                  </h3>
                  <span className="inline-block w-fit rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-medium text-white">
                    Early~
                  </span>
                </div>
                <p className="mt-1 text-gray-700">
                  プランに応じてSlack
                  Connectや貴社Slackワークスペースへ参加し、より密にコミュニケーションを図ります。
                </p>
              </div>
            </div>

            {/* Item 6 */}
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
              <div className="flex flex-shrink-0 md:block">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                  <span className="font-bold text-emerald-600">6</span>
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col gap-2 md:flex-row md:items-center">
                  <h3 className="text-lg font-bold text-emerald-600">
                    執行の伴走支援
                  </h3>
                  <span className="inline-block w-fit rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-medium text-white">
                    Growth
                  </span>
                </div>
                <p className="mt-1 text-gray-700">
                  ロードマップ策定、技術施策や開発計画の推進、スカウト伴走や採用管理など、実行を深く支援します。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <DownloadButton />
          </div>
        </div>
      </div>
    </section>
  );
}
