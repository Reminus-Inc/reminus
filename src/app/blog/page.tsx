import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { articles } from "./_articles";

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
  },
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-[calc(100svh-80px)] bg-white pb-20 font-sans md:pb-24">
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

      {/* 記事一覧 */}
      <div className="mx-auto mt-8 w-[88%] max-w-[1100px] md:mt-10 lg:mt-12">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}/`}
              className="group block"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                {article.thumbnail && (
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 88vw"
                    className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.04] border-2 border-gray-200"
                  />
                )}
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <time className="text-[11px] font-medium tracking-wider text-gray-500 md:text-xs">
                    {article.publishedAtLabel}
                  </time>
                  <ArrowUpRight className="size-3.5 text-gray-400 transition-colors group-hover:text-emerald-600" />
                </div>
                <h2 className="mt-2.5 text-[15px] font-bold !leading-[1.65] tracking-wide text-gray-800 transition-colors group-hover:text-emerald-600 md:text-base">
                  {article.title}

                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
