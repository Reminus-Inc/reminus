/**
 * FV背景コンポーネント（Phase A: 抽象SVG背景パターン）
 *
 * 目的: テキストオンリーの素朴さを解消し、プロフェッショナル感を追加
 * 手法: emerald系グラデーション + 微細な幾何学SVGパターンオーバーレイ
 * 制約: テキスト可読性最優先。パターンは「気づくか気づかないか」レベル
 */

export function FvBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* レイヤー1: emerald系の極薄グラデーション */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(236,253,245,0.7) 0%, rgba(255,255,255,0.3) 40%, rgba(209,250,229,0.4) 100%)",
        }}
      />

      {/* レイヤー2: 微細な幾何学ドットグリッドパターン */}
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="fv-dot-grid"
            x="0"
            y="0"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1" fill="#059669" opacity="0.07" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fv-dot-grid)" />
      </svg>

      {/* レイヤー3: 右上から左下への装飾的なぼかし円（depth感） */}
      <div
        className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full sm:h-[500px] sm:w-[500px]"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-16 -left-16 h-[300px] w-[300px] rounded-full sm:h-[400px] sm:w-[400px]"
        style={{
          background:
            "radial-gradient(circle, rgba(5,150,105,0.05) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
