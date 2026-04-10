import { CustomDownloadButton } from "@/app/_components/ui/download-button";
import { cn } from "@/lib/utils";
import { Clock, HeartHandshake, UserRoundCheck } from "lucide-react";
import Image from "next/image";

export function FirstView() {
  return (
    <div className="relative mx-auto flex w-[84%] max-w-[1200px] flex-col items-center gap-8 pt-4 font-sans sm:pt-4 md:pt-6 lg:w-[90%] lg:flex-row xl:gap-2">
      <div className="relative z-[1] w-full lg:w-fit lg:flex-none">
        <Image
          src="/crown.png"
          alt=""
          width={405}
          height={75}
          className="-ml-1 max-w-[224px] min-[375px]:max-w-[244px] sm:max-w-[320px] md:max-w-[360px] xl:max-w-[405px]"
        />
        <Title className="mt-2.5" />
        <Description className="mt-4" />
        <div className="mt-2 flex justify-center sm:mt-2 md:mt-4 lg:hidden">
          <Image
            src="/hero.png"
            alt="CTO代行サービスイラスト"
            width={600}
            height={539}
            preload
            fetchPriority="high"
            className="w-[80%] max-w-[320px] sm:max-w-[380px]"
          />
        </div>
        <div className="bleed lg:bleed-none relative z-[1] -mt-4 px-4 lg:mt-12 lg:px-0">
          <CustomDownloadButton title="資料ダウンロード" className="lg:-ml-2" href="/c/download" />
        </div>
      </div>

      <div className="absolute bottom-[-20px] right-0 hidden lg:block">
        <Image
          src="/hero.png"
          alt="CTO代行サービスイラスト"
          width={580}
          height={521}
          className="lg:w-[560px] xl:w-[620px]"
        />
      </div>
    </div>
  );
}

const Title = ({ className }: { className?: string }) => {
  return (
    <h1
      className={cn(
        "-mr-[8%] text-[23px] font-bold !leading-[1.5] tracking-wider text-gray-800 min-[375px]:text-[27px] sm:mr-0 sm:text-4xl md:text-5xl md:!leading-[1.4] lg:text-5xl lg:tracking-wide xl:text-[56px]",
        className
      )}
    >
      <span className="block">
        <span className="text-emerald-500">
          <span className="text-[105%]">SaaS</span>特化
        </span>
        <span className="text-[90%]">の</span>
        <span className="text-emerald-500">
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
        "ml-1 space-y-1.5 text-sm !leading-[1.5] tracking-wide text-gray-800 min-[375px]:text-sm md:ml-3.5 md:text-lg lg:text-base xl:text-lg",
        className
      )}
    >
      {(
        [
          {
            icon: UserRoundCheck,
            text: "フェーズに応じて最適なCTO担当者が対応",
          },
          {
            icon: HeartHandshake,
            text: "Reminusがチームの一員として内製推進",
          },
          { icon: Clock, text: "2ヶ月トライアル可" },
        ] as const
      ).map(({ icon: Icon, text }) => (
        <li key={text} className="flex items-center gap-2">
          <Icon
            className="size-[1.1em] flex-none text-emerald-500"
            strokeWidth={2.5}
          />
          {text}
        </li>
      ))}
    </ul>
  );
};
