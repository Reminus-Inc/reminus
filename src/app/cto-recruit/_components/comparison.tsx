import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

/* 24px SVG インジケーター — 案A: テキストより視覚記号を主役に */
function ComparisonDash() {
  return (
    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-100">
      <svg viewBox="0 0 24 24" className="h-3 w-3">
        <line
          x1="6"
          y1="12"
          x2="18"
          y2="12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="text-gray-400"
        />
      </svg>
    </span>
  );
}

function ComparisonCheck() {
  return (
    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500">
      <svg viewBox="0 0 24 24" className="h-3 w-3">
        <polyline
          points="6,12 10,16 18,8"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

const comparisonItems = [
  {
    category: "支援範囲",
    rpo: "スカウト・日程調整が中心",
    reminus: "全工程を一貫して伴走",
  },
  {
    category: "担当者の技術力",
    rpo: "非エンジニアが対応",
    reminus: "CTO経験者が直接担当",
  },
  {
    category: "スカウト",
    rpo: "テンプレート大量送信",
    reminus: "候補者ごとにカスタマイズ",
  },
  {
    category: "面接・見極め",
    rpo: "日程調整・FB共有のみ",
    reminus: "設計・同席・録画FBまで",
  },
  {
    category: "オファー支援",
    rpo: "対象外",
    reminus: "条件設計・レターレビュー",
  },
  {
    category: "ノウハウの蓄積",
    rpo: "ブラックボックス化",
    reminus: "積極公開・内製化支援",
  },
];

export function Comparison({ className }: { className?: string }) {
  return (
    <section
      id="comparison"
      className={cn("content-auto py-16 font-sans sm:py-24 md:py-24", className)}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="エンジニアRPOとの違い"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
          align="center"
        >
          <span className="highlight-underline text-emerald-500">
            RPOが踏み込めない領域
          </span>
          こそ、
          <br className="hidden sm:inline" />
          Reminusの本領。
        </SectionHeader>

        <p className="mt-4 text-center text-sm !leading-[1.9] tracking-wide text-gray-600 sm:mt-6 sm:text-base">
          RPOの主業務は事務的な採用代行。
          <br className="hidden sm:inline" />
          Reminusは面接・見極め・オファーまで踏み込めます。
        </p>

        {/* PC: テーブル */}
        <div className="relative mt-10 hidden overflow-hidden rounded-2xl border border-solid border-gray-200 shadow-sm sm:mt-14 md:block">
          {/* Reminusカラムハイライト */}
          <div
            className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-[39%] rounded-r-2xl"
            style={{
              boxShadow:
                "inset 0 0 40px rgba(16, 185, 129, 0.10), -4px 0 24px rgba(16, 185, 129, 0.08)",
            }}
          />
          <table className="relative w-full">
            <thead>
              <tr>
                <th className="w-[22%] border-b border-solid border-gray-200 bg-gray-50 px-6 py-4 text-left text-sm font-bold tracking-wider text-gray-500" />
                <th className="w-[39%] border-b border-l border-solid border-gray-200 bg-gray-50 px-6 py-4 text-center text-sm font-bold tracking-wider text-gray-500">
                  一般的なエンジニアRPO
                </th>
                <th className="w-[39%] border-b border-l-2 border-solid border-emerald-300 bg-emerald-100 px-6 py-4 text-center text-sm font-bold tracking-wider text-emerald-700">
                  Reminus CTO採用
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonItems.map((item, index) => (
                <tr
                  key={index}
                  className={
                    index < comparisonItems.length - 1
                      ? "border-b border-solid border-gray-100"
                      : ""
                  }
                >
                  <td className="bg-gray-50 px-6 py-5 text-sm font-bold tracking-wider text-gray-700">
                    {item.category}
                  </td>
                  <td className="border-l border-solid border-gray-100 px-5 py-4 text-sm">
                    <div className="flex items-start gap-3">
                      <ComparisonDash />
                      <span className="text-sm !leading-[1.7] tracking-wide text-gray-400">
                        {item.rpo}
                      </span>
                    </div>
                  </td>
                  <td className="border-l-2 border-solid border-emerald-300 bg-emerald-50 px-5 py-4 text-sm">
                    <div className="flex items-start gap-3">
                      <ComparisonCheck />
                      <span className="text-sm font-medium !leading-[1.7] tracking-wide text-gray-700">
                        {item.reminus}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SP: カード型（RPO vs Reminus を明確に区別） */}
        <div className="mt-8 flex flex-col gap-4 md:hidden">
          {comparisonItems.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-solid border-gray-200 shadow-sm"
            >
              {/* カテゴリーヘッダー */}
              <div className="bg-gray-50 px-4 py-2.5">
                <span className="text-xs font-bold tracking-wider text-gray-600">
                  {item.category}
                </span>
              </div>

              {/* RPO */}
              <div className="border-b border-solid border-gray-100 px-4 py-3">
                <div className="mb-1 flex items-center gap-2">
                  <ComparisonDash />
                  <span className="text-[11px] font-bold tracking-wider text-gray-400">
                    一般的なRPO
                  </span>
                </div>
                <p className="pl-[34px] text-[13px] !leading-[1.8] tracking-wide text-gray-500">
                  {item.rpo}
                </p>
              </div>

              {/* Reminus */}
              <div className="rounded-lg bg-emerald-50/40 px-4 py-3 ring-1 ring-emerald-200/60">
                <div className="mb-1 flex items-center gap-2">
                  <ComparisonCheck />
                  <span className="text-[11px] font-bold tracking-wider text-emerald-600">
                    Reminus
                  </span>
                </div>
                <p className="pl-[34px] text-[13px] font-medium !leading-[1.8] tracking-wide text-gray-800">
                  {item.reminus}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* TrackRecordへの接続コピー */}
        <p className="mt-10 text-center text-sm !leading-[1.9] tracking-wide text-gray-500 sm:mt-14 sm:text-base">
          この対応力は、CTO代行として培ってきた実績に裏付けられています。
        </p>
      </div>
    </section>
  );
}
