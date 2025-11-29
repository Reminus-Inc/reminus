"use client";

import { CustomDownloadButton } from "../ui/download-button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function FirstView() {
  return (
    <div className="mx-auto flex w-[80%] max-w-[1160px] flex-col items-center justify-between gap-8 pt-6 md:pt-10 lg:w-[85%] lg:flex-row lg:pt-6">
      <div className="w-full lg:w-fit lg:flex-none">
        <Image
          src="/crown.png"
          alt=""
          width={405}
          height={75}
          priority
          fetchPriority="high"
          className="-ml-1 max-w-[200px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[280px] xl:max-w-[405px]"
        />
        <Title className="mt-2" />
        <Description className="mt-3" />
        <div className="mt-2 flex justify-center sm:mt-4 lg:hidden">
          <Image
            src="/hero.png"
            alt=""
            width={600}
            height={539}
            priority
            fetchPriority="high"
            className="w-[80%] max-w-[320px] sm:max-w-[380px]"
          />
        </div>
        <div className="bleed lg:bleed-none relative z-[1] -mt-4 px-4 lg:mt-8 lg:px-0">
          <CustomDownloadButton className="lg:-ml-2" />
        </div>
      </div>

      <div className="hidden lg:block">
        <Image
          src="/hero.png"
          alt=""
          width={580}
          height={521}
          priority
          fetchPriority="high"
          className="w-full lg:max-w-[480px] xl:max-w-[580px]"
        />
      </div>
    </div>
  );
}

const Title = ({ className }: { className?: string }) => {
  return (
    <h1
      className={cn(
        "text-[26px] font-bold leading-[1.45] tracking-wider text-gray-800 sm:text-4xl sm:leading-[1.45] md:text-5xl md:leading-[1.45] lg:text-4xl lg:leading-[1.45] lg:tracking-wide xl:text-5xl xl:leading-[1.45]",
        className
      )}
    >
      <span className="block">SaaSスタートアップに</span>
      <span className="block">技術視点を補い</span>
      <span className="block">成長を加速させる</span>
    </h1>
  );
};

const Description = ({ className }: { className?: string }) => {
  return (
    <p
      className={cn(
        "text-sm leading-[1.8] tracking-wide text-gray-800 sm:text-base sm:leading-[1.8] md:text-xl md:leading-[1.8] lg:text-lg lg:leading-[1.8] xl:text-xl xl:leading-[1.8]",
        className
      )}
    >
      開発ロードマップ策定から採用まで、
      <br className="hidden lg:block" />
      <span className="whitespace-nowrap">
        CTO代行が丸ごと伴走サポートします。
      </span>
    </p>
  );
};
