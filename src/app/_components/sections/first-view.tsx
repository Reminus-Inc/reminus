"use client";

import { DownloadButton } from "../ui/download-button";
import { ContactButton } from "../ui/contact-button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function FirstView() {
  return (
    <div className="flex flex-col items-center justify-center px-6 pt-4 md:pt-6 lg:flex-row lg:pt-4">
      <div className="lg:w-fit lg:flex-none lg:pl-8">
        <SubTitle />
        <Title className="mt-2" />
        <Description className="mt-4" />
        <div className="mt-6 flex justify-center sm:mt-8 lg:hidden">
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
        <div className="mx-auto mt-6 max-w-[340px] space-y-5 sm:mt-8 lg:mx-0">
          <DownloadButton
            fullWidth
            className="lg:shadow-xl lg:shadow-emerald-100/50"
          >
            資料ダウンロード
          </DownloadButton>
          <ContactButton fullWidth className="hidden lg:block" />
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
    <>
      {/* SP表示: 吹き出しデザイン */}
      <div className="relative mb-4 mr-36 flex justify-center sm:hidden">
        <div className="relative ml-3 rounded-lg bg-emerald-500 px-3 py-2">
          <p className="text-xs font-bold text-white">非エンジニア経営者の</p>
          {/* 吹き出しの三角形部分（左寄りに配置） */}
          <div className="absolute -bottom-2 left-8 h-0 w-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-emerald-500" />
        </div>
      </div>
      {/* タブレット以上: 通常表示 */}
      <p className="hidden text-center text-sm font-bold text-gray-500 sm:block sm:text-xl lg:text-start">
        非エンジニア経営者へ
      </p>
    </>
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
      <span className="hidden sm:block">技術責任者不在の</span>
      <span className="hidden sm:block">スタートアップに</span>
      <span className="block sm:hidden">スタートアップ経営に</span>
      <span className="block">CTOパートナーを。</span>
    </h1>
  );
};

const Description = ({ className }: { className?: string }) => {
  return (
    <p
      className={cn(
        "text-center text-sm leading-[1.75] text-gray-600 sm:text-xl sm:leading-[1.8] lg:text-start",
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
