import Image from "next/image";
import Link from "next/link";
import { Section } from "@/app/(root-k)/_components/ui/section";
import { articles } from "@/app/blog/_articles";
import { MainHeading } from "@/app/(root-k)/_components/ui/main-heading";
import { ReminusLogo } from "../ui/reminus-logo";

export function NoteArticles() {
  return (
    <Section className="bg-gray-50" id="note-articles" data-nosnippet>
      <MainHeading>
        <span className="text-3xl">スタートアップ経営者向けに、技術・採用・組織づくりのTipsを発信中。</span>
      </MainHeading>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:-mt-6 lg:grid-cols-3">
        <NoteArticleList />
      </div>
    </Section>
  );
}

// 当時は note の記事を RSS から取っていたが、現在はサイト内ブログに移行しているので
// blog/_articles を描画する (見た目は当時のカードのまま)。
function NoteArticleList() {
  const articleList = articles.slice(0, 3);
  if (articleList.length === 0) return null;

  return (
    <>
      {articleList.map((article) => (
        <Link
          href={`/blog/${article.slug}/`}
          key={article.slug}
          className="rounded-md p-4 duration-300 hover:bg-muted md:p-6"
        >
          <div className="relative aspect-[128/67] overflow-hidden rounded-md">
            {article.thumbnail ? (
              <Image src={article.thumbnail} alt={article.title} fill />
            ) : (
              <FallbackImage />
            )}
          </div>
          <p className="mt-4 text-base font-bold tracking-wider">
            {article.title}
          </p>
          <p className="mt-1 text-sm text-gray-500">
            {article.publishedAtLabel}
          </p>
        </Link>
      ))}
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
