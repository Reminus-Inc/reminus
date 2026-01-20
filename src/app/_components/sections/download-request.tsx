import { DownloadForm } from "../ui/download-form";
import { DOCUMENT_TYPE } from "@/app/constants";

export const DownloadRequest = () => {
  return (
    <section
      id="download-request"
      className="rounded-tr-[100px_75px] bg-gradient-to-br from-emerald-500 from-30% to-emerald-600 py-24 sm:py-32 md:rounded-tr-[200px_150px] font-sans content-auto"
    >
      <div className="mx-auto w-[88%] max-w-[1200px]">
        <h2 className="text-center text-white">
          <span className="block text-base !leading-[1.7] tracking-widest sm:text-lg md:text-xl">
            3分でわかるReminus CTOパートナー
          </span>
          <span className="mt-2 block text-3xl font-bold !leading-[1.7] tracking-wider sm:text-4xl md:text-5xl">
            資料ダウンロード
          </span>
        </h2>

        <div className="mx-auto mt-12 flex max-w-[720px] justify-center rounded-3xl bg-white px-6 py-12 sm:py-20">
          <div className="max-w-[400px]">
            <p className="mb-8 text-sm !leading-[1.7] text-gray-700 sm:mb-10 md:text-base">
              フォーム送信後、 すぐに資料をご覧いただけます。
            </p>
            <DownloadForm documentType={DOCUMENT_TYPE.CTO_PARTNER} />
          </div>
        </div>
      </div>
    </section>
  );
};
