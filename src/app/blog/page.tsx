import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "./_articles";
import { ColumnCard } from "@/app/_components/ui/column-card";

export const metadata: Metadata = {
  title: "Blog | Reminus",
  description:
    "SaaSと技術の最前線で成果を出しているReminusが、具体的で今日からお役に立つ情報を提供しています。",
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "ブログ | Reminus",
    description:
      "SaaSと技術の最前線で成果を出しているReminusが、具体的で今日からお役に立つ情報を提供しています。",
    url: "/blog/",
    type: "website",
    images: ["/opengraph-image.png"],
  },
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-[calc(100svh-80px)] bg-white pb-20 font-sans md:pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "ブログ | Reminus",
              url: "https://www.reminus.co.jp/blog/",
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "ホーム",
                  item: "https://www.reminus.co.jp/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "ブログ/コラム",
                  item: "https://www.reminus.co.jp/blog/",
                },
              ],
            },
          ]),
        }}
      />
      {/* ヒーロー */}
      <div className="bg-emerald-600 pb-7 pt-7 md:pb-9 md:pt-10 lg:pb-10 lg:pt-11">
        <div className="mx-auto w-[88%] max-w-[1100px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-white/80" />
            <p className="text-[11px] font-bold tracking-[0.2em] text-white/90 md:text-xs">
              BLOG
            </p>
          </div>
          <h1 className="mt-2 text-xl font-bold !leading-[1.4] tracking-wider text-white md:text-2xl md:text-2xl lg:text-3xl">
            ブログ / コラム
          </h1>
          <p className="mt-2 max-w-[640px] text-base !leading-[1.8] tracking-wide text-white/80 md:mt-2.5 md:text-base lg:text-lg ">
            Reminusのノウハウを発信します。
          </p>
        </div>
      </div>

      {/* パンくず */}
      <div className="mx-auto w-[88%] max-w-[1100px] pt-5 md:pt-7">
        <nav className="text-xs text-gray-400 md:text-sm">
          <Link href="/" className="hover:text-emerald-600">ホーム</Link>
          <span className="mx-1">&gt;</span>
          <span className="text-gray-500">ブログ/コラム</span>
        </nav>
      </div>

      {/* 記事一覧 */}
      <div className="mx-auto mt-8 w-[88%] max-w-[1100px] md:mt-10 lg:mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ColumnCard key={article.slug} article={article} showDate />
          ))}
        </div>
      </div>
    </div>
  );
}
