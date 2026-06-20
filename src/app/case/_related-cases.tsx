import Image from "next/image";
import Link from "next/link";

import { SectionHeader } from "@/app/_components/ui/section-header";
import { featuredCases, type CaseMeta } from "./_cases";

// 事例詳細ページ下部の「あなたにおすすめの事例」。
// トップの特集カードより控えめな、コンパクト 3 カラムのカード
// (画像 + 社名 + タイトル。タグ/矢印は省く) で他事例へ誘導する。
// IVRy・バクラク等のベンチに準拠。ブログは含めず事例のみ。

function RecommendedCard({ item }: { item: CaseMeta }) {
  return (
    <Link
      href={`/case/${item.slug}/`}
      className="group flex w-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-[0_14px_32px_-22px_rgba(15,23,42,0.22)] sm:w-[356px]"
    >
      {/* バクラク(LayerX)準拠。画像アスペクト 2.06、画像はカード高さの約47% */}
      <div className="relative aspect-[103/50] w-full overflow-hidden bg-emerald-50">
        <Image
          src={item.thumbnail}
          alt={item.thumbnailAlt}
          fill
          sizes="340px"
          className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${item.thumbnailFocusClassName ?? ""}`}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Image
          src={item.logoPath}
          alt={item.companyName}
          width={item.logoWidth}
          height={item.logoHeight}
          sizes="108px"
          className="h-auto w-[108px] object-contain"
        />
        <p className="mt-5 text-xs tracking-wider text-gray-500" data-nosnippet="true">
          {item.companyName}
        </p>
        <h3 className="mt-3 line-clamp-3 text-base font-bold !leading-[1.8] tracking-wide text-gray-800">
          {item.title}
        </h3>
      </div>
    </Link>
  );
}

export function RelatedCases({ currentSlug }: { currentSlug: string }) {
  const items = featuredCases.filter((c) => c.slug !== currentSlug);
  if (items.length === 0) return null;

  return (
    <section className="font-sans">
      <div className="mx-auto w-[88%] max-w-[1160px]">
        <SectionHeader
          label="Pick up"
          align="center"
          headingClassName="text-xl sm:text-2xl !leading-[1.6]"
        >
          あなたにおすすめの事例
        </SectionHeader>

        <div className="mt-8 flex flex-wrap justify-center gap-6 sm:mt-10">
          {items.map((item) => (
            <RecommendedCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
