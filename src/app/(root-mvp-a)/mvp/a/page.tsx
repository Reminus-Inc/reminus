import type { Metadata } from "next";
import { CaseStudies } from "@/app/_components/sections/case-studies";
import { ClientLogos } from "@/app/_components/sections/client-logos";
import { CompanyOverview } from "@/app/_components/sections/company-overview";
import { Cta } from "@/app/_components/sections/cta";
import { BeforeAfter } from "../../_components/sections/before-after";
import { Column } from "../../_components/sections/column";
import { FirstView } from "../../_components/sections/first-view";
import { Journey } from "../../_components/sections/journey";
import { Management } from "../../_components/sections/management";
import { ServiceOverview } from "../../_components/sections/service-overview";
import { WhyReminus } from "../../_components/sections/why-reminus";
import { FvDownloadButton } from "../../_components/ui/fv-download-button";

const TITLE = "外注やAIで作ったMVPを、売れるプロダクトへ | CTO代行のReminus";
const DESCRIPTION =
  "MVPを外注・フリーランス・AIで開発したが、想定通り進まない・本番リリースに不安がある方へ。CTO代行が既存コードを引き継ぎ、本番化・運用・内製化まで伴走します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // openGraph はルート layout の値を丸ごと差し替えるので、siteName 等も併記する。
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/mvp/a",
    siteName: "株式会社Reminus",
    locale: "ja_JP",
    type: "website",
  },
  // 広告流入用の LP。他の variant と同じく検索インデックスからは外す。
  robots: { index: false, follow: false },
};

// MVP 外注後の立て直しに訴求する LP。H版をベースに、コピーと 2 セクションを差し替えている。
//   - ヒーロー / 特長: 文言を MVP 文脈に差し替え
//   - 課題提示 (「こんなお悩み」+ 緑帯) は削除。ビフォーアフターと言うことが重なるため、
//     導入事例からそのままサービスの特長へ繋ぐ
//   - ビフォーアフター: 新設 (クライアントロゴ直下)
//   - ジャーニー: H版の「サービス範囲」(網羅型) を時系列 4 ステップに置き換え
// それ以外 (実績・事例・Why・コラム・経営者・会社概要) は H版のまま流用。
export default function MvpA() {
  return (
    <>
      <FirstView />
      {/* 直後がグレー背景のビフォーアフターなので、白地側に余白を持たせて
          境界がロゴに張り付かないようにする (H版と同じ扱い)。
          さらに、この帯自体をグラデにしてロゴから Before に入る境目を消す
          (margin だと上に白が残るので padding)。白 → #F5F5F5 は 255→245 の差しかなく
          階調が見えないので、ヒーローの緑を受けた薄いミントを中間に挟んでいる。 */}
      {/* ロゴは白地のまま。ロゴ画像は白背景が焼き込まれた不透明 PNG なので、
          ここにグラデを敷くと画像の途中から色が乗って不自然になる。 */}
      <div className="bg-white pb-8 pt-8 sm:pb-10 sm:pt-14">
        <ClientLogos />
      </div>
      {/* ロゴの下だけでグラデ。白 → Before 面の #F5F5F5 は 255→245 の差しかなく
          階調が見えないので、ヒーローの緑を受けた薄いミントを中間に挟む。 */}
      <div
        aria-hidden
        className="h-12 bg-gradient-to-b from-white via-emerald-50 to-[#F5F5F5] sm:h-16"
      />
      <div className="content-auto">
        <BeforeAfter className="bg-gray-50" />
        <CaseStudies
          className="bg-white pt-16 sm:pt-24 pb-10 sm:pb-14"
          showOtherCases={false}
        />
        <div className="flex justify-center bg-white px-4 pb-16 sm:pb-24">
          <FvDownloadButton
            variant="filled"
            imageSrc="/document-cover-c-white.png"
            title="資料ダウンロード"
            subtitle="レミナスがわかる"
            href="/c/download"
          />
        </div>
        <ServiceOverview className="bg-white" />
        <Journey className="bg-gray-50" />
        <WhyReminus className="bg-white" />
        <Cta
          className="from-white to-gray-50"
          downloadHref="/c/download"
          heading={
            <>
              外注で作ったMVPを、
              <br />
              事業の武器に変えませんか？
            </>
          }
        />
        <Column className="bg-white" />
        <Management className="bg-gray-50" />
        <Cta
          className="from-white to-white"
          downloadHref="/c/download"
          heading={
            <>
              外注で作ったMVPを、
              <br />
              事業の武器に変えませんか？
            </>
          }
        />
        <CompanyOverview />
      </div>
    </>
  );
}
