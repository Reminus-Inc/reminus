import { DownloadForm } from "@/app/_components/ui/download-form";
import { DOCUMENT_TYPE } from "@/app/constants";
import { Metadata } from "next";
import { DownloadPreview } from "@/app/_components/ui/download-preview";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "資料ダウンロード | Reminus",
  description: "Reminusのサービス紹介資料をダウンロードできます。",
  robots: {
    index: false,
  },
};

export default function DownloadPage() {
  return (
    <div className="content-auto min-h-[calc(100svh-70px)] bg-white pb-12 pt-6 font-sans md:pt-12">
      <div className="mx-auto flex w-[88%] max-w-[1200px] md:w-[92%]">
        <div className="flex w-full flex-col justify-center gap-8 md:flex-row md:gap-14 lg:gap-16">
          <div>
            <h1 className="text-2xl font-bold !leading-[1.3] tracking-wide text-gray-800 md:text-3xl">
              <span className="text-[60%]">
                <span className="text-[105%]">3</span>分でわかる
              </span>
              <br />
              Reminus CTOパートナー
            </h1>

            <div className="mt-4 lg:mt-6">
              <DownloadPreview />
            </div>

            <div className="mt-6 space-y-4">
              <p className="text-sm !leading-relaxed tracking-wide text-gray-600">
                CTO代行の資料をご希望のお客様は、フォームに入力ください。
                すぐに資料をご覧いただけます。
              </p>
              <ul className="space-y-1.5 md:space-y-2.5">
                {["サービスの背景", "提供内容", "導入事例"].map((text) => (
                  <li key={text} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 md:h-5 md:w-5" />
                    <span className="text-sm font-bold text-gray-700 md:text-base">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex h-fit justify-center rounded-md border border-gray-200 bg-white px-7 py-6 shadow-md lg:max-w-[400px]">
            <DownloadForm
              documentType={DOCUMENT_TYPE.CTO_PARTNER}
              formId="download-page-form"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
