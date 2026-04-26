import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { articles, getArticleBySlug } from "../_articles";
import { ArticleCta } from "../_components/article-cta";
import { ColumnCard } from "@/app/_components/ui/column-card";

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
    description: article.description,
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/blog/${slug}/`,
      images: article.thumbnail ? [article.thumbnail] : undefined,
      type: "article",
      publishedTime: article.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description || undefined,
      ...(article.thumbnail ? { images: [article.thumbnail] } : {}),
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

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      ...(article.description && { description: article.description }),
      ...(article.thumbnail && { image: article.thumbnail }),
      datePublished: article.publishedAt,
      dateModified: article.publishedAt,
      author: {
        "@type": "Organization",
        name: "株式会社Reminus",
        url: "https://www.reminus.co.jp",
      },
      publisher: {
        "@type": "Organization",
        name: "株式会社Reminus",
        url: "https://www.reminus.co.jp",
      },
      mainEntityOfPage: `https://www.reminus.co.jp/blog/${slug}/`,
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
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: `https://www.reminus.co.jp/blog/${slug}/`,
        },
      ],
    },
  ];

  return (
    <div className="bg-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* パンくず */}
      <div className="mx-auto w-[88%] max-w-[820px] pt-5 md:pt-7">
        <nav className="text-xs text-gray-400 md:text-sm">
          <Link href="/" className="hover:text-emerald-600">ホーム</Link>
          <span className="mx-1">&gt;</span>
          <Link href="/blog/" className="hover:text-emerald-600">ブログ/コラム</Link>
          <span className="mx-1">&gt;</span>
          <span className="text-gray-500">{article.title}</span>
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
        <h1 className="mt-5 text-xl font-bold !leading-[1.5] tracking-wider text-gray-800 md:text-[28px] md:!leading-[1.55]">
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
          <div className="relative aspect-[128/67] w-full overflow-hidden bg-gray-100">
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
          className="blog-body prose prose-slate max-w-none prose-headings:tracking-wider prose-headings:text-gray-800 prose-h2:mt-16 prose-h2:border-l-4 prose-h2:border-emerald-500 prose-h2:pl-4 prose-h2:text-2xl prose-h2:!leading-[1.5] md:prose-h2:text-[28px] prose-h3:mt-10 prose-h3:text-xl prose-h3:text-gray-800 md:prose-h3:text-2xl prose-p:!leading-[2] prose-p:tracking-wide prose-p:text-gray-700 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-800 prose-blockquote:border-l-emerald-400 prose-blockquote:bg-emerald-50/40 prose-blockquote:py-0.5 prose-blockquote:not-italic prose-blockquote:text-gray-700 prose-figure:mx-auto prose-figure:my-10 prose-figcaption:text-center prose-figcaption:text-xs prose-figcaption:text-gray-500 prose-img:mx-auto"
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
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((related) => (
              <ColumnCard key={related.slug} article={related} />
            ))}
          </div>
        </section>
      )}

      {/* フッター余白（関連記事なしの場合） */}
      {relatedArticles.length === 0 && <div className="pb-24" />}
    </div>
  );
}
