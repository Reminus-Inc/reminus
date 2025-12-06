import Image from "next/image";
import Link from "next/link";
import { fetchNoteArticleList } from "@/lib/fetch-note-articles";
import { ReminusLogo } from "../ui/reminus-logo";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { SectionHeader } from "../ui/section-header";
import { cn } from "@/lib/utils";
import { Carousel } from "@/components/ui/carousel";

const ARTICLE_TYPE = {
  INTERVIEW: "インタビュー",
  NOTE: "公式 note",
} as const;
type ArticleType = (typeof ARTICLE_TYPE)[keyof typeof ARTICLE_TYPE];

export function News() {
  return (
    <div id="news" className="bg-gray-50 py-32">
      <div className="mx-auto w-[82%] max-w-[1200px] bg-gray-50 md:w-[86%]">
        <SectionHeader
          label="News"
          align="center"
          headingClassName="text-3xl sm:text-[40px] text-center !leading-[1.7]"
        >
          お知らせ
        </SectionHeader>

        <div className="mt-12">
          <Suspense fallback={<NewsFallback />}>
            <NewsList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

function NewsFallback() {
  const skeleton = (
    <div className="flex flex-col gap-4">
      <Skeleton className="aspect-[16/9] w-full rounded-md bg-gray-200" />
      <Skeleton className="h-6 w-3/4 bg-gray-200" />
      <Skeleton className="h-4 w-1/4 bg-gray-200" />
    </div>
  );
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {skeleton}
      {skeleton}
      {skeleton}
      {skeleton}
      {skeleton}
      {skeleton}
    </div>
  );
}

async function NewsList() {
  const noteArticles = await fetchNoteArticleList();
  const formattedNoteArticles = noteArticles.map((article) => ({
    ...article,
    type: ARTICLE_TYPE.NOTE,
  }));

  const interviewArticle = {
    title: "ベンチャー通信に弊社インタビューが掲載されました",
    url: "https://v-tsushin.jp/interview/reminus",
    publishDateLabel: "2025/12/06",
    imageUrl: "/news-interview-1.jpg",
    type: ARTICLE_TYPE.INTERVIEW,
  };

  const articles = [interviewArticle, ...formattedNoteArticles].slice(0, 6);
  if (articles.length === 0) {
    return null;
  }

  return (
    <>
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, i) => (
          <NewsCard key={`${article.url}-${i}`} article={article} />
        ))}
      </div>
      <div className="bleed sm:hidden">
        <Carousel
          className="mx-8"
          items={articles.map((article, i) => (
            <NewsCard key={`${article.url}-${i}`} article={article} />
          ))}
        />
      </div>
    </>
  );
}

type Article = {
  title: string;
  url: string;
  publishDateLabel: string;
  imageUrl: string;
  type: ArticleType;
};

function NewsCard({ article }: { article: Article }) {
  const labelColor =
    article.type === ARTICLE_TYPE.INTERVIEW ? "bg-blue-500" : "bg-emerald-500";
  return (
    <Link
      href={article.url}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="group block h-full rounded-md p-3 duration-300 hover:bg-muted md:p-6"
    >
      <div className="relative aspect-[128/67] w-full overflow-hidden rounded-md bg-gray-100">
        {article.imageUrl ? (
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            unoptimized
          />
        ) : (
          <FallbackImage />
        )}
        <div
          className={cn(
            "absolute right-0 top-0 rounded-bl-md px-3 py-1 text-[11px] tracking-wide text-white",
            labelColor
          )}
        >
          {article.type}
        </div>
      </div>
      <p className="mt-4 text-base font-bold leading-[1.5] tracking-wider text-gray-800">
        {article.title}
      </p>
      <p className="mt-2 text-xs text-gray-600">{article.publishDateLabel}</p>
    </Link>
  );
}

function FallbackImage() {
  return (
    <div className="flex h-full w-full items-center justify-center border-8 border-gray-200">
      <ReminusLogo className="w-40" />
    </div>
  );
}
