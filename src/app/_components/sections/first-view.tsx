import { CustomDownloadButton } from "../ui/download-button";
import { cn } from "@/lib/utils";
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
          <CustomDownloadButton title="資料ダウンロード" className="lg:-ml-2" />
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
      <span className="block">技術責任者不在の</span>
      <span className="block">SaaS事業にCTO代行を。</span>
    </h1>
  );
};

const Description = ({ className }: { className?: string }) => {
  return (
    <p
      className={cn(
        "text-sm !leading-[1.8] tracking-wide text-gray-800 min-[375px]:text-base md:text-lg lg:text-base xl:text-lg",
        className
      )}
    >
      <span className="hidden sm:inline">
        技術に明るくない経営者の右腕として、
        <br className="hidden lg:block" />
      </span>
      <span className="whitespace-nowrap">
        技術選定・エンジニア採用・開発計画まで
      </span>
      <br className="hidden lg:block" />
      <span className="whitespace-nowrap">CTO代行が一気通貫で支えます。</span>
    </p>
  );
};
