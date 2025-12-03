import Image from "next/image";
import Link from "next/link";
import { Section } from "@/app/_components/ui/section";
import { fetchNoteArticleList } from "@/lib/fetch-note-articles";
import { ReminusLogo } from "../ui/reminus-logo";
import { Suspense } from "react";
import { ContactButton } from "../ui/contact-button";

import { Skeleton } from "@/components/ui/skeleton";

export function NoteArticles() {
  return (
    <Section className="bg-gray-50" id="note-articles" data-nosnippet>
      <div className="flex flex-col items-center gap-3">
        {/* 上部ラベル */}
        <div className="flex items-center gap-2.5">
          <div className="h-3 w-3 rounded-full bg-emerald-200" />
          <p className="text-gray-800 tracking-wider text-sm sm:text-base">公式note</p>
        </div>

        {/* メイン見出し */}
          <h2 className="text-xl sm:text-3xl font-bold tracking-wider leading-[1.7] sm:leading-[1.7] text-gray-800 text-center">
            スタートアップ経営者向けに、<br />
            <span className="relative inline-block">
              <span className="relative z-[2] text-emerald-500">
                技術・採用・組織づくり
              </span>
              <span className="absolute bottom-[8px] left-0 right-0 z-[1] h-[8px] sm:h-[14px] bg-yellow-200" />
            </span>
            のTipsを発信中！
          </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 mt-6">
        <Suspense fallback={<NoteArticlesFallback />}>
          <NoteArticleList />
        </Suspense>
      </div>

      {/* 無料相談ボタン */}
      <div className="mt-10 flex justify-center">
        <ContactButton size="default" />
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
            rel="nofollow noopener noreferrer"
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
