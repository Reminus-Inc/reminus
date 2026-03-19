import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

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
  className,
}: {
  point: (typeof points)[number];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-solid border-gray-200 bg-white p-5 shadow-sm sm:p-8",
        className
      )}
    >
      <div className="flex items-start gap-4 sm:gap-5">
        <span className="flex-shrink-0 text-2xl font-bold leading-none text-emerald-500 sm:text-3xl">
          {point.number}
        </span>
        <div>
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
          {points.slice(0, 4).map((point) => (
            <PointCard key={point.number} point={point} />
          ))}
        </div>

        {/* P5: フルワイド */}
        <div className="mt-3 sm:mt-6 md:mt-8">
          <PointCard point={points[4]} />
        </div>
      </div>
    </section>
  );
}
