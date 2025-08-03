import React from "react";
import { AlertCircle } from "lucide-react";
import { Heading } from "./ui/heading";

export default function Challenges() {
  return (
    <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-15 text-center">
          <Heading>こんな課題はありませんか？</Heading>
        </div>
        
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-7.5">
            <div className="mb-2.5 flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <h3 className="text-xl font-semibold text-gray-800 tracking-wide">
                技術判断を任せられる相手がいない
              </h3>
            </div>
            <p className="text-base leading-7 text-gray-600">
              ビジネスに集中したいのに、技術面の意思決定を相談できるメンバーが不在。事業計画の実現性に不安を抱えていませんか？
            </p>
          </div>

          <div className="rounded-lg bg-white p-7.5">
            <div className="mb-2.5 flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <h3 className="text-xl font-semibold text-gray-800 tracking-wide">
                良い人材の見極め・育成が手探り
              </h3>
            </div>
            <p className="text-base leading-7 text-gray-600">
              必要なスキルセットが定まらず、候補者の適性判断や入社後オンボーディングまで手探り。結果としてチームのパフォーマンスが向上しない。
            </p>
          </div>

          <div className="rounded-lg bg-white p-7.5">
            <div className="mb-2.5 flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <h3 className="text-xl font-semibold text-gray-800 tracking-wide">
                キーマン退職で開発が止まる不安
              </h3>
            </div>
            <p className="text-base leading-7 text-gray-600">
              特定のエンジニアに技術や知識が集中して「もし辞めたら…」と不安。属人化を防ぎ、仕組みで開発を回す体制が急務です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}