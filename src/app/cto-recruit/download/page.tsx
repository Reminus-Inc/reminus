import { DownloadForm } from "@/app/_components/ui/download-form";
import { DOCUMENT_TYPE } from "@/app/constants";
import { Metadata } from "next";
import { CheckCircleIcon } from "@/app/_components/ui/check-circle-icon";

export const metadata: Metadata = {
  title: "CTO採用支援 資料ダウンロード | Reminus",
  description:
    "CTO採用支援サービスの概要資料をダウンロードいただけます。CTO代行で培った知見を活かした採用支援の詳細をご覧ください。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CtoRecruitDownloadPage() {
  return (
    <div className="content-auto min-h-svh pb-10 pt-2 font-sans md:pb-16 md:pt-6">
      <div className="mx-auto flex w-[82%] max-w-[1200px] md:w-[86%]">
        <div className="flex w-full flex-col justify-center gap-8 md:gap-14 lg:flex-row lg:gap-16">
          <div>
            <p className="text-xs font-bold tracking-wider text-emerald-600 sm:text-sm">
              CTO採用支援
            </p>

            <h1 className="mt-2 text-xl font-bold !leading-[1.45] tracking-wide text-gray-800 sm:text-2xl md:text-3xl">
              CTO採用支援サービス概要資料
            </h1>

            <p className="mt-4 text-sm !leading-[1.8] tracking-wide text-gray-600 sm:text-base">
              CTO代行で培った知見を活かした、CTO・エンジニアマネージャー採用支援の詳細をまとめた資料です。
            </p>

            <p className="mt-6 text-lg font-bold !leading-[1.6] tracking-wide text-gray-800 sm:text-xl">
              本資料を通して、こんなことが分かります。
            </p>

            <ul className="mt-3 flex flex-col gap-1.5 text-sm !leading-[1.6] tracking-wide text-gray-800 sm:text-base">
              {[
                "CTO・EM採用でよくある課題と解決アプローチ",
                "支援メニュー（母集団形成〜面接・オファーまでの一気通貫支援）",
                "エンジニアRPOとの違い・Reminusの強み",
                "ご利用の流れ・料金イメージ",
              ].map((text) => (
                <li key={text} className="flex items-start gap-2">
                  <CheckCircleIcon className="size-5 flex-none translate-y-[2px] text-[#0A965B]" />
                  <span className="font-bold">{text}</span>
                </li>
              ))}
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
              documentType={DOCUMENT_TYPE.CTO_RECRUIT}
              formId="cto-recruit-download-form"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
