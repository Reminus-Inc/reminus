import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { articles, getArticleBySlug } from "../_articles";
import { ArticleCta } from "../_components/article-cta";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Reminus Blog`,
    description: article.description || undefined,
    robots: { index: false, follow: false }, // 一旦noindex
    openGraph: {
      title: article.title,
      description: article.description || undefined,
      images: article.thumbnail ? [article.thumbnail] : undefined,
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <div className="bg-white font-sans">
      {/* パンくず */}
      <div className="mx-auto w-[88%] max-w-[820px] pt-6 md:pt-10">
        <nav className="flex items-center gap-1.5 text-xs text-gray-500 md:text-sm">
          <Link href="/" className="hover:text-emerald-600">
            Home
          </Link>
          <ChevronRight className="size-3.5" />
          <Link href="/blog/" className="hover:text-emerald-600">
            Blog
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="truncate text-gray-400">{article.title}</span>
        </nav>
      </div>

      {/* 記事ヘッダー */}
      <header className="mx-auto mt-10 w-[88%] max-w-[820px] md:mt-16">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-emerald-500" />
          <p className="text-xs font-bold tracking-[0.2em] text-emerald-600 md:text-sm">
            BLOG
          </p>
        </div>
        <h1 className="mt-5 text-2xl font-bold !leading-[1.5] tracking-wider text-gray-800 md:text-[34px] md:!leading-[1.55]">
          {article.title}
        </h1>
        <div className="mt-6 flex items-center gap-3 text-xs text-gray-500 md:text-sm">
          <time className="font-medium tracking-wider">
            {article.publishedAtLabel}
          </time>
        </div>
      </header>

      {/* アイキャッチ */}
      {article.thumbnail && (
        <div className="mx-auto mt-10 w-[88%] max-w-[760px] md:mt-14">
          <div className="relative aspect-[128/67] w-full overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={article.thumbnail}
              alt={article.title}
              fill
              priority
              sizes="(min-width: 760px) 760px, 88vw"
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* 本文 */}
      <article className="mx-auto mt-14 w-[88%] max-w-[760px] md:mt-20">
        <div
          className="blog-body prose prose-slate max-w-none prose-headings:tracking-wider prose-headings:text-gray-800 prose-h2:mt-16 prose-h2:border-l-4 prose-h2:border-emerald-500 prose-h2:pl-4 prose-h2:text-2xl prose-h2:!leading-[1.5] md:prose-h2:text-[28px] prose-h3:mt-10 prose-h3:text-xl prose-h3:text-gray-800 md:prose-h3:text-2xl prose-p:!leading-[2] prose-p:tracking-wide prose-p:text-gray-700 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-800 prose-blockquote:border-l-emerald-400 prose-blockquote:bg-emerald-50/40 prose-blockquote:py-0.5 prose-blockquote:not-italic prose-blockquote:text-gray-700 prose-figure:mx-auto prose-figure:my-10 prose-figcaption:text-center prose-figcaption:text-xs prose-figcaption:text-gray-500 prose-img:mx-auto prose-img:rounded-md"
          // eslint-disable-next-line react/no-danger -- 自サイトのnote記事から取得した本文のため信頼できる
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />
      </article>

      {/* 記事末尾CTA */}
      <ArticleCta />

      {/* 記事一覧に戻る */}
      <div className="mx-auto mt-20 w-[88%] max-w-[820px]">
        <div className="border-t border-gray-200 pt-10">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700"
          >
            <ArrowLeft className="size-4" />
            記事一覧に戻る
          </Link>
        </div>
      </div>

      {/* 関連記事 */}
      {relatedArticles.length > 0 && (
        <section className="mx-auto mt-20 w-[88%] max-w-[1100px] pb-28 md:mt-28">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-emerald-500" />
            <p className="text-xs font-bold tracking-[0.2em] text-emerald-600 md:text-sm">
              RELATED
            </p>
          </div>
          <h2 className="mt-4 text-xl font-bold tracking-wider text-gray-800 md:text-2xl">
            その他の記事
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}/`}
                className="group block"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-gray-100">
                  {related.thumbnail && (
                    <Image
                      src={related.thumbnail}
                      alt={related.title}
                      fill
                      sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 88vw"
                      className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]"
                    />
                  )}
                </div>
                <div className="mt-5">
                  <div className="flex items-center gap-3">
                    <time className="text-xs font-medium tracking-wider text-gray-500">
                      {related.publishedAtLabel}
                    </time>
                    <span className="h-px flex-1 bg-gray-200" />
                    <ArrowUpRight className="size-4 text-gray-400 transition-colors group-hover:text-emerald-600" />
                  </div>
                  <h3 className="mt-3 text-base font-bold !leading-[1.7] tracking-wide text-gray-800 transition-colors group-hover:text-emerald-600">
                    {related.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* フッター余白（関連記事なしの場合） */}
      {relatedArticles.length === 0 && <div className="pb-24" />}
    </div>
  );
}
