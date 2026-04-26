import Link from "next/link";
import { articles } from "@/app/blog/_articles";
import { SectionHeader } from "../ui/section-header";
import { PrimaryButton } from "../ui/primary-button";
import { ColumnCard } from "../ui/column-card";
import { Carousel } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function Column({ className }: { className?: string }) {
  const items = articles.slice(0, 3);

  return (
    <section
      id="column"
      className={cn(
        "content-auto overflow-x-hidden py-24 font-sans sm:py-32",
        className
      )}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="Column"
          align="center"
          headingClassName="text-3xl sm:text-[40px] !leading-[1.7]"
        >
          コラム
        </SectionHeader>

        <p className="mt-6 text-center text-sm !leading-[1.8] tracking-wide text-gray-800 sm:text-base md:text-lg">
          SaaSと技術の最前線で成果を出しているReminusが
          <span className="md:hidden">、</span>
          <br className="hidden md:block" />
          今日から役立つ具体的な情報をお届けしています。
        </p>

        <div className="mt-8">
          <div className="hidden md:grid md:grid-cols-3">
            {items.map((article) => (
              <ColumnCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="bleed md:hidden">
            <Carousel
              className="mx-8 sm:mx-16"
              items={items.map((article) => (
                <ColumnCard key={article.slug} article={article} />
              ))}
            />
          </div>
        </div>

        <div className="mt-10 flex justify-center md:mt-8">
          <PrimaryButton variant="outlined" asChild>
            <Link href="/blog/">コラム一覧を見る</Link>
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

