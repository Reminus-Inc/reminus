import { Carousel } from "@/components/ui/carousel";
import { ArrowRight, CircleAlert, CircleCheckBig } from "lucide-react";

import { SectionHeader } from "../ui/section-header";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { META as CHIBA_ECO_META } from "@/app/case/chiba-eco/page";
import { META as XNEXT_META } from "@/app/case/xnext/page";

type CaseStudyItemBase = {
  title: string;
  scale: string;
  financialBackground?: string;
  challengeList: string[];
  resultList: string[];
};
type CaseStudyItemWithLogo = CaseStudyItemBase & {
  companyName: string;
  logoPath: string;
  logoWidth: number;
  logoHeight: number;
  logoClassName?: string;
};
type CaseStudyItemWithoutLogo = CaseStudyItemBase & {
  category: string;
};
type CaseStudyItem = CaseStudyItemWithLogo | CaseStudyItemWithoutLogo;

// ─── メイン事例 (詳細インタビュー記事ありの事例) ─────────────────────────
// 各事例の META は詳細ページ側 (/case/<slug>/page.tsx) で定義し、ここでは
// import するだけ。タグ/サムネ/会社情報の二重管理を避ける。
// 新しい事例を書き起こしたら CASE_META_LIST に追加。
type FeaturedCaseItem = {
  slug: string;
  title: string;
  thumbnail: string;
  thumbnailAlt: string;
  companyName: string;
  logoPath: string;
  logoWidth: number;
  logoHeight: number;
  logoClassName?: string;
  chips: string[];
};

const featuredItemList: FeaturedCaseItem[] = [CHIBA_ECO_META, XNEXT_META];

// ─── その他事例 (記事化していない事例) ───────────────────────────────────
// LP 上では緑帯ヘッダの既存カードでカルーセル表示するだけ。詳細ページ無し。
const caseStudyItemList: CaseStudyItem[] = [
  {
    companyName: "1backoffice合同会社",
    title:
      "バックオフィスDX SaaSの開発プロセス設計と初期エンジニア採用を一体で支援",
    logoPath: "/logos/1backoffice.png",
    logoWidth: 526,
    logoHeight: 40,
    logoClassName: "w-[140px]",
    scale: "創業2年",
    financialBackground: "自己資金",
    challengeList: [
      "バックオフィスSaaSは機能数が多いため開発生産性の見通しが重要",
      "開発プロセスが未整備で、自社に最適な1人目エンジニアの要件が曖昧",
    ],
    resultList: [
      "エンジニアが最も効率よくAIと分担・協働できる仕組みを構築",
      "開発プロセスに最適化したエンジニア要件を定義し、採用活動を推進",
    ],
  },
  {
    category: "グローバルSaaS企業",
    title: "グローバルSaaS企業の日本向け新プロダクトでPMF停滞を解消しGTMを構築",
    scale: "上場企業・新規プロダクト",
    challengeList: [
      "新製品のPMFに向けた製品企画・開発の手法がわからず停滞",
      "日本市場の製品開発と営業が分断され、適切な検証が進まない",
    ],
    resultList: [
      "PMFに向けた意思決定の停滞を解消し、仮説検証が回る状態へ転換",
      "SaaSのGTM戦略と組織体制を設計し、日本市場で売れる体制を構築",
    ],
  },
  {
    category: "製造業SaaS スタートアップ",
    title: "プロダクト構想を開発計画に落とし込み、ゼロから内製組織を立ち上げ。",
    scale: "資本金3,000万円",
    financialBackground: "自己資金",
    challengeList: [
      "製造業の業務知見はあるが、SaaS化にあたって技術の実現可否を判断できる人材がいない",
      "エンジニアがゼロで、開発体制の作り方も開発の進め方もわからない",
    ],
    resultList: [
      "プロダクト・業界特有の技術リスクを洗い出し、MVPロードマップと技術戦略を策定",
      "技術基盤を構築し、業務委託エンジニアを1名採用。開発を予定通り推進",
    ],
  },
  {
    category: "医療AI SaaS",
    title: "MVPを事業計画通りリリース。\nスカウト返信率改善で即戦力を2名獲得。",
    scale: "シード1億円調達",
    challengeList: [
      "CTO不在で技術投資の優先順位がつけられず、開発工数が分散",
      "即戦力エンジニアを採用したいが、スカウトの返信率が低い",
    ],
    resultList: [
      "CTO代行が技術投資に優先度をつけ工数を削減し、事業計画どおりMVPをリリース",
      "スカウト文面と役割設計を最適化し、入社意欲のあるエンジニアを2名獲得",
    ],
  },
  {
    category: "経営管理SaaS",
    title: "MVPを実現しシード調達に成功。チーム拡大後、CTO採用達成。",
    scale: "シード1億円調達",
    challengeList: [
      "財務モデリングが技術的に複雑で設計・開発が困難",
      "エンジニア採用のノウハウがなく、外注の内製化が難しい",
    ],
    resultList: [
      "設計支援によりMVPを実現し、シードラウンドでの資金調達に成功",
      "副業エンジニア6名まで開発組織を拡大後、CTO採用に成功",
    ],
  },
];

