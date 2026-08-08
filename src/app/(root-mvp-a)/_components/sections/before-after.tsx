import Image from "next/image";
import { cn } from "@/lib/utils";
import { Check, TriangleAlert } from "lucide-react";

// MVP を外注で作った「その後」の停滞 (Before) と、Reminus 導入後 (After) の対比。
// Before はダークグレー面、After は白+ミント面。面の切り替えでコントラストを作る。
// 外注そのものを否定せず、「外注だけでは事業判断込みの開発体制にならない」という立て付け。
const BEFORE = [
  "外注やAIで作ったMVPはあるが、本番リリースしていい品質か、誰も判断できない",
  "外注は顧客理解が浅く、出てくるものがズレる。受注のために求められる瞬発力も出ない",
  "リリースはスタート地点。問い合わせ対応・顧客要望開発・障害対策——技術でやるべき膨大なタスクを担える体制がない",
];

const AFTER = [
  "データ消失や情報漏えい——顧客の信頼を一瞬で失う事故の芽を、CTOが本番前に診断して潰す",
  "顧客・市場ファーストで開発を推進。顧客価値と売上につながる機能を最優先に。技術投資は段階的に。",
  "事業としてプロダクトを提供し続けるための開発・運用体制を構築。内製でも外注でも回る体制から、将来の内製化準備まで",
];

export function BeforeAfter({ className }: { className?: string }) {
  return (
    <section
      id="before-after"
      className={cn("content-auto font-sans", className)}
    >
      {/* Before: 明るいグレー面 */}
      <div className="bg-[#F5F5F5] py-20 sm:py-28">
        <div className="mx-auto w-[88%] max-w-[1200px]">
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500 sm:text-[13px]">
                Before
              </p>
              <h2 className="mt-3 text-xl font-bold !leading-[1.6] tracking-wide text-gray-900 min-[375px]:text-[22px] sm:text-3xl md:text-4xl lg:text-[40px]">
                {/* SP は自然折り返しだと「止ま / っていませんか？」で切れるので、
                    読点で折る。sm 以上は幅が足りるので改行しない。 */}
                MVP外注の「その後」で、
                <br className="sm:hidden" />
                止まっていませんか？
              </h2>
            </div>
            <Image
              src="/questions.svg"
              alt=""
              width={240}
              height={240}
              className="w-32 shrink-0 md:w-44 lg:w-56"
            />
          </div>

          <ol className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {BEFORE.map((text, i) => (
              <li
                key={text}
                className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8"
              >
                <div className="flex items-center gap-2.5">
                  <TriangleAlert
                    aria-hidden
                    strokeWidth={1.75}
                    className="size-5 shrink-0 text-gray-500"
                  />
                  <span className="text-[13px] font-bold tracking-[0.12em] text-gray-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-3.5 text-sm !leading-[1.8] tracking-wide text-gray-800 sm:text-base">
                  {text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* 面の切り替えを示す下向きの三角 */}
      <div aria-hidden className="flex justify-center bg-[#F5F5F5]">
        {/* PC は面の幅が広いぶん、SP と同じ大きさだと点にしか見えないので段階的に広げる */}
        <div className="translate-y-full border-x-[20px] border-t-[18px] border-x-transparent border-t-[#F5F5F5] sm:border-x-[24px] sm:border-t-[22px] md:border-x-[32px] md:border-t-[28px] lg:border-x-[40px] lg:border-t-[34px]" />
      </div>

      {/* After: 白 + ミント面 */}
      <div className="bg-white py-20 sm:py-28">
        <div className="mx-auto w-[88%] max-w-[1200px]">
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-600 sm:text-[13px]">
                After
              </p>
              {/* Before 側と同じ字送り。他セクションの見出しも lg で 40px */}
              <h2 className="mt-3 text-xl font-bold !leading-[1.6] tracking-wide text-gray-900 min-[375px]:text-[22px] sm:text-3xl md:text-4xl lg:text-[40px]">
                Reminus導入後は、
                <br className="sm:hidden" />
                こうなります
              </h2>
            </div>
            {/* 実寸 1200x1078。width/height は実際の比率に合わせる
                (190x160 だと縦に潰れる) */}
            <Image
              src="/hero.png"
              alt=""
              width={320}
              height={287}
              className="w-36 shrink-0 md:w-52 lg:w-64"
            />
          </div>

          <ol className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {AFTER.map((text, i) => (
              <li key={text} className="rounded-2xl bg-emerald-50 p-6 sm:p-8">
                <div className="flex items-center gap-2.5">
                  <Check
                    aria-hidden
                    strokeWidth={1.75}
                    className="size-5 shrink-0 text-emerald-600"
                  />
                  <span className="text-[13px] font-bold tracking-[0.12em] text-emerald-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-3.5 text-sm !leading-[1.8] tracking-wide text-gray-900 sm:text-base">
                  {text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
