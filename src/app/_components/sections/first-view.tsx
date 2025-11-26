"use client";

import { CustomDownloadButton } from "../ui/download-button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function FirstView() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-10 px-6 pt-2 md:pt-6 lg:flex-row lg:pt-4">
      <div className="lg:w-fit lg:flex-none lg:pl-8">
        <div className="flex flex-col gap-2 lg:flex-col-reverse lg:gap-0">
          <Title className="mt-2" />
          <Image
            src="/crown.png"
            alt=""
            width={405}
            height={75}
            priority
            fetchPriority="high"
            className="w-[64%] max-w-[405px]"
          />
        </div>
        <Description className="mt-4" />
        <div className="mt-3 flex justify-center sm:mt-8 lg:hidden">
          <Image
            src="/hero.png"
            alt=""
            width={544}
            height={447}
            priority
            fetchPriority="high"
            className="w-[90%] max-w-[544px]"
          />
        </div>
        <div className="relative z-[1] mx-auto -mt-4 lg:max-w-[340px] space-y-5 lg:mx-0 lg:mt-7">
          <CustomDownloadButton
            fullWidth
            className="shadow-xl shadow-emerald-100/50"
          />
        </div>
      </div>

      <div className="hidden pt-4 lg:block">
        <Image src="/hero.png" alt="" width={544} height={447} />
      </div>
    </div>
  );
}

const Title = ({ className }: { className?: string }) => {
  return (
    <h1
      className={cn(
        "text-2xl font-bold leading-[1.5] tracking-wider text-gray-800 sm:text-5xl sm:leading-[1.4] lg:tracking-wide",
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
        "text-sm leading-[1.7] text-gray-700 sm:text-xl sm:leading-[1.7]",
        className
      )}
    >
      開発ロードマップ策定から採用まで、
      <br className="hidden sm:block" />
      <span className="whitespace-nowrap">
        CTO代行が丸ごと伴走サポートします。
      </span>
    </p>
  );
};
