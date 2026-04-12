import { DownloadForm } from "@/app/_components/ui/download-form";
import { DOCUMENT_TYPE } from "@/app/constants";
import { Metadata } from "next";
import { DownloadPreview } from "@/app/_components/ui/download-preview";

export const metadata: Metadata = {
  title: "資料ダウンロード | Reminus",
  description: "Reminusのサービス紹介資料をダウンロードできます。",
  robots: {
    index: false,
  },
};

export default function DownloadPage() {
  return (
    <div className="content-auto min-h-[calc(100svh-70px)] bg-gray-50 pb-12 pt-6 font-sans md:pt-12">
      <div className="mx-auto flex w-[88%] max-w-[1200px] md:w-[92%]">
        <div className="flex w-full flex-col justify-center gap-8 md:flex-row md:gap-14 lg:gap-16">
          <div>
            <h1 className="text-2xl font-bold !leading-[1.3] tracking-wide text-gray-800 md:text-3xl">
              <span className="whitespace-nowrap">
                <span className="text-[105%]">CTO</span>代行
              </span>
              <span>&nbsp;</span>
              <span className="whitespace-nowrap">サービス資料</span>
            </h1>

            <div className="mt-4 lg:mt-6">
              <DownloadPreview />
            </div>

            <p className="mt-6 max-w-[500px] text-sm !leading-[1.7] tracking-wide text-gray-700 sm:text-base">
              サービス資料をご希望のお客様は以下のフォームにご入力ください。すぐに資料をご覧いただけます。
            </p>

            <ul className="mt-3 list-inside list-disc space-y-1 pl-2 text-sm !leading-[1.5] tracking-wide text-gray-800 sm:text-base">
              <li>サービスの背景</li>
              <li>提供内容</li>
              <li>導入事例</li>
            </ul>
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
