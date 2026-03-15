import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

const comparisonItems = [
  {
    category: "支援範囲",
    rpo: "母集団形成（スカウト送信・日程調整）が中心。面接・オファーは対象外",
    reminus: "採用企画〜スカウト〜面接同席〜オファー設計まで全工程を伴走",
  },
  {
    category: "担当者の技術力",
    rpo: "非エンジニアの採用担当者が対応。技術判断は顧客側に依存",
    reminus: "CTO・EM経験者が直接担当。技術スタックやアーキテクチャを理解",
  },
  {
    category: "スカウト",
    rpo: "テンプレートベースの大量送信。CTO層の返信率は低い",
    reminus: "候補者のGitHub・登壇実績まで読み込んだパーソナライズ作成",
  },
  {
    category: "面接・見極め",
    rpo: "日程調整・フィードバック共有のみ。技術的な見極めは対象外",
    reminus: "面接設計・面談同席・録画FB・書類スクリーニングまでカバー",
  },
  {
    category: "オファー支援",
    rpo: "対象外（条件交渉・レター設計は顧客側で実施）",
    reminus: "CTO給与相場を踏まえた条件設計・オファーレターレビュー",
  },
  {
    category: "ノウハウの蓄積",
    rpo: "業務はブラックボックス化しやすい。契約終了後にノウハウが残りにくい",
    reminus: "ノウハウを積極的に公開。採用力を貴社に内製化するパートナー",
  },
];

export function Comparison({ className }: { className?: string }) {
  return (
    <section
      id="comparison"
      className={cn("content-auto py-16 font-sans sm:py-24 md:py-32", className)}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="エンジニアRPOとの違い"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
          align="center"
        >
          <span className="highlight-underline text-emerald-500">
            下流工程まで伴走
          </span>
          できるのが、
          <br className="hidden sm:inline" />
          Reminusの強み。
        </SectionHeader>

        <p className="mt-4 text-center text-sm !leading-[1.9] tracking-wide text-gray-600 sm:mt-6 sm:text-base">
          エンジニアRPOの主業務は
          <br className="sm:hidden" />
          スカウト送信・日程調整などの上流BPO。
          <br className="hidden sm:inline" />
          Reminusは技術力を持つCTO代行会社だからこそ、
          <br className="sm:hidden" />
          面接・見極め・オファーまで踏み込めます。
        </p>

        {/* PC: テーブル */}
        <div className="mt-10 hidden overflow-hidden rounded-2xl border border-solid border-gray-200 shadow-sm sm:mt-14 md:block">
          <table className="w-full">
            <thead>
              <tr>
                <th className="w-[22%] border-b border-solid border-gray-200 bg-gray-50 px-6 py-4 text-left text-sm font-bold tracking-wider text-gray-500" />
                <th className="w-[39%] border-b border-l border-solid border-gray-200 bg-gray-50 px-6 py-4 text-center text-sm font-bold tracking-wider text-gray-500">
                  一般的なエンジニアRPO
                </th>
                <th className="w-[39%] border-b border-l border-solid border-gray-200 bg-emerald-50 px-6 py-4 text-center text-sm font-bold tracking-wider text-emerald-700">
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
                  <td className="border-l border-solid border-gray-100 px-6 py-5 text-sm !leading-[1.8] tracking-wide text-gray-500">
                    {item.rpo}
                  </td>
                  <td className="border-l border-solid border-gray-100 bg-emerald-50/30 px-6 py-5 text-sm font-medium !leading-[1.8] tracking-wide text-gray-800">
                    {item.reminus}
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
              {/* カテゴリヘッダー */}
              <div className="bg-gray-50 px-4 py-2.5">
                <span className="text-xs font-bold tracking-wider text-gray-600">
                  {item.category}
                </span>
              </div>
              {/* RPO */}
              <div className="border-b border-solid border-gray-100 px-4 py-3">
                <div className="mb-1 flex items-center gap-1.5">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-200">
                    <span className="text-[10px] text-gray-500">△</span>
                  </span>
                  <span className="text-[11px] font-bold tracking-wider text-gray-400">
                    一般的なRPO
                  </span>
                </div>
                <p className="pl-[26px] text-[13px] !leading-[1.8] tracking-wide text-gray-500">
                  {item.rpo}
                </p>
              </div>
              {/* Reminus */}
              <div className="bg-emerald-50/40 px-4 py-3">
                <div className="mb-1 flex items-center gap-1.5">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <span className="text-[10px] text-emerald-600">◎</span>
                  </span>
                  <span className="text-[11px] font-bold tracking-wider text-emerald-600">
                    Reminus
                  </span>
                </div>
                <p className="pl-[26px] text-[13px] font-medium !leading-[1.8] tracking-wide text-gray-800">
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
