import { Chip } from "@/components/ui/chip";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <section id="management" className="w-full bg-white py-20 md:py-32">
      <div className="container mx-auto max-w-5xl px-5">
        <h2 className="mb-14 text-center text-3xl font-bold tracking-wide">
          経営者紹介
        </h2>

        <div className="flex flex-col gap-5 md:flex-row md:gap-20">
          <div className="flex items-center justify-center md:items-start md:justify-start">
            <div className="aspect-square h-[160px] w-[160px] overflow-hidden rounded-full border-4 border-gray-200 bg-white shadow-sm md:h-[240px] md:w-[240px]">
              <Image
                src="/profile.png"
                alt=""
                width={240}
                height={240}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="mb-4 text-3xl font-medium md:text-4xl">sumiren</h3>

            <div className="space-y-6">
              <div className="prose prose-gray max-w-none text-left">
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  株式会社ヘンリーで医療SaaSの急成長をソフトウェアエンジニアやSREとして牽引。その後、株式会社immedioでCTOを務め、Sales
                  Techマルチプロダクトの経営を技術から推進する。2社の社外CTOと3社の技術顧問として経営から専門支援まで広く支援し、
                  資金調達にも貢献した経験を持つ。2025年、株式会社Reminusを創業し、スタートアップの成長を加速する事業を展開している。
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
                          className="text-blue-600 underline decoration-blue-300 decoration-[0.5px] underline-offset-4 transition-all hover:text-blue-800 hover:decoration-blue-500 hover:decoration-[1px]"
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

              <div className="flex items-center gap-3">
                <Link
                  href="https://zenn.dev/sumiren"
                  className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Zenn
                </Link>
                <Link
                  href="https://twitter.com/sumiren_t"
                  className="inline-flex items-center rounded-full border border-gray-200 px-7 py-2 text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />X
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
