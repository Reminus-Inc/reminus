import { FvDownloadButton } from "../ui/fv-download-button";
import { cn } from "@/lib/utils";
import { Clock, HeartHandshake, UserRoundCheck } from "lucide-react";
import Image from "next/image";

export function FirstView() {
  return (
    <section className="relative overflow-hidden bg-[#008255]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, #00c386 0%, #00a86d 45%, #008255 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [--grid-size:40px] md:[--grid-size:64px] lg:[--grid-size:80px]"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize:
            "var(--grid-size) var(--grid-size), var(--grid-size) var(--grid-size)",
          WebkitMaskImage: [
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 22%, black 40%, black 60%, rgba(0,0,0,0.5) 78%, transparent 100%)",
            "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 12%, black 28%, black 72%, rgba(0,0,0,0.7) 88%, rgba(0,0,0,0.5) 100%)",
          ].join(", "),
          WebkitMaskComposite: "source-in",
          maskImage: [
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 22%, black 40%, black 60%, rgba(0,0,0,0.5) 78%, transparent 100%)",
            "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 12%, black 28%, black 72%, rgba(0,0,0,0.7) 88%, rgba(0,0,0,0.5) 100%)",
          ].join(", "),
          maskComposite: "intersect",
        }}
      />

      <div className="relative mx-auto flex w-[88%] max-w-[1200px] flex-col gap-6 pb-12 pt-10 font-sans sm:gap-7 sm:pb-16 sm:pt-12 lg:w-[92%] lg:max-w-[1180px] lg:flex-row lg:gap-6 lg:pb-12 lg:pt-16 xl:max-w-[1220px]">
        <div className="z-[1] w-full lg:w-fit lg:max-w-[720px] lg:flex-none xl:max-w-[820px]">
          <Title />
          <Description className="mt-6 sm:mt-8" />
          <div className="mt-7 sm:mt-9 lg:mt-10">
            <FvDownloadButton
              variant="yellow"
              title="資料ダウンロード"
              subtitle="レミナスがわかる"
              href="/download"
              className="mx-auto sm:mx-0"
            />
          </div>
          <Image
            src="/crown-c.png"
            alt="サービス長期継続率85% / 開発立ち上げまで平均2ヶ月"
            width={640}
            height={119}
            sizes="(min-width: 640px) 380px, 320px"
            className="mx-auto mt-6 block w-full max-w-[320px] sm:mx-0 sm:mt-7 sm:max-w-[380px] lg:mt-9"
          />
        </div>

        <Image
          src="/ChatGPT_Image_2026年5月10日_21_53_55-removebg.png"
          alt="CTO代行サービスイラスト"
          width={868}
          height={748}
          sizes="(min-width: 1280px) 640px, (min-width: 1024px) 540px, 0px"
          className="pointer-events-none hidden lg:absolute lg:inset-y-0 lg:right-[10px] lg:m-auto lg:block lg:w-[540px] xl:w-[640px]"
        />
      </div>
    </section>
  );
}

const Title = ({ className }: { className?: string }) => {
  return (
    <h1 className={cn("font-extrabold tracking-widest", className)}>
      <span className="mb-3 flex flex-wrap items-end gap-x-2 gap-y-2 lg:mb-4 lg:flex-nowrap">
        <span className="flex items-end gap-2 whitespace-nowrap">
          <span className="bg-white px-2 py-1 text-[32px] leading-none text-emerald-600 min-[375px]:text-[40px] sm:text-[44px] md:text-[52px] lg:text-[60px]">
            <span className="text-[108%]">CTO</span>代行
          </span>
          <span className="text-[24px] leading-none text-white min-[375px]:text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px]">
            が
          </span>
        </span>
      </span>
      <span className="block text-[22px] !leading-tight text-white min-[375px]:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px]">
        事業成長を技術で支える
      </span>
    </h1>
  );
};

const Description = ({ className }: { className?: string }) => {
  return (
    <ul
      className={cn(
        "flex flex-col items-start gap-1.5 text-white sm:gap-2",
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
            text: "貴社チームの一員として参画",
          },
          { icon: Clock, text: "2ヶ月トライアル可" },
        ] as const
      ).map(({ icon: Icon, text }) => (
        <li
          key={text}
          className="flex items-center gap-2 text-base font-medium tracking-wider sm:text-lg lg:gap-3 lg:text-xl"
        >
          <Icon className="size-5 flex-none sm:size-6" strokeWidth={2.5} />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
};
