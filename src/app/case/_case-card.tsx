import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import type { CaseMeta } from "./_cases";

// ─── 事例の特集カード (LP / 詳細ページ下部で共通利用) ───────────────────────
export function FeaturedCaseCard({ item }: { item: CaseMeta }) {
  return (
    <Link
      href={`/case/${item.slug}/`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_30px_60px_-30px_rgba(15,23,42,0.22)] duration-300"
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

      <div className="flex flex-1 flex-col p-6">
        {/* ロゴは高さ h-11 をこのカード側で固定し、会社名の縦位置を事例間で揃える。
            幅は w-auto でアスペクト比なり (各事例の logoClassName 指定は不要)。 */}
        <div className="pl-2">
          <Image
            src={item.logoPath}
            alt={item.companyName}
            width={item.logoWidth}
            height={item.logoHeight}
            sizes="140px"
            className={cn("h-11 w-auto object-contain", item.logoClassName)}
          />
        </div>

        <h3 className="mt-5 text-base font-bold !leading-[1.5] tracking-wide text-gray-800 md:text-lg lg:text-lg">
          {item.title}
        </h3>

        <p
          className="mt-2 text-sm tracking-wider text-gray-600"
          data-nosnippet="true"
        >
          {item.companyName}
        </p>

        {/* タグ + 矢印。テキスト/# は省きアイコンのみ。カード下部に固定 */}
        <div className="mt-auto flex items-end justify-between gap-2 pt-6">
          <div className="flex min-w-0 flex-1 flex-wrap gap-2">
            {item.chips.map((label) => (
              <span
                key={label}
                className="rounded-sm bg-emerald-500 px-2 py-1 text-[10px] font-medium tracking-wide text-white"
              >
                {label}
              </span>
            ))}
          </div>
          <ArrowRight
            className="size-6 shrink-0 text-emerald-600 transition-transform group-hover:translate-x-0.5"
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
            ? "mx-auto grid max-w-[1000px] grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:gap-14"
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
