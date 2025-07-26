"use client";

import { DownloadButton } from "../ui/download-button";
import { ContactButton } from "../ui/contact-button";

export function FirstView() {
  return (
    <>
      <div
        className="absolute md:fixed z-[-1] top-0 left-0 w-full h-full bg-cover bg-[center_50%] md:bg-[center_60%] bg-no-repeat"
        style={{ backgroundImage: "url(/hero-background.jpg)" }}
      />
      <div className="relative z-10 container mx-auto px-4 flex flex-col justify-between min-h-[85vh] py-8">
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-[2.5rem] leading-[1.5] md:leading-[1.45] font-bold tracking-wide text-gray-900 mb-6">
            技術責任者不在の
            <br />
            スタートアップに
            <br />
            CTOパートナーを。
          </h1>
          <p className="text-base text-gray-900 leading-[1.9]">
            開発ロードマップ策定から採用まで、
            <br />
            Reminusが技術面で丸ごと伴走サポートします。
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <DownloadButton variant="primary" iconPosition="left">
            資料ダウンロード
          </DownloadButton>
          <ContactButton aggressive iconPosition="left" />
        </div>
      </div>
    </>
  );
}
