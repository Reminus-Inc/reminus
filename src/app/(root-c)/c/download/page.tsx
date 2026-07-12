import { DOCUMENT_TYPE } from "@/app/constants";
import { Metadata } from "next";
import { DownloadPreview } from "@/app/_components/ui/download-preview";
import { HubSpotDownloadForm } from "@/app/_components/ui/hubspot-download-form";

export const metadata: Metadata = {
  title: "資料ダウンロード | Reminus",
  description: "Reminusのサービス紹介資料をダウンロードできます。",
  robots: {
    index: false,
  },
};

// c 版の資料ダウンロード。ページ全体の見た目は /download を踏襲し、
// フォームだけ HubSpot 埋め込み (IVRy 方式・非iframe) に差し替える。
export default function DownloadPageC() {
  return (
    <div className="content-auto min-h-svh bg-gray-50 pb-12 pt-6 font-sans md:pt-12">
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
              <DownloadPreview
                images={[
                  {
                    src: "/document-cover-c.png",
                    alt: "レミナスCTO代行資料イメージ1",
                  },
                  {
                    src: "/document-2.png",
                    alt: "レミナスCTO代行資料イメージ2",
                  },
                  {
                    src: "/document-3.png",
                    alt: "レミナスCTO代行資料イメージ3",
                  },
                ]}
              />
            </div>

            <p className="mt-6 max-w-[500px] text-base !leading-[1.7] tracking-wide text-gray-700">
              レミナスCTO代行のご検討に必要な3点セットを無料ダウンロード
            </p>

            <ul className="mt-3 list-inside list-disc space-y-1 pl-2 text-base !leading-[1.5] tracking-wide text-gray-800">
              <li>サービスの背景</li>
              <li>提供内容</li>
              <li>導入事例</li>
            </ul>
          </div>

          {/* カード見た目は /download を踏襲。ただし埋め込みは空カードが潰れて横CLSを
              起こすため、幅だけ max-w ではなく md:w-[400px] の固定幅で確保する。 */}
          <div className="flex h-fit w-full justify-center rounded-xl bg-white px-6 py-6 sm:px-8 sm:py-8 md:w-[400px] lg:rounded-md lg:border lg:border-gray-200 lg:shadow-md">
            <HubSpotDownloadForm
              portalId={process.env.HUBSPOT_PORTAL_ID ?? ""}
              formId={process.env.HUBSPOT_FORM_GUID ?? ""}
              documentType={DOCUMENT_TYPE.CTO_PARTNER}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
