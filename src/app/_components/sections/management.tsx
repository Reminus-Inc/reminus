import { Chip } from "@/components/ui/chip";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "../ui/section-header";

const NEWS_TYPE = {
  SPEAKING: "登壇",
  WRITING: "執筆",
  CONTRIBUTING: "寄稿",
} as const;
type NewsType = (typeof NEWS_TYPE)[keyof typeof NEWS_TYPE];
const news = [
  {
    title:
      "OpenTelemetryって本当に必要？今知っておくべきオブザーバビリティとは",
    link: "https://offers-jp.connpass.com/event/342445/",
    type: NEWS_TYPE.SPEAKING,
  },
  {
    title: "フロントエンドの技術選定 ~2023を振り返る~",
    link: "https://findy.connpass.com/event/306714/",
    type: NEWS_TYPE.SPEAKING,
  },
  {
    title: "Software Design 2025年1月号 Web APIテストの意義",
    link: "https://gihyo.jp/magazine/SD/archive/2025/202501",
    type: NEWS_TYPE.CONTRIBUTING,
  },
  {
    title: "ヘンリーのオブザーバビリティ成熟度を考える",
    link: "https://dev.henry.jp/entry/henry-observability-maturity",
    type: NEWS_TYPE.WRITING,
  },
  {
    title: "Next.jsのPPR + StreamingがVercelで実行されるときの全体像を掴む",
    link: "https://zenn.dev/sumiren/articles/8156bab8c95fcf",
    type: NEWS_TYPE.WRITING,
  },
];

const getChipColor = (newsType: NewsType) => {
  switch (newsType) {
    case NEWS_TYPE.SPEAKING:
      return "blue" as const;
    case NEWS_TYPE.CONTRIBUTING:
      return "green" as const;
    case NEWS_TYPE.WRITING:
      return "orange" as const;
    default:
      return "default" as const;
  }
};

export function Management() {
  return (
    <div id="management" className="bg-gray-50 py-24 sm:py-32" data-nosnippet>
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="Management"
          align="center"
          headingClassName="text-3xl sm:text-[40px] !leading-[1.7]"
        >
          経営者紹介
        </SectionHeader>

        <div className="mt-16 flex flex-col gap-8 md:flex-row md:gap-20">
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
            <h3 className="mb-4">
              <span className="text-2xl font-bold tracking-wider text-gray-800 md:text-3xl">
                太田 蓮
              </span>
              <span className="ml-2 text-sm tracking-wide text-gray-700">
                代表取締役
              </span>
            </h3>

            <div className="space-y-8">
              <div className="max-w-none text-left">
                <p className="text-sm !leading-[1.9] tracking-wide text-gray-800 md:text-base">
                  株式会社ヘンリーで医療SaaSの急成長をソフトウェアエンジニアやSREとして牽引後、株式会社immedioでCTOを務め、Sales
                  Techマルチプロダクトの経営を技術から推進する。社外CTO・技術顧問として累計5社を支援し、資金調達にも貢献した経験を持つ。2025年、株式会社Reminusを創業。
                </p>
              </div>

              <div>
                <h4 className="mb-3 text-lg tracking-wide text-gray-800">
                  コンテンツ発信
                </h4>
                <ul className="list-none space-y-2.5 text-sm leading-relaxed text-gray-600 md:text-base md:leading-relaxed">
                  {news.map((news) => (
                    <li key={news.title} className="flex items-baseline gap-2">
                      <Chip color={getChipColor(news.type)}>{news.type}</Chip>
                      <p className="flex-1">
                        <Link
                          href={news.link}
                          className="text-blue-600 decoration-blue-300 decoration-[0.5px] underline-offset-4 transition-all hover:underline hover:decoration-blue-600 hover:decoration-[1px]"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {news.title}
                        </Link>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
