"use client";

import { DownloadButton } from "../ui/download-button";
import { ContactButton } from "../ui/contact-button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function FirstView() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 px-6 pt-4 sm:gap-5 md:pt-6 lg:flex-row lg:gap-0 lg:pt-8">
      <div className="lg:w-fit lg:flex-none lg:pl-8">
        <SubTitle />
        <Title className="mt-2" />
        <Description className="mt-4 sm:mt-6" />
        <div className="mt-8 flex justify-center lg:hidden">
          <Image
            src="/hero.svg"
            alt=""
            width={544}
            height={446}
            className="w-[80%] max-w-[544px]"
          />
        </div>
        <div className="mx-auto mt-10 max-w-[380px] space-y-5 lg:mx-0">
          <DownloadButton shadow fullWidth density="relaxed">
            資料ダウンロード
          </DownloadButton>
          <ContactButton
            aggressive
            fullWidth
            density="relaxed"
            className="lg:hidden"
          />
        </div>
      </div>

      <div className="hidden lg:block">
        <Image src="/hero.svg" alt="" width={544} height={446} />
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
        "text-center text-[1.8rem] font-bold leading-[1.4] tracking-wide text-gray-900 min-[375px]:text-[1.9rem] sm:text-5xl sm:leading-[1.4] lg:text-start",
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
        "text-center leading-[1.75] text-gray-600 sm:text-xl sm:leading-[1.75] lg:text-start",
        className
      )}
    >
      開発ロードマップ策定から採用まで、
      <br className="hidden sm:block" />
      <span className="whitespace-nowrap">
        Reminusが丸ごと伴走サポートします。
      </span>
    </p>
  );
};
