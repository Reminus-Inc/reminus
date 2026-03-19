import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

const points = [
  {
    number: "01",
    title: "採用の進め方を、一緒に設計する",
    body: "媒体選定から求人設計、スカウト、面接、オファーまで。何をどの順でやるか、隣で考えます。",
  },
  {
    number: "02",
    title: "技術がわかるから、候補者を見極められる",
    body: "CTO・EM経験者が書類選考から面接まで直接対応。人事では難しい技術力の評価を担います。",
  },
  {
    number: "03",
    title: "候補者一人ひとりに、スカウトを届ける",
    body: "技術的な経歴を深く読み込み、一通ずつカスタマイズ。大量送信では届かない潜在層にリーチします。",
  },
  {
    number: "04",
    title: "CTO目線で、自社の技術的な魅力を語る",
    body: "面談同席やオファー設計で、候補者に響く訴求をサポート。\u300eこの会社で働きたい\u300fを引き出します。",
  },
  {
    number: "05",
    title: "必要なCTO像を、言葉にするところから",
    body: "どんな人が必要かわからない、で大丈夫。事業と技術の両面から、求める人物像を一緒に言語化します。",
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
        className,
      )}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="Reminusが選ばれる理由"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
          align="center"
        >
          採用の全工程で、
          <br className="sm:hidden" />
          Reminusにできること
        </SectionHeader>

        {/* P1-P4: PC 2x2グリッド / SP 縦スタック */}
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
