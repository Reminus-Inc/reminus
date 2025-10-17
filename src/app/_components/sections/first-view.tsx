"use client";

import { DownloadButton } from "../ui/download-button";
import { ContactButton } from "../ui/contact-button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function FirstView() {
  return (
    <div className="flex flex-col items-center justify-center px-6 pt-12 md:pt-10 lg:flex-row lg:pt-12">
      <div className="lg:w-fit lg:flex-none lg:pl-8">
        <SubTitle />
        <Title className="mt-2" />
        <Description className="mt-4" />
        <div className="mt-8 flex justify-center lg:hidden">
          <Image
            src="/hero.png"
            alt=""
            width={544}
            height={447}
            priority
            className="w-[90%] max-w-[544px]"
          />
        </div>
        <div className="mx-auto mt-12 max-w-[340px] space-y-5 lg:mx-0">
          <DownloadButton
            fullWidth
            className="py-6 text-xl lg:shadow-xl lg:shadow-emerald-100/50"
          >
            資料ダウンロード
          </DownloadButton>
          <ContactButton fullWidth className="lg:hidden" />
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
        "text-center leading-[1.75] text-gray-600 sm:text-xl sm:leading-[1.8] lg:text-start",
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
