"use client";

import { DownloadButton } from "../ui/download-button";
import { ContactButton } from "../ui/contact-button";

export function FirstView() {
  return (
    <div
      className="relative md:bg-fixed bg-cover bg-bottom bg-no-repeat"
      style={{ backgroundImage: "url(/hero-background.jpg)" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 lg:container mx-auto px-4 flex flex-col justify-between min-h-[90vh] py-20">
        <div className="text-center md:text-left md:w-1/2 space-y-4 md:space-y-6">
          <div className="text-base md:text-lg font-semibold text-emerald-200 mb-2">
            非エンジニア創業者へ
          </div>

          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-white mb-4 md:mb-6">
            技術責任者不在のスタートアップに、
            <br className="hidden lg:block" />
            &ldquo;CTOパートナー&rdquo;を。
          </h1>
          <p className="text-base md:text-lg xl:text-xl text-gray-200 leading-relaxed">
            開発ロードマップ策定から採用まで、Reminus
            が技術面で丸ごと伴走サポートします。
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <DownloadButton variant="primary" iconPosition="left">
            資料ダウンロード
          </DownloadButton>
          <ContactButton aggressive iconPosition="left" />
        </div>
      </div>
    </div>
  );
}
