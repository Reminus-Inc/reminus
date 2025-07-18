"use client";

export function PhaseSupport() {
  return (
    
    <section id="phase" className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          フェーズに合わせた<span className="text-emerald-600">支援のご提案</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          事業の成長にともない、課題の質も変化していきます。<br className="hidden md:block" />各フェーズに応じた最適な支援を通じて、成長の障壁を取り除きます。
        </p>
      </div>

      <div className="relative">
        {/* Timeline */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-emerald-200 transform -translate-x-1/2"></div>

        {/* Phase 1 */}
        <div className="md:grid md:grid-cols-2 md:gap-8 mb-16 relative">
          <div className="md:text-right md:pr-12">
            <h3 className="text-2xl font-bold text-emerald-600 mb-3">創業期・MVP</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3">課題</h4>
              <p className="text-gray-700 mb-4">
                MVPローンチにあたり優先度の高い技術施策が不明。エンジニアも集まらない。
              </p>
              <h4 className="text-xl font-semibold mb-3">Reminusの支援</h4>
              <p className="text-gray-700 mb-2">
                技術と採用のアドバイザリ。現場の方含めた技術・採用課題への壁打ちやレビュー。
              </p>
              <div className="bg-emerald-50 p-3 rounded-lg mt-3 border border-emerald-200">
                <p className="text-sm font-medium text-emerald-700">おすすめプラン: Starter</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block"></div>
          <div className="hidden md:flex absolute left-1/2 top-1/3 w-6 h-6 bg-emerald-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="md:grid md:grid-cols-2 md:gap-8 mb-16 relative">
          <div className="hidden md:block"></div>
          <div className="md:pl-12">
            <h3 className="text-2xl font-bold text-emerald-600 mb-3">MVP後〜探索期</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3">課題</h4>
              <p className="text-gray-700 mb-4">
                技術的な見通しがないために、戦略や構想の解像度が粗い。現場が困惑し、自信を持って進めない。
              </p>
              <h4 className="text-xl font-semibold mb-3">Reminusの支援</h4>
              <p className="text-gray-700 mb-2">
                経営に技術を持ち込む。技術と組織の観点から戦略の意思決定を支援し、加速・高精度化します。
              </p>
              <div className="bg-emerald-50 p-3 rounded-lg mt-3 border border-emerald-200">
                <p className="text-sm font-medium text-emerald-700">おすすめプラン: Early</p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex absolute left-1/2 top-1/3 w-6 h-6 bg-emerald-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="md:grid md:grid-cols-2 md:gap-8 relative">
          <div className="md:text-right md:pr-12">
            <h3 className="text-2xl font-bold text-emerald-600 mb-3">PMF・グロース期</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3">課題</h4>
              <p className="text-gray-700 mb-4">
                戦略に対して拡大した組織で実行が追いつかない。学習サイクルにブレーキがかかる。
              </p>
              <h4 className="text-xl font-semibold mb-3">Reminusの支援</h4>
              <p className="text-gray-700 mb-2">
                戦略を執行に落とし込む。経営と伴走し、技術・組織・採用の実行推進を支援。
              </p>
              <div className="bg-emerald-50 p-3 rounded-lg mt-3 border border-emerald-200">

                <p className="text-sm font-medium text-emerald-700">おすすめプラン: Growth</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block"></div>
          <div className="hidden md:flex absolute left-1/2 top-1/3 w-6 h-6 bg-emerald-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}