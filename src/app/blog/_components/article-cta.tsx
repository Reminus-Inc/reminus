import { DownloadButton } from "@/app/_components/ui/download-button";
import { ContactButton } from "@/app/_components/ui/contact-button";

const concerns = ["技術が正しいか判断できない", "CTOがいない"];

export function ArticleCta() {
  return (
    <div className="mx-auto mt-6 w-[88%] max-w-[640px] md:mt-8">
      <div className="overflow-hidden border-[3px] border-emerald-500">
        {/* ヘッダーバー */}
        <div className="bg-gradient-to-r from-emerald-500 from-60% to-emerald-600 px-5 py-3 md:py-3.5">
          <p className="text-center text-base font-bold tracking-wider text-white md:text-lg">
            技術判断でお困りの方へ
          </p>
        </div>

        {/* 本文 */}
        <div className="flex flex-col items-center gap-5 bg-white px-5 py-6 md:px-8 md:py-7">
          <div className="flex flex-col gap-2 text-left">
            <ul className="flex flex-col gap-1.5">
              {concerns.map((concern) => (
                <li
                  key={concern}
                  className="flex items-center gap-2 text-sm font-bold tracking-wider text-gray-800 md:text-base"
                >
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                  {concern}
                </li>
              ))}
            </ul>
            <p className="text-sm !leading-[1.7] tracking-wider text-gray-700 md:text-base">
              こうしたお悩みは、お気軽にReminus（レミナス）へご相談ください！
            </p>
          </div>

          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">
            <DownloadButton
              size="medium"
              fullWidth
              href="/download"
              className="sm:w-auto"
            />
            <ContactButton
              size="medium"
              fullWidth
              href="/contact"
              className="sm:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
