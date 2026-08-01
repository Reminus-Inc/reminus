import { DownloadForm } from "@/app/_components/ui/download-form";
import { DOCUMENT_TYPE } from "@/app/constants";
import { Metadata } from "next";
import { DownloadPreview } from "@/app/_components/ui/download-preview";
import { CheckCircleIcon } from "@/app/_components/ui/check-circle-icon";

export const metadata: Metadata = {
  title: "資料ダウンロード | Reminus",
  description: "Reminusのサービス紹介資料をダウンロードできます。",
  robots: {
    index: false,
  },
};

export default function DownloadPage() {
  return (
    <div className="content-auto min-h-svh bg-gray-50 pb-12 pt-6 font-sans md:pt-12">
      <div className="mx-auto flex w-[88%] max-w-[1200px] md:w-[92%]">
        <div className="flex w-full flex-col justify-center gap-8 md:flex-row md:gap-14 lg:gap-16">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold !leading-[1.3] tracking-wide text-gray-800 md:text-3xl">
              <span className="whitespace-nowrap">
                <span className="text-[105%]">CTO</span>代行
              </span>
              <span>&nbsp;</span>
              <span className="whitespace-nowrap">サービス資料</span>
            </h1>

            <p className="order-2 mt-4 max-w-[500px] text-base !leading-[1.7] tracking-wide text-gray-700 md:order-3 md:mt-6">
              レミナスCTO代行のご検討に必要な3点セットを無料ダウンロード
            </p>

            <ul className="order-2 mt-3 grid grid-cols-2 gap-x-6 gap-y-1.5 text-base !leading-[1.5] tracking-wide text-gray-800 md:order-4 md:flex md:flex-col">
              {["サービスの背景", "提供内容", "導入事例"].map((text) => (
                <li key={text} className="flex items-start gap-2">
                  <CheckCircleIcon className="size-5 flex-none translate-y-[2px] text-[#0A965B]" />
                  <span className="font-semibold">{text}</span>
                </li>
              ))}
            </ul>

            <div className="order-4 mt-6 md:order-2 md:mt-4 lg:mt-6">
              <DownloadPreview
                images={[
                  {
                    src: "/document-cover-c.png",
                    alt: "レミナスCTO代行資料イメージ1",
                  },
                  {
                    src: "/document-3.png",
                    alt: "レミナスCTO代行資料イメージ2",
                  },
                  {
                    src: "/document-4.png",
                    alt: "レミナスCTO代行資料イメージ3",
                  },
                ]}
              />
            </div>
          </div>

          <div className="flex h-fit justify-center rounded-xl bg-white px-6 py-6 sm:px-8 sm:py-8 lg:max-w-[400px] lg:rounded-md lg:border lg:border-gray-200 lg:shadow-md">
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
