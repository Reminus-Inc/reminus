"use client";

import { CheckCircle } from "lucide-react";
import { ContactButton } from "../contact-button";
import { DownloadButton } from "../download-button";
import Image from "next/image";

const clientLogos = [
  { 
    name: "DRESS CODE", 
    logo: "/logos/dress_code.svg", 
    url: "https://www.dress-code.com/",
    height: 30,
    spHeight: 20
  },
  { 
    name: "Zaimo", 
    logo: "/logos/zaimo.svg", 
    url: "https://lp.zaimo.ai/",
    height: 25,
    spHeight: 18
  },
  { 
    name: "SalesBrain", 
    logo: "/logos/salesbrain.png_medium", 
    url: "https://salesbrain.jp",
    height: 34,
    spHeight: 24
  },
];

export function CtoPartnerHero() {
  return (
    <section id="value" className="bg-emerald-50  flex flex-col">
      <div className="lg:container mx-auto px-4 flex flex-col md:flex-row md:flex-grow items-center justify-center gap-8 md:gap-12 py-6 md:py-8">
        <div className="md:w-1/2 space-y-4 md:space-y-6">
          <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-2 md:mb-4">
            Reminus CTOパートナー
          </div>
          <div className="text-base md:text-lg font-semibold text-emerald-800 mb-2">非エンジニア創業者へ</div>

          <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight text-gray-900 mb-4 md:mb-6">
            Reminusが経営に技術を持ち込み、<br className="hidden lg:block" />市場戦略とプロダクトにレバレッジを効かせます。
          </h1>
          <p className="text-sm md:text-base xl:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8 ">
          「ボードメンバーに技術がわかる人がいない…」<br className="hidden lg:block"/>その不安、Reminusが解消します。
          </p>
          <p className="text-sm md:text-base xl:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8 ">
          Reminusが技術視点を補うことで、経営判断に自信と速度、広がりを。<br className="hidden lg:block"/>市場・製品戦略に技術的洞察を提供し、新たな可能性をももたらします。
          </p>
          <p className="text-sm md:text-base xl:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8 ">
          さらに、SaaSの持続的成長の鍵であるプロダクト志向組織の確立。<br className="hidden lg:block"/>
          Reminusは、採用戦略からスカウト伴走、組織づくりまで伴走します。
        
          </p>
          <div className="hidden md:flex flex-col sm:flex-row gap-4 pt-8">
            <DownloadButton variant="primary" iconPosition="left">資料ダウンロード</DownloadButton>
            <ContactButton aggressive />
          </div>
        </div>
        <div className="mt-0 md:mt-0 w-full md:w-1/2 max-w-lg mx-auto md:max-w-none">
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
            <div className="flex flex-col space-y-2 md:space-y-4">
              {/* 競争優位性のグループ */}
              <div className="border-2 border-gray-200 rounded-lg p-3 md:p-4">
                <div className="grid grid-cols-3 gap-2 md:gap-3 min-h-12 md:min-h-20">
                  <div className="bg-gray-100 p-1 md:p-3 rounded-lg text-center flex items-center justify-center ">
                    <p className="font-medium text-sm xl:text-base">市場・<br className="xl:hidden" />製品戦略</p>
                  </div>
                  <div className="bg-gray-100 p-1 md:p-3 rounded-lg text-center flex items-center justify-center">
                    <p className="font-medium text-xs lg:text-sm xl:text-base tracking-tighter">ビジネス・<br />オペレーション</p>
                  </div>
                  <div className="bg-gray-100 p-1 md:p-3 rounded-lg text-center flex items-center justify-center">
                    <p className="font-medium text-sm xl:text-base">プロダクト<br className="xl:hidden" />開発</p>
                  </div>
                </div>
                <div className="mt-2 md:mt-3 text-center">
                  <p className="font-medium text-gray-700 text-sm md:text-base">自社の競争優位性</p>
                </div>
              </div>

              {/* 掛け算記号 */}
              <div className="flex justify-center">
                <div className="bg-emerald-100 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-emerald-600 text-xl md:text-2xl font-bold shadow-sm">
                  ×
                </div>
              </div>

              {/* Reminusの提供価値 */}
              <div className="border-2 border-emerald-200 rounded-lg p-3 md:p-4 bg-emerald-50">
                <div className="grid grid-cols-3 gap-2 md:gap-3 min-h-12 md:min-h-20">
                  <div className="bg-emerald-100 p-1 md:p-3 rounded-lg text-center flex items-center justify-center">
                    <p className="font-bold text-emerald-700 text-sm xl:text-base">技術戦略</p>
                  </div>
                  <div className="bg-emerald-100 p-1 md:p-3 rounded-lg text-center flex items-center justify-center">
                    <p className="font-bold text-emerald-700 text-sm xl:text-base">エンジニア<br className="xl:hidden" />採用</p>
                  </div>
                  <div className="bg-emerald-100 p-1 md:p-3 rounded-lg text-center flex items-center justify-center">
                    <p className="font-bold  text-emerald-700 text-sm xl:text-base">開発組織</p>
                  </div>
                </div>
                <div className="mt-2 md:mt-3 text-center">
                  <p className="font-medium text-emerald-700 text-sm md:text-base">
                    Reminus CTOパートナーの提供価値
                  </p>
                </div>
              </div>

              {/* イコール記号 */}
              <div className="flex justify-center">
                <div className="bg-emerald-100 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-emerald-600 text-xl md:text-2xl font-bold shadow-sm">
                  =
                </div>
              </div>

              {/* 成功するスタートアップ */}
              <div className="border-2 border-emerald-500 rounded-lg p-3 md:p-4 bg-emerald-50">
                <div className="flex justify-center">
                  <div className="bg-emerald-500 px-3 py-1 md:px-4 md:py-2 rounded-lg shadow-sm">
                    <p className="font-medium text-white text-sm md:text-base h-12 flex items-center justify-center">
                      持続的成長するSaaSスタートアップ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden bg-emerald-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <DownloadButton variant="primary" iconPosition="left">資料ダウンロード</DownloadButton>
            <ContactButton aggressive />
          </div>
        </div>
      </div>
      <div className="bg-white relative">
        <div className="container mx-auto px-4 py-8 md:py-8">
            <div className="flex justify-center items-center text-gray-700">
              <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 shrink-0 " />
              <span className="font-medium text-sm md:text-lg xl:text-xl">
                <span className="text-emerald-700">Reminus</span><br className="bllck md:hidden" />支援実績 11社
              </span>
              <span className="mx-4 text-gray-300">|</span>
              <span className="font-medium text-sm md:text-lg xl:text-xl">
                <span className="text-emerald-700">Reminus CTOパートナー</span><br className="bllck md:hidden"/>支援実績 4社
              </span>
          </div>
          
          {/* ロゴセクション */}
          <div className="pt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 md:flex md:flex-wrap md:justify-center md:items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
              {clientLogos.map((client, index) => (
                <a
                  key={index}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <div className="block sm:hidden" style={{ height: client.spHeight }}>
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      height={client.spHeight}
                      width={200}
                      style={{ 
                        height: '100%', 
                        width: 'auto',
                        maxWidth: 'none',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div className="hidden sm:block" style={{ height: client.height }}>
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      height={client.height}
                      width={200}
                      style={{ 
                        height: '100%', 
                        width: 'auto',
                        maxWidth: 'none',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-200 w-full"></div>
      </div>
    </section>
  );
}