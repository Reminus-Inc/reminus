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
    <div className="content-auto min-h-[calc(100svh-70px)] pb-10 pt-2 font-sans md:pb-16 md:pt-6">
      <div className="mx-auto flex w-[82%] max-w-[1200px] md:w-[86%]">
        <div className="flex w-full flex-col justify-center gap-8 md:gap-14 lg:flex-row lg:gap-16">
          <div>
            <h1 className="text-xl font-bold !leading-[1.45] tracking-wide text-gray-800 sm:text-2xl md:text-3xl">
              Reminus CTOパートナー サービス概要
            </h1>

            <div className="mt-4 lg:mt-6">
              <DownloadPreview />
            </div>

            <p className="mt-6 text-lg font-bold !leading-[1.6] tracking-wide text-gray-800 sm:text-xl">
              本資料を通して、こんなことが分かります。
            </p>

            <ul className="mt-3 list-inside list-disc space-y-1 pl-2 text-sm !leading-[1.6] tracking-wide text-gray-800 sm:text-base">
              <li>SaaS開発のよくある課題と解決方法</li>
              <li>導入メリット、導入の流れ、導入事例</li>
              <li>プランと料金</li>
            </ul>

            <div className="mt-5 border-t border-solid border-gray-200 pt-5 text-sm !leading-[1.8] tracking-wide text-gray-600 sm:text-sm">
              <p>
                フォームに必要事項をご記入の上、「資料をダウンロードする」ボタンを押してください。
              </p>
              <p>すぐに資料をご覧いただけます。</p>
            </div>
          </div>

          <div className="flex h-fit justify-center rounded-lg border border-gray-200 px-7 py-6 lg:max-w-[400px]">
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
