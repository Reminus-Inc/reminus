import Image from "next/image";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";
import { SectionHeader } from "../ui/section-header";
import { cn } from "@/lib/utils";

export function Management({ className }: { className?: string }) {
  return (
    <section
      id="management"
      className={cn("content-auto py-24 font-sans sm:py-32", className)}
      data-nosnippet
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="Management"
          align="center"
          headingClassName="text-3xl sm:text-[40px] !leading-[1.7]"
        >
          経営者紹介
        </SectionHeader>

        <div className="mt-16 flex flex-col gap-8 md:gap-20 lg:flex-row">
          <div className="flex items-center justify-center md:items-start">
            <div className="h-[auto] w-[80%] max-w-[400px] rounded-full md:w-[360px]">
              <Image
                src="/profile.png"
                alt=""
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <h3>
              <span className="text-2xl font-bold tracking-wider text-gray-800 md:text-3xl">
                太田 蓮
              </span>
              <span className="ml-3 text-sm font-medium tracking-wider text-gray-600">
                代表取締役
              </span>
            </h3>

            <div className="mt-5 space-y-8">
              <div className="max-w-none text-left">
                <p className="text-sm !leading-[1.9] tracking-wide text-gray-900 md:text-base">
                  株式会社ヘンリーで医療SaaSをエンジニアとして牽引後、株式会社immedioでCTOとしてSaaS経営を技術から推進。社外CTO・技術顧問として累計6社支援。20社に携わるなかで、戦略も実行も経営者の情熱も揃っているのに、技術のせいで事業が停滞する&ldquo;もったいない&rdquo;を何度も目にする。魅力的なビジョンが技術で止まることなく事業として育っていく世界をつくるため、2025年にReminusを創業。
                </p>
              </div>

              <Link
                href="https://v-tsushin.jp/interview/reminus/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-5 rounded border border-gray-300 px-5 py-4 shadow-[0px_0px_24px_0px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0px_0px_24px_0px_rgba(0,0,0,0.08)] sm:px-6 sm:py-5"
              >
                <div className="hidden shrink-0 pt-1.5 sm:block">
                  <Image
                    src="/logos/v-tsushin.png"
                    alt="ベンチャー通信"
                    width={140}
                    height={29}
                    className="h-fit"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:gap-1">
                  <p className="text-sm font-semibold !leading-[1.6] tracking-wider text-gray-800 sm:text-base">
                    ベンチャー通信に弊社インタビューが掲載されました
                    <SquareArrowOutUpRight
                      className="align-center -mt-0.5 ml-1.5 inline-block size-3.5 text-blue-500 sm:ml-2 sm:size-4"
                      strokeWidth={3}
                    />
                  </p>
                  <p className="text-xs font-medium tracking-wider text-gray-500">
                    記事を読む
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
