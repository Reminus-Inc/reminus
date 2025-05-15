"use client";

import { DownloadButton } from "@/app/_components/download-button";
import { ContactButton } from "@/app/_components/contact-button";

export function Hero() {
  return (
    <div className="relative bg-gray-900 text-white py-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Reminus CTOパートナー
            </h1>
            <div className="bg-blue-600 h-1 w-24 my-4"></div>
            <p className="text-xl md:text-2xl leading-relaxed">
              市場やプロダクトに注力できるよう、<br />
              Reminusが経営に技術を持ち込み、<br />
              技術基盤を支えます。<br />
              さらに、採用と組織立ち上げにも伴走し、<br />
              エンジニアにアトラクトできる持続性ある<br />
              組織の土台を作ります。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <DownloadButton />
              <ContactButton />
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="relative overflow-hidden">
                {/* 価値を伝える図解 */}
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
                    事業
                  </div>
                  <div className="w-20 h-2 bg-blue-500"></div>
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
                    技術
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="bg-gray-700 p-6 rounded-lg mb-4">
                    <h3 className="font-bold text-lg mb-2">事業戦略に合わせた技術基盤</h3>
                    <p className="text-gray-300">経営とエンジニアリングをつなぎ、事業成長を加速</p>
                  </div>
                  <div className="bg-gray-700 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">持続可能な組織構築</h3>
                    <p className="text-gray-300">採用支援からチーム育成まで一貫したサポート</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
