"use client";

import { DownloadButton } from "@/app/_components/download-button";
import { ContactButton } from "@/app/_components/contact-button";

export function Hero() {
  return (
    <div className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Reminus CTOパートナー
            </h1>
            <div className="bg-blue-600 h-1 w-24 my-6"></div>
            <p className="text-3xl md:text-4xl font-semibold text-gray-800">
              技術と経営をつなぎ、<br />
              スタートアップの成長を加速する
            </p>
            <p className="text-xl text-gray-600 max-w-2xl mt-4">
              非エンジニア創業者向けCTOパートナーが、技術戦略の構築から
              エンジニア採用・組織づくりまで一貫してサポートします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <DownloadButton />
              <ContactButton />
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 hidden md:block">
            <div className="relative">
              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">1</div>
                  <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                    <p className="font-medium">技術戦略の策定</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">2</div>
                  <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                    <p className="font-medium">エンジニア採用支援</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">3</div>
                  <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                    <p className="font-medium">組織構築・マネジメント</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute left-6 top-6 h-[calc(100%-24px)] w-0.5 bg-gray-200 z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
