import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/app/blog/_articles/types";

export function ColumnCard({
  article,
  showDate = false,
}: {
  article: Article;
  showDate?: boolean;
}) {
  return (
    <Link
      href={`/blog/${article.slug}/`}
      className="block h-full p-2.5 duration-300 hover:bg-muted sm:p-4 md:p-3 lg:p-5"
    >
      <div className="relative aspect-[128/67] w-full overflow-hidden bg-gray-100">
        {article.thumbnail && (
          <Image
            src={article.thumbnail}
            alt={article.title}
            fill
            sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 88vw"
            className="object-cover"
          />
        )}
      </div>
      <h3 className="mt-3.5 text-base font-bold !leading-[1.7] tracking-wide text-gray-800 transition-colors md:text-sm lg:text-lg">
        {article.title}
      </h3>
      {showDate && (
        <time className="mt-2 block text-xs text-gray-600">
          {article.publishedAtLabel}
        </time>
      )}
    </Link>
  );
}
