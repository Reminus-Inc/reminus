/**
 * FVイラストコンポーネント（Phase D: 採用ジャーニー図解型）
 *
 * 目的: CTO採用の全工程伴走を図解で表現。4フェーズの採用ジャーニー
 * 手法: アーク配置の4フェーズノード + 接続パス + Reminus伴走表現
 * カラー: emerald系統一（emerald-500 #10b981, emerald-400 #34d399, emerald-300 #6ee7b7）
 * 太田FB1対応: 技術スタック（AWS/React等）を完全排除。採用フェーズに置換
 * SP: サブコピー下にコンパクト表示。PC: 右カラムで表示
 */

export function FvIllustration() {
  return (
    <div aria-hidden="true">
      <svg
        viewBox="0 0 480 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full max-w-[480px]"
      >
        {/* ===== 背景の装飾ドット（奥行き感） ===== */}
        <circle cx="40" cy="80" r="3" fill="#6ee7b7" opacity="0.2" />
        <circle cx="440" cy="60" r="4" fill="#6ee7b7" opacity="0.15" />
        <circle cx="460" cy="340" r="3" fill="#a7f3d0" opacity="0.2" />
        <circle cx="20" cy="350" r="4" fill="#a7f3d0" opacity="0.18" />
        <circle cx="240" cy="30" r="3" fill="#6ee7b7" opacity="0.15" />
        <circle cx="80" cy="400" r="3" fill="#a7f3d0" opacity="0.2" />
        <circle cx="400" cy="400" r="3" fill="#6ee7b7" opacity="0.15" />

        {/* ===== 接続パス（フェーズ間を曲線で接続） ===== */}
        {/* フェーズ1→2 */}
        <path
          d="M165 130 C220 110, 260 130, 310 160"
          stroke="#34d399"
          strokeWidth="2"
          strokeDasharray="6 3"
          opacity="0.5"
        />
        {/* フェーズ2→3 */}
        <path
          d="M340 195 C350 230, 320 260, 300 280"
          stroke="#34d399"
          strokeWidth="2"
          strokeDasharray="6 3"
          opacity="0.5"
        />
        {/* フェーズ3→4 */}
        <path
          d="M260 310 C230 330, 200 340, 175 345"
          stroke="#34d399"
          strokeWidth="2"
          strokeDasharray="6 3"
          opacity="0.5"
        />

        {/* 矢印ヘッド */}
        <polygon points="308,157 315,165 305,165" fill="#34d399" opacity="0.6" />
        <polygon points="298,278 305,284 295,285" fill="#34d399" opacity="0.6" />
        <polygon points="178,343 172,350 172,340" fill="#34d399" opacity="0.6" />

        {/* ===== Reminus伴走ライン（全工程を貫通する弧） ===== */}
        <path
          d="M100 90 C60 200, 80 320, 160 380"
          stroke="#10b981"
          strokeWidth="2.5"
          opacity="0.15"
          fill="none"
        />
        <path
          d="M420 90 C460 200, 440 320, 360 380"
          stroke="#10b981"
          strokeWidth="2.5"
          opacity="0.15"
          fill="none"
        />

        {/* ===== フェーズ1: 企画 ===== */}
        <g>
          {/* グロー */}
          <circle cx="130" cy="110" r="42" fill="#10b981" opacity="0.06" />
          {/* ノード本体 */}
          <circle cx="130" cy="110" r="34" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
          {/* クリップボードアイコン */}
          <g transform="translate(130, 102)">
            <rect x="-10" y="-12" width="20" height="26" rx="2" fill="none" stroke="#059669" strokeWidth="1.5" />
            <rect x="-5" y="-15" width="10" height="6" rx="1.5" fill="none" stroke="#059669" strokeWidth="1.5" />
            <line x1="-6" y1="-2" x2="6" y2="-2" stroke="#059669" strokeWidth="1.2" opacity="0.6" />
            <line x1="-6" y1="3" x2="6" y2="3" stroke="#059669" strokeWidth="1.2" opacity="0.6" />
            <line x1="-6" y1="8" x2="3" y2="8" stroke="#059669" strokeWidth="1.2" opacity="0.6" />
          </g>
          {/* ラベル */}
          <text
            x="130"
            y="155"
            textAnchor="middle"
            fill="#059669"
            fontSize="11"
            fontWeight="700"
            fontFamily="system-ui, sans-serif"
          >
            企画
          </text>
          {/* STEPバッジ */}
          <rect x="100" y="60" rx="8" ry="8" width="60" height="18" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1" />
          <text x="130" y="73" textAnchor="middle" fill="#059669" fontSize="8" fontWeight="600" fontFamily="system-ui, sans-serif">
            STEP 1
          </text>
        </g>

        {/* ===== フェーズ2: 母集団形成 ===== */}
        <g>
          {/* グロー */}
          <circle cx="345" cy="170" r="42" fill="#10b981" opacity="0.06" />
          {/* ノード本体 */}
          <circle cx="345" cy="170" r="34" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
          {/* 虫眼鏡+人物アイコン */}
          <g transform="translate(345, 162)">
            {/* 人物シルエット（小） */}
            <circle cx="-4" cy="-6" r="5" fill="none" stroke="#059669" strokeWidth="1.4" />
            <path d="M-12 8 Q-12 2 -4 2 Q4 2 4 8" fill="none" stroke="#059669" strokeWidth="1.4" />
            {/* 虫眼鏡 */}
            <circle cx="8" cy="2" r="6" fill="none" stroke="#059669" strokeWidth="1.5" />
            <line x1="12" y1="6" x2="16" y2="11" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
          </g>
          {/* ラベル */}
          <text
            x="345"
            y="218"
            textAnchor="middle"
            fill="#059669"
            fontSize="11"
            fontWeight="700"
            fontFamily="system-ui, sans-serif"
          >
            母集団形成
          </text>
          {/* STEPバッジ */}
          <rect x="315" y="120" rx="8" ry="8" width="60" height="18" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1" />
          <text x="345" y="133" textAnchor="middle" fill="#059669" fontSize="8" fontWeight="600" fontFamily="system-ui, sans-serif">
            STEP 2
          </text>
        </g>

        {/* ===== フェーズ3: 面談・面接 ===== */}
        <g>
          {/* グロー */}
          <circle cx="300" cy="300" r="42" fill="#10b981" opacity="0.06" />
          {/* ノード本体 */}
          <circle cx="300" cy="300" r="34" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
          {/* 2人の会話アイコン */}
          <g transform="translate(300, 292)">
            {/* 左の人物 */}
            <circle cx="-10" cy="-6" r="4.5" fill="none" stroke="#059669" strokeWidth="1.4" />
            <path d="M-17 7 Q-17 1 -10 1 Q-3 1 -3 7" fill="none" stroke="#059669" strokeWidth="1.4" />
            {/* 右の人物 */}
            <circle cx="10" cy="-6" r="4.5" fill="none" stroke="#059669" strokeWidth="1.4" />
            <path d="M3 7 Q3 1 10 1 Q17 1 17 7" fill="none" stroke="#059669" strokeWidth="1.4" />
            {/* 会話吹き出し（小） */}
            <ellipse cx="0" cy="-14" rx="6" ry="3.5" fill="none" stroke="#34d399" strokeWidth="1" opacity="0.6" />
          </g>
          {/* ラベル */}
          <text
            x="300"
            y="348"
            textAnchor="middle"
            fill="#059669"
            fontSize="11"
            fontWeight="700"
            fontFamily="system-ui, sans-serif"
          >
            面談・面接
          </text>
          {/* STEPバッジ */}
          <rect x="270" y="250" rx="8" ry="8" width="60" height="18" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1" />
          <text x="300" y="263" textAnchor="middle" fill="#059669" fontSize="8" fontWeight="600" fontFamily="system-ui, sans-serif">
            STEP 3
          </text>
        </g>

        {/* ===== フェーズ4: オファー ===== */}
        <g>
          {/* グロー */}
          <circle cx="145" cy="345" r="42" fill="#10b981" opacity="0.06" />
          {/* ノード本体 */}
          <circle cx="145" cy="345" r="34" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
          {/* チェックマーク+握手アイコン */}
          <g transform="translate(145, 340)">
            {/* チェックマーク（大） */}
            <path d="M-12 -2 L-5 6 L12 -10" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* 下の握手ライン */}
            <path d="M-8 10 C-4 14, 4 14, 8 10" fill="none" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
          </g>
          {/* ラベル */}
          <text
            x="145"
            y="393"
            textAnchor="middle"
            fill="#059669"
            fontSize="11"
            fontWeight="700"
            fontFamily="system-ui, sans-serif"
          >
            オファー
          </text>
          {/* STEPバッジ */}
          <rect x="115" y="295" rx="8" ry="8" width="60" height="18" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1" />
          <text x="145" y="308" textAnchor="middle" fill="#059669" fontSize="8" fontWeight="600" fontFamily="system-ui, sans-serif">
            STEP 4
          </text>
        </g>

        {/* ===== 中央: Reminus伴走シンボル ===== */}
        <g>
          {/* 外側のグロー */}
          <circle cx="235" cy="230" r="52" fill="#10b981" opacity="0.06" />
          <circle cx="235" cy="230" r="44" fill="#10b981" opacity="0.04" />
          {/* ノード本体 */}
          <circle cx="235" cy="230" r="36" fill="#ecfdf5" stroke="#10b981" strokeWidth="2.5" />
          {/* シールドアイコン + CTO */}
          <g transform="translate(235, 220)">
            {/* シールド */}
            <path
              d="M0 -16 L-14 -8 L-14 4 C-14 12 0 20 0 20 C0 20 14 12 14 4 L14 -8 Z"
              fill="none"
              stroke="#059669"
              strokeWidth="1.8"
            />
            {/* チェックマーク（シールド内） */}
            <path d="M-5 0 L-1 5 L7 -4" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          {/* 「CTO知見」ラベル */}
          <text
            x="235"
            y="260"
            textAnchor="middle"
            fill="#059669"
            fontSize="9"
            fontWeight="700"
            fontFamily="system-ui, sans-serif"
            letterSpacing="0.3"
          >
            CTO知見で伴走
          </text>
        </g>

        {/* ===== 中央ノードから各フェーズへの接続（伴走を表現） ===== */}
        <g opacity="0.25" stroke="#10b981" strokeWidth="1.5">
          <line x1="210" y1="205" x2="155" y2="135" />
          <line x1="265" y1="210" x2="320" y2="185" />
          <line x1="260" y1="255" x2="280" y2="280" />
          <line x1="210" y1="255" x2="170" y2="320" />
        </g>

        {/* ===== サブキーワードタグ（採用関連。技術スタック排除） ===== */}
        <g opacity="0.5">
          <rect x="45" y="170" rx="8" ry="8" width="56" height="18" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1" />
          <text x="73" y="183" textAnchor="middle" fill="#059669" fontSize="7.5" fontFamily="system-ui, sans-serif">
            役割設計
          </text>

          <rect x="390" y="240" rx="8" ry="8" width="64" height="18" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1" />
          <text x="422" y="253" textAnchor="middle" fill="#059669" fontSize="7.5" fontFamily="system-ui, sans-serif">
            スカウト代行
          </text>

          <rect x="370" y="340" rx="8" ry="8" width="72" height="18" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1" />
          <text x="406" y="353" textAnchor="middle" fill="#059669" fontSize="7.5" fontFamily="system-ui, sans-serif">
            面接録画FB
          </text>

          <rect x="30" y="280" rx="8" ry="8" width="68" height="18" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1" />
          <text x="64" y="293" textAnchor="middle" fill="#059669" fontSize="7.5" fontFamily="system-ui, sans-serif">
            求人票作成
          </text>

          <rect x="200" y="390" rx="8" ry="8" width="80" height="18" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1" />
          <text x="240" y="403" textAnchor="middle" fill="#059669" fontSize="7.5" fontFamily="system-ui, sans-serif">
            オファーレビュー
          </text>

          <rect x="205" y="55" rx="8" ry="8" width="70" height="18" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1" />
          <text x="240" y="68" textAnchor="middle" fill="#059669" fontSize="7.5" fontFamily="system-ui, sans-serif">
            選考設計
          </text>
        </g>

        {/* サブキーワードから最寄りフェーズノードへの薄い接続 */}
        <g opacity="0.12" stroke="#34d399" strokeWidth="1" strokeDasharray="3 3">
          <line x1="101" y1="179" x2="130" y2="140" />
          <line x1="98" y1="289" x2="130" y2="140" />
          <line x1="390" y1="249" x2="345" y2="200" />
          <line x1="370" y1="349" x2="320" y2="320" />
          <line x1="280" y1="399" x2="175" y2="365" />
          <line x1="275" y1="64" x2="310" y2="100" />
        </g>
      </svg>
    </div>
  );
}
