import { Chip } from "@/components/ui/chip";
import Image from "next/image";
import Link from "next/link";
import { MainHeading } from "../ui/main-heading";
import { Section } from "../ui/section";

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
    <Section id="management" data-nosnippet>
      <MainHeading>経営者紹介</MainHeading>

      <div className="flex flex-col gap-5 md:flex-row md:gap-20">
        <div className="flex items-center justify-center">
          <div className="h-[auto] w-[90%] max-w-[400px] rounded-full border-4 border-gray-200 md:w-[400px]">
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
          <h3 className="mb-3 text-2xl font-bold tracking-wide text-gray-800 md:text-3xl">
            太田 蓮
            <span className="ml-1 text-sm tracking-normal text-gray-500">
              代表取締役
            </span>
          </h3>

          <div className="space-y-8">
            <div className="prose prose-gray max-w-none text-left">
              <p className="mb-3 text-sm leading-7 text-gray-600 md:text-base md:leading-7">
                株式会社ヘンリーで医療SaaSの急成長をソフトウェアエンジニアやSREとして牽引後、株式会社immedioでCTOを務め、Sales
                Techマルチプロダクトの経営を技術から推進する。社外CTO・技術顧問として累計5社を支援し、資金調達にも貢献した経験を持つ。2025年、株式会社Reminusを創業。
              </p>

              <div className="flex items-center gap-3">
                <SocialLink type="x" />
                <SocialLink type="zenn" />
              </div>
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
          </div>
        </div>
      </div>
    </Section>
  );
}

type SocialLinkProps = {
  type: "x" | "zenn";
};
function SocialLink({ type }: SocialLinkProps) {
  const href =
    type === "x" ? "https://twitter.com/sumiren_t" : "https://zenn.dev/sumiren";
  const image = type === "x" ? "/logo-x.png" : "/logo-zenn.png";
  const alt = type === "x" ? "X" : "Zenn";
  return (
    <Link
      href={href}
      className="relative inline-flex h-[40px] min-w-[140px] items-center rounded-full border border-gray-200 px-7 py-2 text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src={image} alt={alt} fill className="object-contain py-2.5" />
    </Link>
  );
}
