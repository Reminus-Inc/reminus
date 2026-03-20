import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

/* ── SVG Icons ── */

function RoadmapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* 3-step flow: plan → execute → improve */}
      <circle cx="12" cy="28" r="6" stroke="currentColor" strokeWidth="2" />
      <path d="M18 28h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="30" cy="28" r="6" stroke="currentColor" strokeWidth="2" />
      <path d="M36 28h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="48" cy="28" r="6" stroke="currentColor" strokeWidth="2" />
      {/* Check marks inside circles */}
      <path d="M9.5 28l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27.5 28l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M45.5 28l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Top labels (subtle lines) */}
      <path d="M12 20v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M30 20v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M48 20v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function MagnifierCodeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Magnifier */}
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2" />
      <path d="M33 33l10 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Code symbol </> inside magnifier */}
      <path d="M20 21l-3 3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 21l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25.5 19l-3 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function LetterTargetIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Envelope */}
      <rect x="8" y="16" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M8 19l14 9 14-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Personalization sparkle */}
      <circle cx="44" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M44 11v-2M44 21v2M39 16h-2M49 16h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function MegaphoneStarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Megaphone body */}
      <path d="M10 24v8h6l12 8V16L16 24H10z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M28 22c3-1 5 0 6 3s0 6-2 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      {/* Stars / highlights */}
      <path d="M40 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="currentColor" opacity="0.8" />
      <path d="M46 26l0.7 2 2 0.7-2 0.7-0.7 2-0.7-2-2-0.7 2-0.7z" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

function BubblePenIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Speech bubble */}
      <path d="M8 12h28a4 4 0 014 4v14a4 4 0 01-4 4H20l-6 6v-6H8a4 4 0 01-4-4V16a4 4 0 014-4z" stroke="currentColor" strokeWidth="2" />
      {/* Pen inside bubble */}
      <path d="M18 28l8-8 3 3-8 8H18v-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M24.5 21.5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Writing lines */}
      <path d="M14 20h4M14 23h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

/* ── Icon backgrounds matching PainPoints 5-color scheme ── */
const iconConfigs = [
  { Icon: RoadmapIcon, bgColor: "bg-emerald-50", iconColor: "text-emerald-600" },
  { Icon: MagnifierCodeIcon, bgColor: "bg-blue-50", iconColor: "text-blue-600" },
  { Icon: LetterTargetIcon, bgColor: "bg-amber-50", iconColor: "text-amber-600" },
  { Icon: MegaphoneStarIcon, bgColor: "bg-rose-50", iconColor: "text-rose-600" },
  { Icon: BubblePenIcon, bgColor: "bg-purple-50", iconColor: "text-purple-600" },
];

const points = [
  {
    number: "01",
    title: "CTO代行の現場経験から、採用の設計図を描く",
    body: "6社以上のCTO代行で蓄積した「どんな人をどう採るか」の知見。教科書にはない、現場の解像度で採用戦略を設計します。",
  },
  {
    number: "02",
    title: "CTO経験者が、技術力を直接見極める",
    body: "書類選考から面接まで、CTO・EM経験者が直接対応。RPOでは対象外とされる技術力の評価を、現場の目で担います。",
  },
  {
    number: "03",
    title: "技術スタックまで読み込んだスカウトで、潜在層に届ける",
    body: "CTO候補は転職市場に出てきません。候補者の技術経歴を深く読み込み、「この会社なら」と思わせる一通を届けます。",
  },
  {
    number: "04",
    title: "CTO代行の経験が、候補者を口説く武器になる",
    body: "技術組織の裏側を知っているからこそ語れる魅力があります。面談同席・オファー設計で、候補者が「入りたい」と思う理由を作ります。",
  },
  {
    number: "05",
    title: "外注で終わらない。採用ノウハウを貴社に蓄積する",
    body: "RPOは外注。Reminusは伴走です。採用設計の考え方、面接の評価軸、スカウトの型。すべてのノウハウを貴社に残します。",
  },
];

function PointCard({
  point,
  iconConfig,
  className,
}: {
  point: (typeof points)[number];
  iconConfig: (typeof iconConfigs)[number];
  className?: string;
}) {
  const { Icon, bgColor, iconColor } = iconConfig;
  return (
    <div
      className={cn(
        "rounded-2xl border border-solid border-gray-200 bg-white p-5 shadow-sm sm:p-8",
        className
      )}
    >
      <div className="flex items-start gap-4 sm:gap-5">
        {/* Icon + Number column */}
        <div className="flex flex-shrink-0 flex-col items-center gap-2">
          <div
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-full sm:h-16 sm:w-16",
              bgColor
            )}
          >
            <Icon className={cn("h-8 w-8 sm:h-9 sm:w-9", iconColor)} />
          </div>
          <span className="text-lg font-bold leading-none text-emerald-500 sm:text-xl">
            {point.number}
          </span>
        </div>
        {/* Text column */}
        <div className="pt-1">
          <h3 className="text-lg font-bold !leading-[1.6] tracking-wide text-gray-800 sm:text-xl">
            {point.title}
          </h3>
          <p className="mt-2 text-sm !leading-[1.9] tracking-wide text-gray-600 sm:text-base">
            {point.body}
          </p>
        </div>
      </div>
    </div>
  );
}

export function WhyReminus({ className }: { className?: string }) {
  return (
    <section
      id="why-reminus"
      className={cn(
        "content-auto py-16 font-sans sm:py-24 md:py-24",
        className
      )}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="Reminusが選ばれる理由"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
          align="center"
        >
          CTO代行の経験があるから、
          <br className="sm:hidden" />
          できること。
        </SectionHeader>

        {/* P1-P4: PC 2×2グリッド / SP 縦スタック */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-16 sm:gap-6 md:grid-cols-2 md:gap-8">
          {points.slice(0, 4).map((point, i) => (
            <PointCard key={point.number} point={point} iconConfig={iconConfigs[i]} />
          ))}
        </div>

        {/* P5: フルワイド */}
        <div className="mt-3 sm:mt-6 md:mt-8">
          <PointCard point={points[4]} iconConfig={iconConfigs[4]} />
        </div>
      </div>
    </section>
  );
}
