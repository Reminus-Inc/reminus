"use client";

import { Settings, Users, Building2 } from "lucide-react";
import { ContactButton } from "../ui/contact-button";

export function Solutions() {
  return (
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
  );
}