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
    <div className="content-auto min-h-[calc(100svh-70px)] bg-gray-50 pb-12 pt-8 font-sans">
      <div className="mx-auto flex w-[82%] max-w-[1200px] md:w-[92%]">
        <div className="flex w-full flex-col justify-center gap-8 md:flex-row md:gap-14 lg:gap-16">
          <div>
            <h1 className="text-xl font-bold !leading-[1.45] tracking-wide text-gray-800 sm:text-2xl md:text-3xl">
              <span className="whitespace-nowrap">CTOパートナー</span>{" "}
              <span className="whitespace-nowrap">サービス概要</span>
            </h1>

            <div className="mt-4 hidden md:block lg:mt-6">
              <DownloadPreview />
            </div>

            <p className="mt-6 text-base font-bold !leading-[1.6] tracking-wider text-gray-800 sm:text-lg">
              この資料でわかること
            </p>

            <ul className="mt-1.5 list-inside list-disc space-y-1 pl-2 text-sm !leading-[1.5] tracking-wide text-gray-800 sm:text-base">
              <li>SaaS開発のよくある課題と解決方法</li>
              <li>導入メリット、導入の流れ、導入事例</li>
              <li>プランと料金</li>
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
