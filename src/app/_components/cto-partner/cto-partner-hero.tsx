"use client";

import { CheckCircle, AlertTriangle, Settings, Users, Building2 } from "lucide-react";
import { ContactButton } from "../contact-button";
import { DownloadButton } from "../download-button";
import Image from "next/image";

const clientLogos = [
  { 
    name: "DRESS CODE", 
    logo: "/logos/dress_code.svg", 
    url: "https://www.dress-code.com/",
    height: 30,
    spHeight: 21,
    width: 245,
    spWidth: 172
  },
  { 
    name: "Zaimo", 
    logo: "/logos/zaimo.svg", 
    url: "https://lp.zaimo.ai/",
    height: 25,
    spHeight: 18,
    width: 120,
    spWidth: 85
  },
  { 
    name: "SalesBrain", 
    logo: "/logos/salesbrain.png", 
    url: "https://salesbrain.jp",
    height: 34,
    spHeight: 24,
    width: 201,
    spWidth: 142
  },
];

export function CtoPartnerHero() {
  return (
    <section id="value" className="bg-emerald-50  flex flex-col">
      <div className="lg:container mx-auto px-4 flex flex-col md:flex-row md:flex-grow items-center justify-center gap-8 md:gap-12 py-6 md:py-8">
        <div className="md:w-1/2 space-y-4 md:space-y-6">
          <div className="text-base md:text-lg font-semibold text-emerald-800 mb-2">非エンジニア創業者へ</div>

          <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight text-gray-900 mb-4 md:mb-6">
            技術責任者不在のスタートアップに、<br className="hidden lg:block" />"CTOパートナー"を。
          </h1>
          <p className="text-sm md:text-base xl:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8 ">
          開発ロードマップ策定から採用まで、Reminus が技術面で丸ごと伴走サポートします。
          </p>
          <div className="hidden md:flex flex-col sm:flex-row gap-4 pt-8">
            <DownloadButton variant="primary" iconPosition="left">資料ダウンロード</DownloadButton>
            <ContactButton aggressive iconPosition="left" />
          </div>
        </div>
      </div>
      <div className="md:hidden bg-emerald-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <DownloadButton variant="primary" iconPosition="left">資料ダウンロード</DownloadButton>
            <ContactButton aggressive iconPosition="left" />
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
                  <div className="block sm:hidden">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      height={client.spHeight}
                      width={client.spWidth}
                      priority
                      style={{ 
                        height: `${client.spHeight}px`,
                        width: `${client.spWidth}px`,
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div className="hidden sm:block">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      height={client.height}
                      width={client.width}
                      priority
                      style={{ 
                        height: `${client.height}px`,
                        width: `${client.width}px`,
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
      
      {/* 課題セクション */}
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-8 md:mb-12">
              こんな課題を抱えていませんか？
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
              <div className="flex items-start gap-3 text-left">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-1 shrink-0" />
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  適切なエンジニア／CTOが採用できず、開発が停滞している
                </p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-1 shrink-0" />
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  言語・クラウド・アーキテクチャなど技術選定の判断材料が足りない
                </p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-1 shrink-0" />
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  技術負債が膨らみ、リリース速度と品質が低下している
                </p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-1 shrink-0" />
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  プロダクト志向の組織文化や評価制度をどう作ればいいかわからない
                </p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-1 shrink-0" />
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  投資家・取引先に技術計画を説明できず、信頼を得にくい
                </p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-1 shrink-0" />
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  経営とエンジニアリングを橋渡しする"技術ブレーン"が社内にいない
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-emerald-600">
                その課題、ReminusのCTOパートナーが解決します。
              </h3>
            </div>
          </div>
        </div>
      </div>
      
      {/* 解決策セクション */}
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12">
              Reminusが解決する3つの柱
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-12 md:mb-16">
              {/* 技術戦略 */}
              <div className="text-center">
                <div className="bg-emerald-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Settings className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">技術戦略</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  開発初期の壁打ちから。プロダクトや市場に沿った技術選定。施策の運用やロードマップ策定までご相談可能
                </p>
              </div>
              
              {/* エンジニア採用 */}
              <div className="text-center">
                <div className="bg-emerald-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">エンジニア採用</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  エンジニアが採用戦略から入るので、適切な人材の募集・選定が可能
                </p>
              </div>
              
              {/* 組織デザイン */}
              <div className="text-center">
                <div className="bg-emerald-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">組織デザイン</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  開発プロセスやカルチャー整備、マネジメントまでご相談可能
                </p>
              </div>
            </div>
            
            <div className="bg-emerald-50 rounded-xl p-6 md:p-8 text-center mb-8">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                CTO不在でもプロダクト成長を止めない「3本柱」。
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                採用面接同席から開発プロセス設計まで、バラけやすい施策をワンストップで統合。
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-lg font-medium text-gray-900 mb-4">
                まずはご相談ください
              </p>
              <ContactButton aggressive iconPosition="left">
                無料相談を予約する
              </ContactButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}