export function CaseStudies({ className }: { className?: string }) {
  return (
    <section
      id="case-studies"
      className={cn(
        "content-auto overflow-x-hidden py-24 font-sans sm:py-32",
        className
      )}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="Case Studies"
          align="center"
          headingClassName="text-3xl sm:text-[40px] !leading-[1.7]"
        >
          導入事例
        </SectionHeader>

        {/* メイン事例: 1件なら中央寄せ、2件なら2カラム、3件以上は3カラム */}
        <div
          className={cn(
            "mt-12 sm:mt-16",
            featuredItemList.length === 1
              ? "mx-auto max-w-[640px]"
              : featuredItemList.length === 2
                ? "mx-auto grid max-w-[920px] grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
                : "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          )}
        >
          {featuredItemList.map((item) => (
            <FeaturedCaseCard key={item.slug} item={item} />
          ))}
        </div>

        {/* その他事例 (既存カルーセル) */}
        <div className="mt-20 md:mt-28">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-emerald-500" />
            <p className="text-[11px] font-bold tracking-[0.22em] text-emerald-600 sm:text-xs">
              OTHER CASES
            </p>
          </div>
          <h3 className="mt-3 text-center text-lg font-bold tracking-wider text-gray-800 sm:text-xl md:text-2xl">
            その他の事例
          </h3>

          <div className="mt-10 sm:mt-12">
            <div className="bleed md:bleed-none">
              <Carousel
                className="mx-6 sm:mx-12 lg:mx-0"
                itemClassName="px-1.5 sm:px-3 xl:px-4 lg:basis-[50%]"
                items={caseStudyItemList.map((item, index) => (
                  <CaseStudyCard key={index} caseStudyItem={item} />
                ))}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 会社名が「〜株式会社」のように法人格で終わる場合、SP では法人格の前で改行し、
// 中途半端な位置で折り返さないようにする (PC は 1 行のまま)。
function CompanyName({ name }: { name: string }) {
  const suffixes = ["株式会社", "合同会社"];
  const suffix = suffixes.find((s) => name.endsWith(s) && name.length > s.length);
  if (!suffix) return <>{name}</>;
  return (
    <>
      {name.slice(0, -suffix.length)}
      <br className="sm:hidden" />
      {suffix}
    </>
  );
}

// ─── メイン事例の特集カード ───────────────────────────────────────────────
function FeaturedCaseCard({ item }: { item: FeaturedCaseItem }) {
  return (
    <Link
      href={`/case/${item.slug}/`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.22)]"
    >
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-emerald-50 md:aspect-[16/9]">
        <Image
          src={item.thumbnail}
          alt={item.thumbnailAlt}
          fill
          sizes="(min-width: 768px) 460px, 88vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 pb-4 sm:p-6 sm:pb-4">
        <div className="flex items-center gap-4">
          <Image
            src={item.logoPath}
            alt={item.companyName}
            width={item.logoWidth}
            height={item.logoHeight}
            sizes="140px"
            className={cn("h-auto object-contain", item.logoClassName)}
          />
          <p
            className="text-xs tracking-wider text-gray-500"
            data-nosnippet
          >
            <CompanyName name={item.companyName} />
          </p>
        </div>

        <h3 className="mt-3.5 text-base font-bold !leading-[1.65] tracking-wide text-gray-800 md:text-lg lg:text-xl">
          {item.title}
        </h3>

        {/* タグ + 矢印。テキスト/# は省きアイコンのみ。カード下部に固定 (Sales Marker / IVRy 参考) */}
        <div className="mt-auto flex items-end justify-between gap-2 pt-6">
          <div className="flex min-w-0 flex-1 flex-wrap gap-1.5">
            {item.chips.map((label) => (
              <span
                key={label}
                className="rounded bg-emerald-50 px-2 py-1 text-[10px] font-medium tracking-wide text-emerald-700"
              >
                {label}
              </span>
            ))}
          </div>
          <ArrowRight
            className="size-5 shrink-0 text-emerald-600 transition-transform group-hover:translate-x-0.5"
            strokeWidth={2.25}
          />
        </div>
      </div>
    </Link>
  );
}

type CaseStudyCardProps = {
  caseStudyItem: CaseStudyItem;
  className?: string;
};
function CaseStudyCard({ caseStudyItem, className }: CaseStudyCardProps) {
  const hasLogo = "logoPath" in caseStudyItem;

  return (
    <div className={cn("flex h-full flex-col bg-white", className)}>
      <div className="rounded-t-lg bg-gradient-to-r from-emerald-500 from-60% to-emerald-500/85 px-4 py-4 sm:px-6">
        <p className="whitespace-pre-wrap text-base font-bold !leading-[1.7] tracking-wide text-white sm:text-lg md:text-xl lg:text-[22px]">
          {caseStudyItem.title}
        </p>
      </div>

      <div className="flex-grow rounded-b-lg border-b border-l border-r border-solid border-gray-300 p-4 sm:p-5">
        {hasLogo ? (
          // ロゴあり
          <div className="flex flex-col justify-between gap-4 sm:flex-row-reverse">
            <Image
              src={caseStudyItem.logoPath}
              alt={caseStudyItem.companyName}
              width={caseStudyItem.logoWidth}
              height={caseStudyItem.logoHeight}
              sizes="160px"
              className={cn("h-fit", caseStudyItem.logoClassName)}
            />

            <div className="flex flex-col gap-2">
              <p
                className="text-sm tracking-wider text-gray-800"
                data-nosnippet
              >
                {caseStudyItem.companyName}
              </p>
              <div className="flex flex-wrap gap-2">
                <Chip label={caseStudyItem.scale} />
                {caseStudyItem.financialBackground && (
                  <Chip label={caseStudyItem.financialBackground} />
                )}
              </div>
            </div>
          </div>
        ) : (
          // ロゴなし
          <>
            <p className="text-lg font-bold tracking-wider text-gray-800">
              社名非公開<br className="md:hidden"/> ({caseStudyItem.category})
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              <Chip label={caseStudyItem.scale} />
              {caseStudyItem.financialBackground && (
                <Chip label={caseStudyItem.financialBackground} />
              )}
            </div>
          </>
        )}

        <div className="mt-5 space-y-3">
          {/* 課題 */}
          <div className="flex flex-col gap-2 p-4">
            <div className="-mx-4 -mt-4 flex items-center gap-2 bg-gray-100/80 px-4 py-2.5">
              <CircleAlert
                className="size-[16px] h-auto text-red-500 sm:size-[18px]"
                strokeWidth={2.5}
              />
              <p className="text-xs font-medium tracking-wider text-gray-900 sm:text-sm">
                抱えていた課題
              </p>
            </div>
            <ul className="list-disc space-y-1 pl-4 text-xs !leading-[1.5] tracking-wide text-gray-900 sm:pl-5 sm:text-sm">
              {caseStudyItem.challengeList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* 効果 */}
          <div className="flex flex-col gap-2 p-4">
            <div className="-mx-4 -mt-4 flex items-center gap-2 bg-sky-50 px-4 py-2.5">
              <CircleCheckBig
                className="size-[16px] h-auto text-blue-500 sm:size-[18px]"
                strokeWidth={2.5}
              />
              <p className="text-xs font-medium tracking-wider text-gray-900 sm:text-sm">
                導入効果
              </p>
            </div>
            <ul className="list-disc space-y-1 pl-4 text-xs !leading-[1.5] tracking-wide text-gray-900 sm:pl-5 sm:text-sm">
              {caseStudyItem.resultList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <span className="rounded border border-gray-200 px-3 py-0.5 text-[11px] font-medium leading-5 text-gray-800">
      {label}
    </span>
  );
}
