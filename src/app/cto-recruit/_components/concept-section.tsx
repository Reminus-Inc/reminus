import { cn } from "@/lib/utils";

interface ConceptSectionProps {
  className?: string;
}

function PositioningMap() {
  return (
    <div className="mx-auto mt-8 w-full max-w-[480px] sm:mt-12">
      <svg
        viewBox="0 0 480 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        role="img"
        aria-label="ポジショニングマップ: 技術理解と対応範囲の2軸でReminusの位置を示す図"
      >
        {/* 背景 */}
        <rect width="480" height="360" rx="16" fill="white" fillOpacity="0.7" />

        {/* 軸線 */}
        <line x1="80" y1="300" x2="450" y2="300" stroke="#d1d5db" strokeWidth="1.5" />
        <line x1="80" y1="300" x2="80" y2="30" stroke="#d1d5db" strokeWidth="1.5" />

        {/* 矢印 — X軸 */}
        <polygon points="450,300 442,295 442,305" fill="#d1d5db" />
        {/* 矢印 — Y軸 */}
        <polygon points="80,30 75,38 85,38" fill="#d1d5db" />

        {/* X軸ラベル */}
        <text x="80" y="330" fontSize="11" fill="#6b7280" fontFamily="sans-serif">上流のみ</text>
        <text x="400" y="330" fontSize="11" fill="#6b7280" fontFamily="sans-serif">全工程</text>
        <text x="250" y="350" fontSize="11" fill="#9ca3af" fontFamily="sans-serif" textAnchor="middle">対応範囲</text>

        {/* Y軸ラベル */}
        <text x="70" y="295" fontSize="11" fill="#6b7280" fontFamily="sans-serif" textAnchor="end">浅い</text>
        <text x="70" y="50" fontSize="11" fill="#6b7280" fontFamily="sans-serif" textAnchor="end">深い</text>
        <text x="30" y="170" fontSize="11" fill="#9ca3af" fontFamily="sans-serif" textAnchor="middle" transform="rotate(-90,30,170)">技術理解</text>

        {/* RPO各社（左下）*/}
        <rect x="110" y="210" width="120" height="60" rx="8" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
        <text x="170" y="237" fontSize="13" fill="#6b7280" fontFamily="sans-serif" textAnchor="middle" fontWeight="500">RPO各社</text>
        <text x="170" y="256" fontSize="10.5" fill="#9ca3af" fontFamily="sans-serif" textAnchor="middle">スカウト送信・日程調整</text>

        {/* エグゼクティブサーチ（左上）*/}
        <rect x="110" y="60" width="120" height="60" rx="8" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
        <text x="170" y="84" fontSize="12.5" fill="#6b7280" fontFamily="sans-serif" textAnchor="middle" fontWeight="500">エグゼクティブ</text>
        <text x="170" y="100" fontSize="12.5" fill="#6b7280" fontFamily="sans-serif" textAnchor="middle" fontWeight="500">サーチ</text>
        <text x="170" y="115" fontSize="10.5" fill="#9ca3af" fontFamily="sans-serif" textAnchor="middle">紹介のみ</text>

        {/* Reminus CTO採用（右上）— 強調 */}
        <rect x="300" y="50" width="140" height="72" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="370" y="78" fontSize="14" fill="#065f46" fontFamily="sans-serif" textAnchor="middle" fontWeight="700">Reminus</text>
        <text x="370" y="96" fontSize="14" fill="#065f46" fontFamily="sans-serif" textAnchor="middle" fontWeight="700">CTO採用</text>
        <text x="370" y="114" fontSize="10.5" fill="#047857" fontFamily="sans-serif" textAnchor="middle">企画〜面接〜オファーまで</text>

        {/* 右上の空白ポジションを示す点線枠（薄く） */}
        <rect x="295" y="45" width="150" height="82" rx="12" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
      </svg>
    </div>
  );
}

export function ConceptSection({ className }: ConceptSectionProps) {
  return (
    <section
      id="concept"
      className={cn(
        "bg-emerald-50 border-t border-b border-emerald-100",
        className
      )}
    >
      <div className="container mx-auto px-4 py-14 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          {/* 見出し */}
          <h2 className="text-center text-xl font-bold !leading-[1.8] tracking-wide text-gray-800 sm:text-2xl md:text-3xl">
            なぜ、CTO代行の会社が
            <br className="sm:hidden" />
            採用支援をするのか。
          </h2>

          {/* リード文 */}
          <div className="mt-6 space-y-4 text-center text-sm !leading-[2.0] tracking-wide text-gray-700 sm:mt-10 sm:text-base md:text-[15px]">
            <p>
              Reminusは採用代行（RPO）の会社ではありません。
              <br className="hidden sm:inline" />
              CTO代行で複数の技術組織を支えてきた、技術の会社です。
            </p>
            <p>
              一般的なRPOは、スカウト送信や日程調整など
              <br className="hidden sm:inline" />
              上流の事務工程が中心。
              <br className="hidden sm:inline" />
              面接の見極め、候補者へのアトラクト、
              <br className="hidden sm:inline" />
              オファー設計は対象外です。
            </p>
            <p className="font-semibold text-emerald-800">
              Reminusは、技術のプロとして
              <br className="sm:hidden" />
              採用の全工程に入ります。
            </p>
          </div>

          {/* ポジショニングマップ */}
          <PositioningMap />
        </div>
      </div>
    </section>
  );
}
