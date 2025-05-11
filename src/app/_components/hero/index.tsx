"use client";

import { DownloadButton } from "@/app/_components/download-button";
import { ContactButton } from "@/app/_components/contact-button";

export function Hero() {
  return (
    <div className="relative bg-white py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* 背景の装飾要素 - デスクトップのみ表示 */}
          <div className="absolute right-0 top-0 w-1/3 h-full hidden md:block">
            <div className="absolute right-10 top-10 w-64 h-64 bg-gray-100 rounded-full opacity-50"></div>
            <div className="absolute right-40 top-40 w-32 h-32 bg-gray-200 rounded-full opacity-30"></div>
            <div className="absolute right-20 top-60 w-48 h-48 bg-gray-300 rounded-full opacity-20"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto md:mx-0">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Reminus
              </h1>
              <p className="text-xl md:text-2xl text-gray-700">
                洗練されたSaaSエンジニアリングを事業に実装する
              </p>
              <p className="text-gray-600">
                非エンジニア創業者の右腕──経営とエンジニアリングをつなぐ
                <br />
                CTOパートナーがスタートアップの事業成長を加速します。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <DownloadButton />
                <ContactButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
