import { DownloadForm } from "@/app/_components/ui/download-form";
import Image from "next/image";
import { DOCUMENT_TYPE } from "@/app/constants";
import { Heading } from "@/app/_components/ui/heading";
import { CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "資料ダウンロード | Reminus",
  description: "Reminusのサービス紹介資料をダウンロードできます。",
  robots: {
    index: false,
  },
};

export default function DownloadPage() {
  return (
    <div className="bg-white pb-16 pt-8">
      <div className="container mx-auto flex flex-col justify-center gap-14 px-6 lg:flex-row lg:gap-20">
        <div className="space-y-6 lg:w-[475px]">
          <Heading level="h2" tag="h1">
            サービス紹介資料
          </Heading>

          <div className="rounded bg-gray-50 p-4">
            <div className="mx-auto aspect-[1326/842] max-w-[720px] rounded-sm sm:max-w-[442px]">
              <Image
                src="/document-example.png"
                alt="Reminus CTO パートナー概要資料"
                width={1326}
                height={842}
                priority
                className="block h-auto w-full"
              />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-gray-600">
              Reminus
              CTOパートナーは、スタートアップ経営に技術視点を補うCTO代行サービスです。
              本資料では、プランやサービス内容、導入事例に加え、事業全体を俯瞰できる「SaaS経営
              課題整理シート」を公開しています。
            </p>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                <span className="font-bold text-gray-700">
                  サービスのコンセプト
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                <span className="font-bold text-gray-700">
                  SaaS経営の課題整理シート
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                <span className="font-bold text-gray-700">
                  プランごとの料金とサービス内容
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                <span className="font-bold text-gray-700">導入事例</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex h-fit justify-center rounded-lg border border-gray-300 px-7 py-6 lg:max-w-[400px]">
          <DownloadForm documentType={DOCUMENT_TYPE.CTO_PARTNER} />
        </div>
      </div>
    </div>
  );
}
