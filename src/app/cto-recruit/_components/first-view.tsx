import { ContactButton } from "@/app/_components/ui/contact-button";
import { DownloadButton } from "@/app/_components/ui/download-button";

export function CtoRecruitFirstView() {
  return (
    <div className="mx-auto w-[88%] max-w-[1200px] pb-10 pt-6 font-sans sm:pb-14 sm:pt-8 md:w-[86%] md:pb-14 md:pt-12">
      {/* ラベル */}
      <p className="text-center text-xs font-bold tracking-wider text-emerald-600 sm:text-sm">
        累計6社以上のCTO代行実績から生まれた採用支援
      </p>

      {/* メインコピー */}
      <h1 className="mt-3 text-center text-[22px] font-bold !leading-[1.5] tracking-wide text-gray-800 min-[375px]:text-2xl sm:mt-4 sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl">
        CTO採用のすべてを、
        <br />
        <span className="text-emerald-600">CTOの知見</span>
        で伴走。
      </h1>

      {/* サブコピー */}
      <p className="mt-2 text-center text-xs !leading-[1.8] tracking-wide text-gray-600 min-[375px]:text-sm sm:mt-3 sm:text-base md:text-lg">
        檒体選定からスカウト・面接設計・オファーまで、一気通貫で支援します。
      </p>

      {/* CTA - 2段階CV: 資料DL（ライト）+ 無料相談（ヘビー） */}
      <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4 md:mt-10">
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
  );
}
