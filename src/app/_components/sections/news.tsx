import Image from "next/image";
import Link from "next/link";
import { fetchNoteArticleList } from "@/lib/fetch-note-articles";
import { ReminusLogo } from "../ui/reminus-logo";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { SectionHeader } from "../ui/section-header";
import { cn } from "@/lib/utils";
import { Carousel } from "@/components/ui/carousel";

export function News({ className }: { className?: string }) {
  return (
    <section
      id="media"
      className={cn(
        "content-auto overflow-x-hidden py-24 font-sans sm:py-32",
        className
      )}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="Media"
          align="center"
          headingClassName="text-3xl sm:text-[40px] !leading-[1.7]"
        >
          お役立ち情報
        </SectionHeader>

        <p className="mt-6 text-center text-sm !leading-[1.8] tracking-wide text-gray-800 sm:text-base md:text-lg">
          非エンジニア経営者向けに技術・エンジニア採用の実践知や考え方を発信しています。
        </p>

        <div className="mt-12">
          <Suspense fallback={<NewsFallback />}>
            <NewsList />
          </Suspense>
        </div>
      </div>
    </section>
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
  const articles = noteArticles;
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
};

function NewsCard({ article }: { article: Article }) {
  return (
    <Link
      href={article.url}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="group block h-full rounded-md p-3 duration-300 hover:bg-muted md:p-5"
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
