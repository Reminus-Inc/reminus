import { ContactButton } from "@/app/_components/ui/contact-button";
import { DownloadButton } from "@/app/_components/ui/download-button";
import { FvBackground } from "./fv-background";
import { FvIllustration } from "./fv-illustration";

export function CtoRecruitFirstView() {
  return (
    <div className="relative overflow-hidden">
      <FvBackground />
      <div className="relative mx-auto w-[88%] max-w-[1200px] pb-10 pt-6 font-sans sm:pb-14 sm:pt-8 md:w-[86%] md:pb-14 md:pt-12 lg:pb-16 lg:pt-14">
        {/* PC: 左右分割 / SP-MD: 1カラム中央揃え */}
        <div className="lg:flex lg:items-center lg:gap-8 xl:gap-12">
          {/* 左カラム: テキスト + CTA */}
          <div className="lg:flex-1 lg:max-w-[55%]">
            {/* ラベル */}
            <p className="text-center text-[13px] font-bold tracking-wider text-emerald-600 sm:text-sm lg:text-left">
              累計6社以上のCTO代行実績から生まれた採用支援
            </p>

            {/* メインコピー */}
            <h1 className="mt-3 text-center text-[22px] font-bold !leading-[1.5] tracking-wide text-gray-800 min-[375px]:text-2xl sm:mt-4 sm:text-3xl md:text-4xl lg:text-left lg:text-[42px] xl:text-5xl">
              CTO採用のすべてを、
              <br />
              <span className="text-emerald-600">CTOの知見</span>
              で伴走。
            </h1>

            {/* サブコピー */}
            <p className="mt-2 text-center text-[13px] !leading-[1.8] tracking-wide text-gray-600 min-[375px]:text-sm sm:mt-3 sm:text-base md:text-lg lg:text-left">
              媒体選定からスカウト・面接設計・オファーまで、一気通貫で支援します。
            </p>

            {/* SP/タブレット用イラスト（lg未満で表示） */}
            <div className="mx-auto mt-4 max-w-[240px] sm:mt-5 sm:max-w-[280px] md:max-w-[300px] lg:hidden">
              <FvIllustration />
            </div>

            {/* CTA - 2段階CV: 資料DL（ライト）+ 無料相談（ヘビー） */}
            <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4 md:mt-10 lg:justify-start">
              <DownloadButton
                href="/cto-recruit/download"
                className="w-full max-w-[400px] sm:w-auto"
              >
                サービス資料を見てみる
              </DownloadButton>
              <ContactButton
                href="/cto-recruit/contact"
                className="w-full max-w-[400px] sm:w-auto"
              >
                無料で相談してみる
              </ContactButton>
            </div>
          </div>

          {/* 右カラム: SVGイラスト（lg以上で表示） */}
          <div className="hidden lg:flex lg:w-[42%] lg:items-center lg:justify-center xl:w-[40%]">
            <FvIllustration />
          </div>
        </div>
      </div>
    </div>
  );
}
