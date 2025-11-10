"use client";

import { DownloadButton } from "../ui/download-button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function FirstView() {
  return (
    <div className="flex flex-col items-center justify-center px-6 pt-2 md:pt-6 lg:flex-row lg:pt-4">
      <div className="lg:w-fit lg:flex-none lg:pl-8">
        <SubTitle />
        <Title className="mt-2" />
        <Description className="mt-2 sm:mt-4" />
        <div className="mt-5 flex justify-center sm:mt-8 lg:hidden">
          <div className="relative w-[90%] max-w-[544px]">
            <Image
              src="/hero.png"
              alt=""
              width={544}
              height={447}
              priority
              fetchPriority="high"
              className="h-auto w-full"
              style={{ aspectRatio: "544/447" }}
            />
          </div>
        </div>
        <div className="mx-auto mt-7 max-w-[340px] space-y-5 sm:mt-8 lg:mx-0">
          <DownloadButton
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

const SubTitle = () => {
  return (
    <p className="text-center text-sm font-bold text-gray-500 sm:text-xl lg:text-start">
      非エンジニア経営者へ
    </p>
  );
};

const Title = ({ className }: { className?: string }) => {
  return (
    <h1
      className={cn(
        "text-center text-2xl font-bold leading-[1.5] tracking-wider text-gray-900 sm:text-5xl sm:leading-[1.4] lg:text-start lg:tracking-wide",
        className
      )}
    >
      <span className="block">技術責任者不在の</span>
      <span className="block">スタートアップに</span>
      <span className="block">CTOパートナーを。</span>
    </h1>
  );
};

const Description = ({ className }: { className?: string }) => {
  return (
    <p
      className={cn(
        "text-center text-sm leading-[1.8] text-gray-600 sm:text-xl sm:leading-[1.8] lg:text-start hidden sm:block",
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
