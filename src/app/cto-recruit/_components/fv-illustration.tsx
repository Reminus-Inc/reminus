/**
 * FVイラストコンポーネント（Phase B: SVGネットワークグラフ）
 *
 * 目的: CTO/タレントネットワークを抽象的に表現し、FVのビジュアルインパクトを向上
 * 手法: 接続されたノード+ライン。中央に大きめCTOノード、周囲に候補者・スキルノード
 * カラー: emerald系統一（emerald-500 #10b981, emerald-400 #34d399, emerald-300 #6ee7b7）
 * SP: hidden（テキスト+CTAのみ表示）
 */

export function FvIllustration() {
  return (
    <div className="hidden lg:block" aria-hidden="true">
      <svg
        viewBox="0 0 480 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full max-w-[480px]"
      >
        {/* 接続ライン（ノードの背面に描画） */}
        <g opacity="0.35" stroke="#10b981" strokeWidth="1.5">
          {/* CTO中心→周囲ノード */}
          <line x1="240" y1="200" x2="130" y2="110" />
          <line x1="240" y1="200" x2="350" y2="100" />
          <line x1="240" y1="200" x2="380" y2="220" />
          <line x1="240" y1="200" x2="340" y2="320" />
          <line x1="240" y1="200" x2="120" y2="290" />
          <line x1="240" y1="200" x2="100" y2="200" />
          <line x1="240" y1="200" x2="160" y2="340" />
          <line x1="240" y1="200" x2="310" y2="160" />
          {/* 周囲ノード間の接続 */}
          <line x1="130" y1="110" x2="350" y2="100" />
          <line x1="350" y1="100" x2="380" y2="220" />
          <line x1="380" y1="220" x2="340" y2="320" />
          <line x1="340" y1="320" x2="160" y2="340" />
          <line x1="160" y1="340" x2="120" y2="290" />
          <line x1="120" y1="290" x2="100" y2="200" />
          <line x1="100" y1="200" x2="130" y2="110" />
          {/* 追加の斜め接続（ネットワークの密度を上げク） */}
          <line x1="130" y1="110" x2="310" y2="160" />
          <line x1="310" y1="160" x2="380" y2="220" />
          <line x1="120" y1="290" x2="340" y2="320" />
        </g>

        {/* 外側の薄い装飾ノード群（奥行き感） */}
        <circle cx="60" cy="150" r="5" fill="#6ee7b7" opacity="0.25" />
        <circle cx="420" cy="160" r="6" fill="#6ee7b7" opacity="0.2" />
        <circle cx="440" cy="300" r="4" fill="#a7f3d0" opacity="0.3" />
        <circle cx="50" cy="350" r="5" fill="#a7f3d0" opacity="0.25" />
        <circle cx="200" cy="50" r="4" fill="#6ee7b7" opacity="0.2" />
        <circle cx="380" cy="60" r="5" fill="#6ee7b7" opacity="0.2" />
        <circle cx="80" cy="60" r="3" fill="#a7f3d0" opacity="0.3" />
        <circle cx="450" cy="390" r="4" fill="#a7f3d0" opacity="0.2" />

        {/* 追加の薄い接続ライン（外側ノードへ） */}
        <g opacity="0.15" stroke="#34d399" strokeWidth="1" strokeDasharray="4 4">
          <line x1="130" y1="110" x2="60" y2="150" />
          <line x1="130" y1="110" x2="80" y2="60" />
          <line x1="350" y1="100" x2="380" y2="60" />
          <line x1="350" y1="100" x2="420" y2="160" />
          <line x1="380" y1="220" x2="440" y2="300" />
          <line x1="120" y1="290" x2="50" y2="350" />
          <line x1="200" y1="50" x2="130" y2="110" />
          <line x1="200" y1="50" x2="350" y2="100" />
        </g>

        {/* メインネットワークノード（中サイズ）*/}
        {/* ノード: 上部左 — Backend Engineer */}
        <circle cx="130" cy="110" r="22" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
        <g transform="translate(130,110)">
          <circle cx="0" cy="-6" r="5" fill="none" stroke="#10b981" strokeWidth="1.2" />
          <path d="M-8 8 Q-8 2 0 2 Q8 2 8 8" fill="none" stroke="#10b981" strokeWidth="1.2" />
        </g>

        {/* ノード: 上部右 — Frontend Engineer */}
        <circle cx="350" cy="100" r="20" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
        <g transform="translate(350,100)">
          <circle cx="0" cy="-5" r="4.5" fill="none" stroke="#10b981" strokeWidth="1.2" />
          <path d="M-7 7 Q-7 1.5 0 1.5 Q7 1.5 7 7" fill="none" stroke="#10b981" strokeWidth="1.2" />
        </g>

        {/* ノード: 右 — DevOps */}
        <circle cx="380" cy="220" r="18" fill="#ecfdf5" stroke="#34d399" strokeWidth="1.5" />
        <g transform="translate(380,220)">
          <circle cx="0" cy="-5" r="4" fill="none" stroke="#34d399" strokeWidth="1.2" />
          <path d="M-6 6 Q-6 1 0 1 Q6 1 6 6" fill="none" stroke="#34d399" strokeWidth="1.2" />
        </g>

        {/* ノード: 右下 — EM候補 */}
        <circle cx="340" cy="320" r="19" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
        <g transform="translate(340,320)">
          <circle cx="0" cy="-5" r="4.5" fill="none" stroke="#10b981" strokeWidth="1.2" />
          <path d="M-7 7 Q-7 1.5 0 1.5 Q7 1.5 7 7" fill="none" stroke="#10b981" strokeWidth="1.2" />
        </g>

        {/* ノード: 左下 — SRE */}
        <circle cx="160" cy="340" r="16" fill="#ecfdf5" stroke="#34d399" strokeWidth="1.5" />
        <g transform="translate(160,340)">
          <circle cx="0" cy="-4" r="3.5" fill="none" stroke="#34d399" strokeWidth="1.2" />
          <path d="M-5 5 Q-5 0.5 0 0.5 Q5 0.5 5 5" fill="none" stroke="#34d399" strokeWidth="1.2" />
        </g>

        {/* ノード: 左 — Infra Engineer */}
        <circle cx="100" cy="200" r="17" fill="#ecfdf5" stroke="#34d399" strokeWidth="1.5" />
        <g transform="translate(100,200)">
          <circle cx="0" cy="-4.5" r="4" fill="none" stroke="#34d399" strokeWidth="1.2" />
          <path d="M-6 6 Q-6 1 0 1 Q6 1 6 6" fill="none" stroke="#34d399" strokeWidth="1.2" />
        </g>

        {/* ノード: 左下 — QA Engineer */}
        <circle cx="120" cy="290" r="15" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1.5" />
        <g transform="translate(120,290)">
          <circle cx="0" cy="-4" r="3.5" fill="none" stroke="#6ee7b7" strokeWidth="1.2" />
          <path d="M-5 5 Q-5 0.5 0 0.5 Q5 0.5 5 5" fill="none" stroke="#6ee7b7" strokeWidth="1.2" />
        </g>

        {/* 中間ノード — Tech Lead */}
        <circle cx="310" cy="160" r="14" fill="#ecfdf5" stroke="#34d399" strokeWidth="1.5" />
        <g transform="translate(310,160)">
          <circle cx="0" cy="-3.5" r="3" fill="none" stroke="#34d399" strokeWidth="1.2" />
          <path d="M-5 5 Q-5 0 0 0 Q5 0 5 5" fill="none" stroke="#34d399" strokeWidth="1.2" />
        </g>

        {/* ===== 中央: CTOノード（最大・強調） ===== */}
        {/* 外側のグロー */}
        <circle cx="240" cy="200" r="44" fill="#10b981" opacity="0.08" />
        <circle cx="240" cy="200" r="36" fill="#ecfdf5" stroke="#10b981" strokeWidth="2.5" />
        {/* CTOアイコン: 人物 + 星（リーダーシップ） */}
        <g transform="translate(240,195)">
          <circle cx="0" cy="-8" r="7" fill="none" stroke="#059669" strokeWidth="1.8" />
          <path d="M-11 10 Q-11 2 0 2 Q11 2 11 10" fill="none" stroke="#059669" strokeWidth="1.8" />
        </g>
        {/* "CTO" ラベル */}
        <text
          x="240"
          y="225"
          textAnchor="middle"
          fill="#059669"
          fontSize="9"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.5"
        >
          CTO
        </text>

        {/* スキルタグ風の小さな装飾（技術感を追加） */}
        <g opacity="0.6">
          <rect x="55" y="105" rx="8" ry="8" width="40" height="18" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1" />
          <text x="75" y="117" textAnchor="middle" fill="#059669" fontSize="7" fontFamily="system-ui, sans-serif">Go</text>

          <rect x="395" y="130" rx="8" ry="8" width="50" height="18" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1" />
          <text x="420" y="142" textAnchor="middle" fill="#059669" fontSize="7" fontFamily="system-ui, sans-serif">React</text>

          <rect x="395" y="270" rx="8" ry="8" width="40" height="18" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1" />
          <text x="415" y="282" textAnchor="middle" fill="#059669" fontSize="7" fontFamily="system-ui, sans-serif">AWS</text>

          <rect x="55" y="240" rx="8" ry="8" width="42" height="18" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1" />
          <text x="76" y="252" textAnchor="middle" fill="#059669" fontSize="7" fontFamily="system-ui, sans-serif">K8s</text>

          <rect x="270" y="365" rx="8" ry="8" width="52" height="18" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1" />
          <text x="296" y="377" textAnchor="middle" fill="#059669" fontSize="7" fontFamily="system-ui, sans-serif">Python</text>

          <rect x="160" y="60" rx="8" ry="8" width="40" height="18" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1" />
          <text x="180" y="72" textAnchor="middle" fill="#059669" fontSize="7" fontFamily="system-ui, sans-serif">Rust</text>
        </g>
      </svg>
    </div>
  );
}
