import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import type { CaseMeta } from "./_cases";

// 会社名が「〜株式会社」のように法人格で終わる場合、SP では法人格の前で改行し、
// 中途半端な位置で折り返さないようにする (PC は 1 行のまま)。
function CompanyName({ name }: { name: string }) {
  const suffixes = ["株式会社", "合同会社"];
  const suffix = suffixes.find((s) => name.endsWith(s) && name.length > s.length);
  if (!suffix) return <>{name}</>;
  return (
    <>
      {name.slice(0, -suffix.length)}
      <br className="sm:hidden" />
      {suffix}
    </>
  );
}

// ─── 事例の特集カード (LP / 詳細ページ下部で共通利用) ───────────────────────
export function FeaturedCaseCard({ item }: { item: CaseMeta }) {
  return (
    <Link
      href={`/case/${item.slug}/`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.22)]"
    >
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-emerald-50 md:aspect-[16/9]">
        <Image
          src={item.thumbnail}
          alt={item.thumbnailAlt}
          fill
          sizes="(min-width: 768px) 460px, 88vw"
          className={cn(
            "object-cover transition-transform duration-500 group-hover:scale-[1.03]",
            item.thumbnailFocusClassName
          )}
        />
      </div>

      <div className="flex flex-1 flex-col p-5 pb-4 sm:p-6 sm:pb-4">
        {/* ロゴは高さ h-11 をこのカード側で固定し、会社名の縦位置を事例間で揃える。
            幅は w-auto でアスペクト比なり (各事例の logoClassName 指定は不要)。 */}
        <div className="flex items-center gap-4">
          <Image
            src={item.logoPath}
            alt={item.companyName}
            width={item.logoWidth}
            height={item.logoHeight}
            sizes="140px"
            className={cn("h-11 w-auto object-contain", item.logoClassName)}
          />
          <p className="text-xs tracking-wider text-gray-500" data-nosnippet="true">
            <CompanyName name={item.companyName} />
          </p>
        </div>

        <h3 className="mt-5 text-base font-bold !leading-[1.65] tracking-wide text-gray-800 md:text-lg lg:text-xl">
          {item.title}
        </h3>

        {/* タグ + 矢印。テキスト/# は省きアイコンのみ。カード下部に固定 (Sales Marker / IVRy 参考) */}
        <div className="mt-auto flex items-end justify-between gap-2 pt-3">
          <div className="flex min-w-0 flex-1 flex-wrap gap-1.5">
            {item.chips.map((label) => (
              <span
                key={label}
                className="rounded bg-emerald-50 px-2 py-1 text-[10px] font-medium tracking-wide text-emerald-700"
              >
                {label}
              </span>
            ))}
          </div>
          <ArrowRight
            className="size-5 shrink-0 text-emerald-600 transition-transform group-hover:translate-x-0.5"
            strokeWidth={2.25}
          />
        </div>
      </div>
    </Link>
  );
}

// ─── 特集カードのレスポンシブグリッド ──────────────────────────────────────
// 1件なら中央寄せ、2件なら2カラム、3件以上は3カラム。
export function FeaturedCaseGrid({
  items,
  className,
}: {
  items: CaseMeta[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        items.length === 1
          ? "mx-auto max-w-[640px]"
          : items.length === 2
            ? "mx-auto grid max-w-[920px] grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:gap-14"
            : "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8",
        className
      )}
    >
      {items.map((item) => (
        <FeaturedCaseCard key={item.slug} item={item} />
      ))}
    </div>
  );
}
