"use client";

import { CustomDownloadButton } from "../ui/download-button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function FirstView() {
  return (
    <div className="relative mx-auto flex w-[80%] max-w-[1200px] flex-col items-center gap-8 pt-6 md:pt-10 lg:w-[90%] lg:flex-row lg:pt-6 xl:gap-2">
      <div className="relative z-[1] w-full lg:w-fit lg:flex-none">
        <Image
          src="/crown.png"
          alt=""
          width={405}
          height={75}
          className="-ml-1 max-w-[200px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[280px] xl:max-w-[405px]"
        />
        <Title className="mt-2" />
        <Description className="mt-4" />
        <div className="mt-2 flex justify-center sm:mt-4 lg:hidden">
          <Image
            src="/hero.png"
            alt=""
            width={600}
            height={539}
            priority
            fetchPriority="high"
            loading="eager"
            className="w-[80%] max-w-[320px] sm:max-w-[380px]"
          />
        </div>
        <div className="bleed lg:bleed-none relative z-[1] -mt-4 px-4 lg:mt-12 lg:px-0">
          <CustomDownloadButton className="lg:-ml-2" asLink={true} />
        </div>
      </div>

      <div className="absolute right-0 hidden lg:block bottom-[-20px]">
        <Image
          src="/hero.png"
          alt=""
          width={580}
          height={521}
          priority
          fetchPriority="high"
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
        "text-[25px] font-bold !leading-[1.45] tracking-wider text-gray-800 sm:text-4xl md:text-5xl lg:text-5xl lg:tracking-wide xl:text-[56px]",
        className
      )}
    >
      <span className="block">スタートアップの経営を</span>
      <span className="block">技術判断で加速させる</span>
    </h1>
  );
};

const Description = ({ className }: { className?: string }) => {
  return (
    <p
      className={cn(
        "text-sm !leading-[1.8] tracking-wide text-gray-800 sm:text-base md:text-lg lg:text-base xl:text-lg",
        className
      )}
    >
      技術に明るくない経営者の右腕として、
      <br className="hidden lg:block" />
      <span className="whitespace-nowrap">
        技術選定・エンジニア採用・開発計画まで
      </span>
      <br className="hidden lg:block" />
      <span className="whitespace-nowrap">
        CTO代行が一気通貫で判断を支えます。
      </span>
    </p>
  );
};
