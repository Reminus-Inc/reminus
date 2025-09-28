import Image from "next/image";
import Link from "next/link";
import { Section } from "@/app/_components/ui/section";
import { fetchNoteArticleList } from "@/lib/fetch-note-articles";
import { MainHeading } from "@/app/_components/ui/main-heading";
import { ReminusLogo } from "../ui/reminus-logo";
import { Suspense } from "react";

import { Skeleton } from "@/components/ui/skeleton";

export function NoteArticles() {
  return (
    <Section className="bg-gray-50" id="note-articles">
      <MainHeading>公式 note</MainHeading>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:-mt-6 lg:grid-cols-3">
        <Suspense fallback={<NoteArticlesFallback />}>
          <NoteArticleList />
        </Suspense>
      </div>
    </Section>
  );
}

function NoteArticlesFallback() {
  const skeleton = (
    <div className="p-4 md:p-6">
      <Skeleton className="h-60 w-full bg-gray-200" />
    </div>
  );
  return (
    <>
      {skeleton}
      {skeleton}
      {skeleton}
    </>
  );
}

async function NoteArticleList() {
  const articleList = await fetchNoteArticleList();
  if (articleList == null || articleList.length === 0) {
    return null;
  }

  return (
    <>
      {articleList.map((article) => {
        return (
          <Link
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            key={article.url}
            className="rounded-md p-4 duration-300 hover:bg-muted md:p-6"
          >
            <div className="relative aspect-[128/67] overflow-hidden rounded-md">
              {article.imageUrl ? (
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  unoptimized
                />
              ) : (
                <FallbackImage />
              )}
            </div>
            <p className="mt-4 text-base font-bold tracking-wider">
              {article.title}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              {article.publishDateLabel}
            </p>
          </Link>
        );
      })}
    </>
  );
}

function FallbackImage() {
  return (
    <div className="flex h-full w-full items-center justify-center border-8 border-gray-200">
      <ReminusLogo className="w-40" />
    </div>
  );
}
