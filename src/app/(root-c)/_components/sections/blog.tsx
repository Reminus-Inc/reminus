import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/app/blog/_articles";
import { SectionHeader } from "@/app/_components/ui/section-header";
import { PrimaryButton } from "@/app/_components/ui/primary-button";
import { cn } from "@/lib/utils";

const MAX_ITEMS = 3;

export function Blog({ className }: { className?: string }) {
  const items = articles.slice(0, MAX_ITEMS);

  return (
    <section
      id="blog"
      className={cn(
        "content-auto overflow-x-hidden py-24 font-sans sm:py-32",
        className
      )}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="Blog"
          align="center"
          headingClassName="text-3xl sm:text-[40px] !leading-[1.7]"
        >
          コラム
        </SectionHeader>

        <p className="mt-6 text-left sm:text-center  text-sm !leading-[1.8] tracking-wide text-gray-800 sm:text-base md:text-lg">
          SaaSと技術の最前線で成果を出しているReminusが、<br className="hidden md:block"/>具体的で今日からお役に立つ情報を提供しています。
        </p>

        {items.length > 0 && (
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {items.map((article) => (
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
                  <h3 className="mt-2.5 text-[15px] font-bold !leading-[1.65] tracking-wide text-gray-800 transition-colors group-hover:text-emerald-600 md:text-base">
                    {article.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-12 flex justify-center sm:mt-16">
          <PrimaryButton variant="outlined" asChild>
            <Link href="/blog/">記事一覧を見る</Link>
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
