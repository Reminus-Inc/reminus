import { CustomDownloadButton } from "@/app/_components/ui/download-button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SectionHeader } from "../ui/section-header";

const features = [
  {
    image: "/illust-service-overview-1.svg",
    imageClassName: "-mt-5",
    imageHeight: 178,
    title: "プロダクト開発を最短で進める技術判断",
    points: [
      "MVP設計・機能の優先度・技術選定など、プロダクト成長に直結する技術判断を経営とセットで即断サポート。",
      "技術の不安で足を止めず、プロダクトとマーケットに集中できる状態を作ります。",
    ],
  },
  {
    image: "/illust-service-overview-2.svg",
    imageHeight: 158,
    title: "開発を停滞させない体制設計と採用支援",
    points: [
      "事業戦略に沿った内製・外注の判断や体制設計から、採用やパートナー選定まで支援。",
      "求人票やスカウト文面までサポート。採用コストと承諾率を最適化しエンジニア採用に向き合う土台を作ります。",
    ],
  },
  {
    image: "/illust-service-overview-3.svg",
    imageHeight: 163,
    title: "CTO採用待ちでプロダクトの進化を止めない",
    points: [
      "次の資金調達に求められるARR（売上）から逆算し、CTO不在でも技術判断と開発体制づくりを代行。",
      "専任CTOの採用を待たずに、今日から事業計画達成に向けてアクセルを踏める状態を作ります。",
    ],
  },
];

export function ServiceOverview({ className }: { className?: string }) {
  return (
    <section
      id="service-overview"
      className={cn("content-auto py-24 font-sans sm:py-32", className)}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="Reminus CTO パートナーとは？"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
          tag="h2"
        >
          技術・採用・開発体制に不安を抱えるスタートアップに、
          <br className="hidden lg:inline" />
          <span className="highlight-underline text-emerald-500">
            経営直下で伴走するCTO代行サービス
          </span>
          です。
        </SectionHeader>

        <div className="mt-16 flex flex-col gap-16 lg:gap-8 xl:gap-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col-reverse items-center gap-6 sm:gap-10 md:gap-20",
                index % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"
              )}
            >
              <div className="max-w-[180px] shrink-0 md:max-w-[240px] lg:max-w-[320px]">
                <Image
                  src={feature.image}
                  width={320}
                  height={feature.imageHeight}
                  alt={feature.title}
                  className={feature.imageClassName}
                />
              </div>
              <div className="flex flex-col gap-4 lg:gap-5">
                <p className="text-xl font-bold !leading-[1.6] tracking-wide text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl">
                  {feature.title}
                </p>
                <p className="whitespace-pre-line text-sm !leading-[1.9] tracking-wide text-gray-800 sm:text-base md:text-lg lg:max-w-[600px]">
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
