"use client";

import { DownloadButton } from "../ui/download-button";
import { ContactButton } from "../ui/contact-button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function FirstView() {
  return (
    <div className="flex flex-col justify-center gap-10 px-6 pt-5 md:pt-8 lg:flex-row">
      <div className="lg:w-fit lg:flex-none">
        <SubTitle />
        <Title className="mt-2" />
        <Description className="mt-5 sm:mt-7" />
        <div className="mx-auto mt-10 max-w-[380px] space-y-5 lg:mx-0">
          <DownloadButton shadow className="w-full lg:py-5">
            資料ダウンロード
          </DownloadButton>
          <ContactButton aggressive className="w-full lg:hidden" />
        </div>
      </div>

      <div className="justify-center">
        <Image
          src="/hero.svg"
          alt=""
          width={544}
          height={446}
          className="mx-auto w-[90%] lg:w-auto"
        />
      </div>
    </div>
  );
}

const SubTitle = () => {
  return (
    <p className="text-center font-bold text-gray-500 sm:text-xl lg:text-start">
      非エンジニア経営者へ
    </p>
  );
};

const Title = ({ className }: { className?: string }) => {
  return (
    <h1
      className={cn(
        "text-center text-[1.8rem] font-bold leading-[1.45] tracking-wide text-gray-900 min-[375px]:text-[2.1rem] sm:text-5xl sm:leading-[1.4] lg:text-start",
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
        "text-center leading-[1.7] text-gray-600 sm:text-xl sm:leading-[1.65] lg:text-start",
        className
      )}
    >
      <span>
        開発ロードマップ策定から採用まで、
        <br className="hidden lg:block" />
        Reminusが技術面で
      </span>
      <span className="whitespace-nowrap">丸ごと伴走サポートします。</span>
    </p>
  );
};
