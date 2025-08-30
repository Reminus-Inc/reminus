import { DownloadForm } from "@/app/_components/ui/download-form";
import Image from "next/image";
import { Heading } from "@/app/_components/ui/heading";
import {CheckCircle2} from "lucide-react";

export default function DownloadPage() {
  return (
    <main className="bg-white pb-16 pt-8">
      <div className="container mx-auto flex flex-col justify-center gap-14 px-6 lg:flex-row lg:gap-20">
        <div className="space-y-6 lg:w-[475px]">
          <Heading level="h2" tag="h1">
            サービス紹介資料
          </Heading>

          <div className="rounded bg-gray-50 p-4">
            <div className="rounded-sm mx-auto max-w-[720px] sm:max-w-[442px] aspect-[1326/842]">
                <Image
                  src="/document-example.png"
                  alt="Reminus CTO パートナー概要資料"
                  width={1326}
                  height={842}
                  priority
                  fetchPriority="high"
                  className="block w-full h-auto"
                />
            </div>
          </div>

          <div className="space-y-3">
            <Heading tag="h3" level="h3">
              この資料で分かること
            </Heading>

            <ul className="space-y-2.5">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                <span className="font-bold text-gray-700">サービスのコンセプト</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                <span className="font-bold text-gray-700">プロダクト経営の全体像フレームワーク</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                <span className="font-bold text-gray-700">各事業フェーズのよくある課題と解決策</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                <span className="font-bold text-gray-700">プランごとの料金とサービス内容  </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                <span className="font-bold text-gray-700">導入事例</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex h-fit justify-center rounded-lg border border-gray-300 px-7 py-6 lg:max-w-[400px]">
          <DownloadForm />
        </div>
      </div>
    </main>
  );
}
