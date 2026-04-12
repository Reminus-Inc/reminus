import { CustomDownloadButton } from "@/app/_components/ui/download-button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import type { ReactNode } from "react";
import { SectionHeader } from "../ui/section-header";

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
    image: "/illust-service-overview-1.svg",
    imageClassName: "-mt-5",
    imageHeight: 178,
    title: (
      <>
        最適なCTO担当者がリード。
        <br className="" />
        SaaSの複雑な課題に幅広く対応
      </>
    ),
    titleAlt: "最適なCTO担当者がリード。SaaSの複雑な課題に幅広く対応",
    points: [
      "SaaSの課題は、技術や製品・組織・戦略判断から実行まで広範です。",
      "Reminus CTOパートナーは、元CTO等の経験者から貴社に最適な担当者を選定します。人材紹介ではなく、Reminusが責任を持つCTO代行サービスです。"
    ],
  },
  {
    image: "/illust-service-overview-2.svg",
    imageHeight: 158,
    title: (
      <>
        壁打ちで終わらない。
        <br className="hidden lg:inline" />
        チームに入り込んで推進するハンズオン型
      </>
    ),
    titleAlt: "壁打ちで終わらない。チームに入り込んでハンズオン型",
    points: [
      "一般的な外部顧問は壁打ち時間のみの提供です。Reminusでは作業時間を確保するため、貴社内にCTOがいるかのように内側から技術を判断・推進できます。",
      "内製ノウハウの共有も強みです。",
    ],
  },
  {
    image: "/illust-service-overview-3.svg",
    imageHeight: 163,
    title: (
      <>
        CTOクラスの能力をリーズナブルに。
        <br />
        2ヶ月トライアルも可能
      </>
    ),
    titleAlt: "CTOクラスの能力をリーズナブルに。2ヶ月トライアルも可能",
    points: [
      "正社員CTOは年収1,000万円〜2,000万円。雇用はリスクもあり慎重な判断が必要です。",
      "Reminusならリーズナブルな価格に利用でき、独自ノウハウで品質も◎。2ヶ月トライアルも可能です。",
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

        <div className="mt-16 flex flex-col gap-16 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col-reverse items-center gap-8 sm:gap-12 lg:gap-16",
                index % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"
              )}
            >
              <div className="max-w-[200px] shrink-0 md:max-w-[280px] lg:max-w-[360px]">
                <Image
                  src={feature.image}
                  width={320}
                  height={feature.imageHeight}
                  alt={feature.titleAlt}
                  className={feature.imageClassName}
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

        <div className="bleed mt-16 px-4">
          <CustomDownloadButton
            title="資料ダウンロード"
            subtitle="詳細事例とプランを公開中"
          />
        </div>
      </div>
    </section>
  );
}
