import { DownloadForm } from "../ui/download-form";
import { DOCUMENT_TYPE } from "@/app/constants";
import { SectionHeader } from "../ui/section-header";

export const DownloadRequest = () => {
  return (
    <section id="download-request" className="pt-24 sm:pt-32 bg-gray-50">
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="Download"
          align="center"
          headingClassName="text-3xl sm:text-[40px] !leading-[1.7]"
        >
          資料ダウンロード
        </SectionHeader>

        <p className="mt-8 text-center text-sm leading-relaxed text-gray-800 md:text-base">
         フォーム送信後、<br className="sm:hidden"/> すぐに資料をご覧いただけます。
        </p>

        <div className="mx-auto mt-12 max-w-[400px]">
          <div className="rounded-lg border border-gray-300 bg-white px-7 py-6">
            <DownloadForm documentType={DOCUMENT_TYPE.CTO_PARTNER} />
          </div>
        </div>
      </div>
    </section>
  );
};
