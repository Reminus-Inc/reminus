"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { DownloadButton } from "@/app/_components/download-button";
import { ContactButton } from "@/app/_components/contact-button";

export function CTOPartnerDetails() {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="cto-partner">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              CTOパートナーサービス
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              プロジェクトの状況に合わせて柔軟に対応
            </p>
          </div>

          {/* Flexible Support */}
          <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm">
            <div className="space-y-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">スタートアップの成長に合わせた柔軟なサポート</h3>
                <p className="text-gray-600 mb-6">
                  CTOパートナーは、スタートアップの成長フェーズに合わせて、技術戦略の策定からエンジニア採用、組織構築まで幅広くサポートします。
                  プロジェクトの状況や課題に応じて、最適なアプローチで伴走します。
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">1</div>
                    <h4 className="font-bold text-lg">創業期</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    技術選定や採用戦略の相談から始め、MVPの構築をサポート。非エンジニア創業者の技術的な壁打ち役として機能します。
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">2</div>
                    <h4 className="font-bold text-lg">成長期</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    組織拡大に伴う技術戦略の策定や採用プロセスの確立、エンジニアリング組織の構築をリード。経営と技術の橋渡し役を担います。
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">3</div>
                    <h4 className="font-bold text-lg">スケール期</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    技術的負債の管理やスケーラビリティの確保、組織マネジメントの高度化など、事業拡大に伴う技術的課題の解決を支援します。
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h4 className="font-semibold text-lg mb-4 text-gray-800">CTOパートナーが解決する課題</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">技術選定や開発ロードマップの不確実性</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">エンジニア採用と組織構築の難しさ</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">経営と技術のコミュニケーションギャップ</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">技術的負債の蓄積と将来的なスケーラビリティ</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <p className="text-gray-600 mb-6">
              サービス詳細や料金については、お気軽にお問い合わせください。
              <br />
              貴社の状況に合わせたカスタマイズも可能です。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <DownloadButton />
              <ContactButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
