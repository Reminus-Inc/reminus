import { FvDownloadButton } from "../ui/fv-download-button";
import { cn } from "@/lib/utils";

import Image from "next/image";

export function FirstView() {
  return (
    <section className="relative overflow-hidden bg-[#008255]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, #00c386 0%, #00a86d 45%, #008255 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [--grid-size:40px] md:[--grid-size:64px] lg:[--grid-size:80px]"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize:
            "var(--grid-size) var(--grid-size), var(--grid-size) var(--grid-size)",
          WebkitMaskImage: [
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 22%, black 40%, black 60%, rgba(0,0,0,0.5) 78%, transparent 100%)",
            "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 12%, black 28%, black 72%, rgba(0,0,0,0.7) 88%, rgba(0,0,0,0.5) 100%)",
          ].join(", "),
          WebkitMaskComposite: "source-in",
          maskImage: [
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 22%, black 40%, black 60%, rgba(0,0,0,0.5) 78%, transparent 100%)",
            "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 12%, black 28%, black 72%, rgba(0,0,0,0.7) 88%, rgba(0,0,0,0.5) 100%)",
          ].join(", "),
          maskComposite: "intersect",
        }}
      />

      <div className="relative mx-auto flex w-[88%] max-w-[1200px] flex-col gap-6 pb-12 pt-6 font-sans sm:gap-7 sm:pb-16 sm:pt-12 lg:w-[92%] lg:max-w-[1180px] lg:flex-row lg:gap-6 lg:pb-12 lg:pt-16 xl:max-w-[1220px]">
        {/* SP は CTA・月桂冠が中央寄せ (mx-auto sm:mx-0) なので、見出しブロックも
            そこに揃えて中央寄せにする。sm 以上は従来どおり左寄せ。 */}
        {/* lg (1024〜1279px) では写真が右に絶対配置されるので、テキスト幅を絞らないと
            見出しが写真の面に重なる (1024px で 46px 重なっていた)。 */}
        <div className="z-[1] w-full text-center sm:text-left lg:w-fit lg:max-w-[580px] lg:flex-none xl:max-w-[820px]">
          <Title />
          {/* J版の写真。透過余白は不透明部分で切り抜き済みなので、写真の枠 = 人物の
              見た目の範囲。lg 以上は幅ではなく高さで抑えないと FV からはみ出すため
              外枠を h 基準の固定サイズにしている。
              SP での並びは タイトル → 写真 → サブコピー → CTA。 */}
          {/* 角丸の面を背面に敷き、頭だけ上にはみ出させる。写真は object-cover / object-top で
              下を切るので、レイアウト高さも実際に縮む。
              グラデは色相を変えず明度だけ。FV 背景が radial-gradient(... at 50% 0%) =
              上部中央が最も明るいのに合わせて to-br。 */}
          <div
            className={cn(
              "relative mx-auto mt-4 h-[218px] w-full max-w-[158px] sm:mt-5 sm:h-[254px] sm:max-w-[188px]",
              // lg 以上は FV 右側に絶対配置。固定サイズで inset-y-0 を効かせるには my-auto が要る。
              "lg:pointer-events-none lg:absolute lg:inset-y-0 lg:right-[34px] lg:mx-0 lg:my-auto lg:h-[346px] lg:w-[260px] lg:max-w-none xl:h-[380px] xl:w-[286px]"
            )}
          >
            <span
              aria-hidden
              className="absolute -inset-x-5 bottom-0 top-[7%] rounded-[36px] bg-gradient-to-br from-[#f4fffa] via-[#bff0dc] to-[#4fc99b] sm:-inset-x-6 sm:rounded-[42px] lg:-inset-x-7 lg:rounded-[48px]"
            />
            <Image
              src="/hero-j.png"
              alt="CTO代行サービスイメージ"
              width={676}
              height={1000}
              fetchPriority="high"
              loading="eager"
              sizes="(min-width: 1280px) 234px, (min-width: 1024px) 206px, (min-width: 640px) 188px, 158px"
              className="relative block h-full w-full object-cover object-top"
            />
          </div>
          <SubCopy className="mt-5 sm:mt-6" />
          <div className="relative z-[1] mt-6 sm:mt-8 lg:mt-10">
            {/* ボタン本体は w-fit なので、画面が広い端末 (iPhone Pro Max 等) だと
                左右が余る。SP は横幅いっぱいに伸ばし、sm 以上は内容幅に戻す。 */}
            <FvDownloadButton
              title="資料ダウンロード"
              subtitle="CTO代行がわかる"
              href="/download"
              className="mx-auto w-full max-w-[440px] sm:mx-0 sm:w-fit sm:max-w-none"
            />
          </div>
          <Image
            src="/crown-c.png"
            alt="サービス長期継続率85% / 開発立ち上げまで平均2ヶ月"
            width={640}
            height={119}
            sizes="(min-width: 640px) 380px, 320px"
            className="mx-auto mt-6 block w-full max-w-[320px] sm:mx-0 sm:mt-7 sm:max-w-[380px] lg:mt-9"
          />
        </div>

      </div>
    </section>
  );
}

const Title = ({ className }: { className?: string }) => {
  return (
    <div className={cn("font-extrabold tracking-widest", className)}>
      {/* D版の吹き出しラベルと同じ位置 (見出しの上) に置くリード。尻尾は付けず、
          シンプルな濃い緑の帯 + 白抜き文字。縦padding と行間を詰めて高さを抑える。
          この行が先に来るぶん、下の見出し末尾の「が」は落としている。 */}
      <p className="mb-4 inline-block bg-[#00603d] px-3 py-1 text-base !leading-tight tracking-wider text-white sm:mb-3 sm:px-4 sm:py-1.5 sm:text-lg lg:text-2xl">
        事業成長を技術で支える
      </p>

      <h1>
        {/* 1行に収めるのは xl 以上だけ。lg (1024〜1279px) で nowrap にすると見出しが
            カラム幅を超えて右の写真に迫るため、この帯域では折り返させる。 */}
        <span className="flex flex-wrap items-end justify-center gap-x-2 gap-y-1.5 sm:justify-start xl:flex-nowrap">
          {/* F版に倣い、白抜き (白背景 × 緑文字) ではなく黄色文字で強調する。
              「プロダクト特化」は「SaaS特化」より横幅が広く小さい端末で見切れるため、
              小さい breakpoint を縮め 108% の強調も外している (sm 以上は c と同サイズ)。 */}
          <span className="flex items-end gap-2 whitespace-nowrap">
            <span className="text-[26px] !leading-[1.1] text-[#ffe100] min-[375px]:text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px]">
              プロダクト特化
            </span>
            <span className="text-[20px] !leading-[1.1] text-white min-[375px]:text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px]">
              の
            </span>
          </span>
          <span className="text-[26px] !leading-[1.1] text-[#ffe100] min-[375px]:text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px]">
            <span className="text-[108%]">CTO</span>代行
          </span>
        </span>
      </h1>
    </div>
  );
};

// G版の箇条書き 3 点をサブコピーに置き換えたもの。
// 文言は 2025-12 時点の FV (238a724) で使っていたものを踏襲している。
const SubCopy = ({ className }: { className?: string }) => {
  return (
    <p
      className={cn(
        "text-base font-medium !leading-[1.8] tracking-wide text-white sm:text-lg lg:text-xl",
        className
      )}
    >
      技術に詳しくない経営者の代わりに、
      <br />
      技術戦略から開発まで、技術を一気通貫
    </p>
  );
};
