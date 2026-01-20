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
    <div className="bg-white pb-10 pt-2 md:pb-16 md:pt-8 min-h-[calc(100svh-70px)]">
      <div className="container mx-auto flex flex-col justify-center gap-8 px-6 md:gap-14 lg:flex-row lg:gap-20">
        <div className="space-y-6 lg:w-[475px]">
          <Heading level="h3" tag="h1">
            3分でわかる<br className="md:hidden" />Reminus CTOパートナー
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
              Reminus CTOパートナーのサービス概要資料をご希望のお客様は、こちらのフォームにご入力ください。
              すぐに資料をご覧いただけます。
            </p>
            <ul className="space-y-1.5 md:space-y-2.5">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 md:h-5 md:w-5" />
                <span className="text-sm font-bold text-gray-700 md:text-base">
                  サービスの背景
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 md:h-5 md:w-5" />
                <span className="text-sm font-bold text-gray-700 md:text-base">
                  提供内容
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 md:h-5 md:w-5" />
                <span className="text-sm font-bold text-gray-700 md:text-base">
                  導入事例
                </span>
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
