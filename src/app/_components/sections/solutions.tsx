"use client";

import { Settings, Users, Building2 } from "lucide-react";
import { ContactButton } from "../ui/contact-button";

export function Solutions() {
  return (
    <div className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-xl font-bold text-gray-900 md:mb-12 md:text-2xl lg:text-3xl">
            Reminusが解決する3つの柱
          </h2>

          <div className="mb-12 grid grid-cols-1 gap-8 md:mb-16 md:grid-cols-3 md:gap-6">
            {/* 技術戦略 */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                <Settings className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="mb-4 text-lg font-bold text-gray-900 md:text-xl">
                技術戦略
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                開発初期の壁打ちから。プロダクトや市場に沿った技術選定。施策の運用やロードマップ策定までご相談可能
              </p>
            </div>

            {/* エンジニア採用 */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="mb-4 text-lg font-bold text-gray-900 md:text-xl">
                エンジニア採用
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                エンジニアが採用戦略から入るので、適切な人材の募集・選定が可能
              </p>
            </div>

            {/* 組織デザイン */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                <Building2 className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="mb-4 text-lg font-bold text-gray-900 md:text-xl">
                組織デザイン
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                開発プロセスやカルチャー整備、マネジメントまでご相談可能
              </p>
            </div>
          </div>

          <div className="mb-8 rounded-xl bg-emerald-50 p-6 text-center md:p-8">
            <h3 className="mb-4 text-lg font-bold text-gray-900 md:text-xl">
              CTO不在でもプロダクト成長を止めない「3本柱」。
            </h3>
            <p className="text-sm text-gray-600 md:text-base">
              採用面接同席から開発プロセス設計まで、バラけやすい施策をワンストップで統合。
            </p>
          </div>

          <div className="text-center">
            <p className="mb-4 text-lg font-medium text-gray-900">
              まずはご相談ください
            </p>
            <ContactButton aggressive />
          </div>
        </div>
      </div>
    </div>
  );
}
