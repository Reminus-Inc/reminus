import { FvDownloadButton } from "../ui/fv-download-button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import type { ReactNode } from "react";
import { SectionHeader } from "@/app/_components/ui/section-header";

type Feature = {
  image: string;
  imageClassName?: string;
  imageHeight: number;
  title: ReactNode;
  titleAlt: string;
  points: string[];
};

const features: Feature[] = [
  {
    image: "/illust-service-overview-1-v2.png",
    imageHeight: 240,
    title: (
      <>
        最適なCTOがリード。
        <br className="" />
        SaaSの複雑な課題に幅広く対応
      </>
    ),
    titleAlt: "最適なCTOがリード。SaaSの複雑な課題に幅広く対応",
    points: [
      "元CTOや有名企業のリードエンジニアといった経験者から、貴社に最適なCTOを選定します。人材紹介ではなく、Reminusが責任を持つCTO代行サービスです。",
    ],
  },
  {
    image: "/illust-service-overview-2-new.svg",
    imageHeight: 240,
    title: (
      <>
        顧問や壁打ちではない。
        <br className="hidden lg:inline" />
        チームに入り込んで推進する伴走型
      </>
    ),
    titleAlt: "顧問や壁打ちではない。チームに入り込んで推進する伴走型",
    points: [
      "レミナスCTO代行では作業時間をしっかり確保し、貴社内にCTOがいるかのように内側から技術を推進します。",
      "ノウハウも惜しみなくシェアします。",
    ],
  },
  {
    image: "/illust-service-overview-3-v2.svg",
    imageHeight: 240,
    title: (
      <>
        CTOクラスの能力をリーズナブルに。
        <br />
        2ヶ月トライアルも可能
      </>
    ),
    titleAlt: "CTOクラスの能力をリーズナブルに。2ヶ月トライアルあり",
    points: [
      "CTO雇用は高額かつリスク大。初年度は採用費含め2000万円も。",
      "レミナスCTO代行は独自ノウハウで品質が高く、柔軟にご利用いただけます。",
    ],
  },
];

export function ServiceOverview({ className }: { className?: string }) {
  return (
    <section
      id="service-overview"
      className={cn("content-auto py-24 font-sans sm:py-32", className)}
    >
      <div className="mx-auto w-[88%] max-w-[1000px] md:w-[86%]">
        <SectionHeader
          label="Feature"
          align="center"
          headingClassName="text-3xl sm:text-4xl md:text-[40px] !leading-[1.7]"
        >
          サービスの特長
        </SectionHeader>

        <div className="mt-16 flex flex-col gap-16 lg:gap-18">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col-reverse items-center gap-8 sm:gap-12 lg:gap-16",
                index % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"
              )}
            >
              <div className="w-full max-w-[460px] shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px]">
                <Image
                  src={feature.image}
                  width={320}
                  height={feature.imageHeight}
                  alt={feature.titleAlt}
                  sizes="(min-width: 1024px) 380px, (min-width: 768px) 340px, (min-width: 640px) 300px, 460px"
                  className={cn("h-auto w-full", feature.imageClassName)}
                />
              </div>
              <div className="flex max-w-[600px] flex-col gap-4 lg:gap-5">
                <span className="w-fit text-sm font-bold tracking-wider text-emerald-600 underline decoration-emerald-400 decoration-2 underline-offset-4 sm:text-base">
                  特長 {index + 1}
                </span>
                <p className="text-lg font-bold !leading-[1.6] tracking-wide text-gray-800 sm:text-xl md:text-2xl lg:text-3xl">
                  {feature.title}
                </p>
                <p className="whitespace-pre-line text-sm !leading-[1.8] tracking-wide text-gray-800 sm:text-base md:text-lg md:!leading-[1.9]">
                  {feature.points.join("")}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bleed mt-20 px-4">
          <FvDownloadButton
            variant="filled"
            imageSrc="/document-cover-c-white.png"
            title="資料ダウンロード"
            subtitle="提供内容と事例を公開中"
            href="/download"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
