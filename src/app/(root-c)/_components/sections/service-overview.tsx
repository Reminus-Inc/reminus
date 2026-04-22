import { CustomDownloadButton } from "@/app/_components/ui/download-button";
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
    image: "/illust-service-overview-1-new.svg",
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
      "元CTO等の経験者から貴社に最適なCTO代行担当者を選定します。人材紹介ではなく、Reminusが責任を持つCTO代行サービスです。"
    ],
  },
  {
    image: "/illust-service-overview-2-new.svg",
    imageHeight: 240,
    title: (
      <>
        顧問や壁打ちではない。
        <br className="hidden lg:inline" />
        チームに入り込んで推進するハンズオン型
      </>
    ),
    titleAlt: "顧問や壁打ちではない。チームに入り込んでハンズオン型",
    points: [
      "Reminusでは作業時間をしっかり確保するため、貴社内にCTOがいるかのように内側から技術を推進します。",
      "内製ノウハウの共有も強みです。",
    ],
  },
  {
    image: "/illust-service-overview-3-new.svg",
    imageHeight: 240,
    title: (
      <>
        CTOクラスの能力をリーズナブルに。
        <br />
        2ヶ月トライアルも可能
      </>
    ),
    titleAlt: "CTOクラスの能力をリーズナブルに。2ヶ月トライアルも可能",
    points: [
      "CTO雇用は年収1,000万〜と高額かつ相性リスクも。",
      "Reminusならリーズナブルかつ独自ノウハウで品質も◎。2ヶ月トライアルも可能です。",
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
                index % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"
              )}
            >
              <div className="w-full max-w-[300px] shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-white md:max-w-[340px] lg:max-w-[380px]">
                <Image
                  src={feature.image}
                  width={320}
                  height={feature.imageHeight}
                  alt={feature.titleAlt}
                  className={cn("h-auto w-full", feature.imageClassName)}
                />
              </div>
              <div className="flex max-w-[600px] flex-col gap-4 lg:gap-5">
                <p className="text-lg font-bold !leading-[1.6] tracking-wide text-gray-800 sm:text-xl md:text-2xl lg:text-3xl">
                  {feature.title}
                </p>
                <p className="whitespace-pre-line text-sm !leading-[1.8] md:!leading-[1.9] tracking-wide text-gray-800 sm:text-base md:text-lg">
                  {feature.points.join("")}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bleed mt-20 px-4">
          <CustomDownloadButton
            title="資料ダウンロード"
            subtitle="提供内容と事例を公開中"
            href="/c/download"
          />
        </div>
      </div>
    </section>
  );
}
