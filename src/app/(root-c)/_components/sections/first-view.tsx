import { CustomDownloadButton } from "@/app/_components/ui/download-button";
import { cn } from "@/lib/utils";
import { Clock, HeartHandshake, UserRoundCheck } from "lucide-react";
import Image from "next/image";

export function FirstView() {
  return (
    <section className="relative overflow-hidden bg-[#1E3A8A]">
      {/* 背景: Sales Marker 系ディープブルー + 光・深度 (SP=右上光 / LG以上=左暗右明) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 lg:hidden"
        style={{
          backgroundImage: [
            "radial-gradient(95% 70% at 110% -5%, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.12) 35%, rgba(255,255,255,0) 70%)",
            "radial-gradient(110% 90% at -10% 115%, rgba(15,23,42,0.55) 0%, rgba(15,23,42,0.15) 45%, rgba(15,23,42,0) 75%)",
            "linear-gradient(225deg, #2E4FC7 0%, #1E3A8A 45%, #1E1B4B 100%)",
          ].join(", "),
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          backgroundImage: [
            "radial-gradient(120% 130% at 110% -10%, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.14) 28%, rgba(255,255,255,0.04) 55%, rgba(255,255,255,0) 82%)",
            "radial-gradient(120% 130% at -20% 110%, rgba(15,23,42,0.60) 0%, rgba(15,23,42,0.28) 35%, rgba(15,23,42,0.08) 60%, rgba(15,23,42,0) 82%)",
            "linear-gradient(225deg, #2E4FC7 0%, #1E3A8A 50%, #1E1B4B 100%)",
          ].join(", "),
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(%23n)' opacity='0.6'/></svg>\")",
          backgroundSize: "180px 180px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto flex w-[84%] max-w-[1200px] flex-col items-center gap-4 pb-8 pt-5 font-sans sm:gap-5 sm:pb-10 sm:pt-7 md:pb-12 md:pt-10 lg:w-[90%] lg:flex-row lg:gap-6 lg:pb-16 lg:pt-14 xl:gap-2">
        <div className="relative z-[1] w-full lg:w-fit lg:flex-none">
          <div
            aria-hidden
            role="img"
            className="-ml-1 aspect-[405/75] w-full max-w-[180px] min-[375px]:max-w-[196px] sm:max-w-[280px] md:max-w-[340px] xl:max-w-[405px]"
            style={{
              WebkitMaskImage: "url(/crown.png)",
              maskImage: "url(/crown.png)",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "left center",
              backgroundColor: "#D3B36B",
              filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.2))",
            }}
          />
          <Title className="mt-2 sm:mt-3" />
          <Description className="mt-2.5 sm:mt-3.5" />
          <div className="mt-1 flex justify-center sm:mt-2 md:mt-4 lg:hidden">
            <Image
              src="/hero-c.png"
              alt="CTO代行サービスイラスト"
              width={868}
              height={748}
              preload
              fetchPriority="high"
              className="w-[82%] max-w-[320px] sm:max-w-[380px]"
            />
          </div>
          <div className="bleed lg:bleed-none relative z-[1] -mt-2 px-4 sm:-mt-3 lg:mt-10 lg:px-0">
            <CustomDownloadButton
              title="資料ダウンロード"
              subtitle="Reminus CTOパートナー"
              className="lg:-ml-2"
              href="/c/download"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-[-2%] hidden items-center lg:flex xl:right-[-3%]">
          <Image
            src="/hero-c.png"
            alt="CTO代行サービスイラスト"
            width={868}
            height={748}
            className="lg:w-[520px] xl:w-[600px]"
          />
        </div>
      </div>
    </section>
  );
}

const Title = ({ className }: { className?: string }) => {
  return (
    <h1
      className={cn(
        "-mr-[8%] text-[23px] font-bold !leading-[1.5] tracking-wider text-white min-[375px]:text-[27px] sm:mr-0 sm:text-4xl md:text-5xl md:!leading-[1.4] lg:text-5xl lg:tracking-wide xl:text-[56px]",
        className
      )}
    >
      <span className="block">
        <span className="text-emerald-300">
          <span className="text-[105%]">SaaS</span>特化
        </span>
        <span className="text-[90%]">の</span>
        <span className="text-emerald-300">
          <span className="text-[105%]">CTO</span>代行
        </span>
        <span className="text-[90%]">が</span>
      </span>
      <span className="block">事業成長を技術で支える</span>
    </h1>
  );
};

const Description = ({ className }: { className?: string }) => {
  return (
    <ul
      className={cn(
        "ml-0 flex flex-col items-start gap-1 text-[12px] font-medium !leading-[1.5] tracking-wide min-[375px]:text-[13px] sm:gap-1.5 sm:text-sm md:ml-2.5 md:text-lg lg:text-base xl:text-lg",
        className
      )}
    >
      {(
        [
          {
            icon: UserRoundCheck,
            text: "フェーズに応じて最適なCTOが対応",
          },
          {
            icon: HeartHandshake,
            text: "チームの一員として開発推進",
          },
          { icon: Clock, text: "2ヶ月トライアル可" },
        ] as const
      ).map(({ icon: Icon, text }) => (
        <li
          key={text}
          className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-[3px] font-semibold text-emerald-900 shadow-[0_2px_10px_rgba(15,23,42,0.18)] ring-1 ring-inset ring-emerald-200 sm:gap-2 sm:px-3.5 sm:py-1"
        >
          <Icon
            className="size-[1.05em] flex-none text-emerald-600"
            strokeWidth={2.5}
          />
          {text}
        </li>
      ))}
    </ul>
  );
};
