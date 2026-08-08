import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

// H版の「サービス範囲」(技術・製品・組織・採用の網羅型) を、MVP 引き継ぎの
// 時系列ジャーニー型に置き換えたもの。ヘッダーナビからは参照されないセクション。
// 工程を淡々と並べるセクション。恐怖訴求はビフォーアフターが担うのでここでは煽らない。
// 内製を前提に見せないため、このセクションでは「内製化」の語を使わない。
const STEPS = [
  {
    title: "引き継ぎ・診断",
    body: "既存コードを引き継ぎ、障害や情報漏えいにつながる欠陥を洗い出す。直す順番と、本番リリースまでの計画を立てる",
  },
  {
    title: "本番リリース",
    body: "品質・セキュリティ・インフラを整備。自信を持って売り始められる状態にする",
  },
  {
    title: "磨き込み・PMF",
    body: "顧客の声と商談の反応をプロダクトに反映し続け、「売れる型」が見えるまで磨き込む",
  },
  {
    title: "グロース",
    body: "拡販・エンプラ受注に向けた大玉開発へ。企画・開発・営業マーケが噛み合って、会社として事業が回る状態に",
  },
];

export function Journey({ className }: { className?: string }) {
  return (
    <section
      id="journey"
      className={cn("content-auto py-24 font-sans sm:py-32", className)}
    >
      <div className="mx-auto w-[88%] max-w-[1200px]">
        <SectionHeader
          label="Journey"
          // 既定では丸が見出しより左に飛び出す。ここは見出し・カードと左端を揃える。
          labelClassName="ml-0 sm:ml-0"
          headingClassName="text-xl min-[375px]:text-[22px] sm:text-3xl md:text-4xl lg:text-[40px] !leading-[1.7]"
        >
          {/* 引用符はヒーローの H1 と同じ組み方 (&ldquo;/&rdquo;) に揃える。
              SP は自然折り返しだと「進め / 方」で切れるので、ここで折る。 */}
          &ldquo;売れるプロダクト&rdquo;までの
          <br className="sm:hidden" />
          進め方
        </SectionHeader>

        {/* SP は縦積み、lg 以上は 4 カラム。番号で順序を示す */}
        <ol className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6 sm:p-7"
            >
              <span
                aria-hidden
                className="flex size-9 items-center justify-center rounded-full bg-emerald-500 text-base font-bold text-white"
              >
                {i + 1}
              </span>
              <p className="mt-4 text-lg font-bold tracking-wider text-gray-800 sm:text-xl">
                {step.title}
              </p>
              <p className="mt-3 text-sm !leading-[1.8] tracking-wide text-gray-700 sm:text-base">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
