import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

type Note = {
  text: string;
  left: string;
  top: string;
  rotate: string;
  bg: string;
};

// ミュート系: 薄い赤/ピンク/グレー/ベージュ (黄色避ける)
const bgs = [
  "bg-[#F8E5E5]", // pale rose
  "bg-[#ECEDEF]", // pale warm gray
  "bg-[#F0DCD6]", // dusty pink
  "bg-[#EAE5DD]", // pale taupe
  "bg-[#E8ECEE]", // cool gray
  "bg-[#F3ECE6]", // muted cream (less yellow)
];

// SP: 順序固定、y軸連続 interlock (付箋同士が常に隣接or重なる)、rotate は内向き
// 視覚順: 1, 2, 3, 5, 4, 6, 7, 8, 9, 10, 11, 12
const notesSp: Note[] = [
  // 1 (center-left) solo top
  { text: "MVPや開発計画が不透明", left: "26%", top: "0px", rotate: "-2deg", bg: bgs[0] },
  // 2 (far left) - big gap
  { text: "開発体制が決まらない", left: "0%", top: "42px", rotate: "-3deg", bg: bgs[1] },
  // 3 (right) - tight
  { text: "企画・開発・販売の流れ", left: "51%", top: "62px", rotate: "2deg", bg: bgs[2] },
  // 5 (left) 逆向き (バラつき用)
  { text: "技術が判断できない", left: "4%", top: "92px", rotate: "2deg", bg: bgs[4] },
  // 4 (far right) - tight to 5
  { text: "外注先の選定", left: "65%", top: "110px", rotate: "2.5deg", bg: bgs[3] },
  // 6 (center-left) - big gap
  { text: "開発を高速化したい", left: "22%", top: "148px", rotate: "-2.5deg", bg: bgs[5] },
  // 7 (far left)
  { text: "外注先の言いなり", left: "0%", top: "195px", rotate: "-2.5deg", bg: bgs[0] },
  // 8 (center-right)
  { text: "ロードマップの実現可否", left: "48%", top: "192px", rotate: "2deg", bg: bgs[1] },
  // 9 (left)
  { text: "構想と現状技術のギャップ", left: "12%", top: "236px", rotate: "-1.5deg", bg: bgs[2] },
  // 10 (right) - tight
  { text: "CTO/エンジニア採用", left: "60%", top: "278px", rotate: "2deg", bg: bgs[3] },
  // 11 (far left)
  { text: "障害・セキュリティ", left: "2%", top: "295px", rotate: "-2deg", bg: bgs[4] },
  // 12 (right)
  { text: "強いSaaS組織づくり", left: "38%", top: "335px", rotate: "2deg", bg: bgs[5] },
];

// PC: 順序 (1→12)、MIX パターン (solo / pair / trio 混合で行を隠す)、外向き rotate
// 4 は 5 と 6 の間の y
const notesPc: Note[] = [
  // 1 SOLO centered (top alone)
  { text: "MVPや開発計画が不透明", left: "36%", top: "-10px", rotate: "-1.5deg", bg: bgs[0] },
  // 2+3 PAIR side-by-side with slight y stagger
  { text: "開発体制が決まらない", left: "13%", top: "56px", rotate: "-3deg", bg: bgs[1] },
  { text: "企画・開発・販売の流れ", left: "52%", top: "58px", rotate: "2deg", bg: bgs[2] },
  // 5+4 INTERLOCK (4 が 5/6 の間)
  { text: "技術が判断できない", left: "30%", top: "108px", rotate: "-2deg", bg: bgs[4] },
  { text: "外注先の選定", left: "64%", top: "126px", rotate: "2deg", bg: bgs[3] },
  // 6 SOLO center
  { text: "開発を高速化したい", left: "40%", top: "168px", rotate: "-1deg", bg: bgs[5] },
  // 7+8 PAIR side-by-side stagger
  { text: "外注先の言いなり", left: "10%", top: "212px", rotate: "-3deg", bg: bgs[0] },
  { text: "ロードマップの実現可否", left: "52%", top: "220px", rotate: "1.5deg", bg: bgs[1] },
  // 9 SOLO center
  { text: "構想と現状技術のギャップ", left: "30%", top: "270px", rotate: "-1.5deg", bg: bgs[2] },
  // 10+11+12 TRIO (3-item tight cluster at bottom)
  { text: "CTO/エンジニア採用", left: "4%", top: "302px", rotate: "-2deg", bg: bgs[3] },
  { text: "障害・セキュリティ", left: "68%", top: "288px", rotate: "-1deg", bg: bgs[4] },
  { text: "強いSaaS組織づくり", left: "39%", top: "343px", rotate: "2deg", bg: bgs[5] },
];

function Sticky({ note }: { note: Note }) {
  return (
    <span
      style={{
        left: note.left,
        top: note.top,
        transform: `rotate(${note.rotate})`,
      }}
      className={cn(
        "absolute inline-block whitespace-nowrap rounded-[2px] px-2.5 py-1.5 text-[11px] font-semibold tracking-wide text-gray-800 shadow-[0_3px_6px_-2px_rgba(0,0,0,0.18),0_1px_2px_-1px_rgba(0,0,0,0.1)] sm:px-3 sm:py-2 sm:text-sm md:px-3.5 md:text-[15px]",
        note.bg,
      )}
    >
      {note.text}
    </span>
  );
}

type ProblemProps = {
  className?: string;
};
export function Problem({ className }: ProblemProps) {
  return (
    <section className={cn("content-auto font-sans", className)}>
      <div className="mx-auto w-[94%] max-w-[1200px] pb-10 pt-20 sm:w-[88%] sm:pb-24 sm:pt-28">
        <SectionHeader
          label="Problem"
          align="center"
          headingClassName="text-xl min-[375px]:text-[22px] sm:text-3xl md:text-4xl lg:text-[40px] !leading-[1.7]"
        >
          こんなお悩みありませんか？
        </SectionHeader>

        <div className="mt-8 flex justify-center sm:mt-12">
          <div className="relative flex w-full items-stretch justify-center gap-3 sm:items-center sm:gap-6 md:gap-10">
            {/* SP: 縦 scatter */}
            <div className="relative h-[400px] w-full flex-1 sm:hidden">
              {notesSp.map((n, i) => (
                <Sticky key={i} note={n} />
              ))}
            </div>
            {/* PC: 横広 scatter */}
            <div className="relative hidden h-[350px] w-full max-w-[560px] sm:block md:h-[360px] md:max-w-[620px] lg:h-[360px] lg:max-w-[700px]">
              {notesPc.map((n, i) => (
                <Sticky key={i} note={n} />
              ))}
            </div>

            {/* 創業期 〜 レイター */}
            <div className="flex flex-col items-center gap-2 sm:h-[440px] sm:gap-3">
              <span className="whitespace-nowrap text-xs tracking-widest text-gray-800 sm:text-sm">
                創業期
              </span>
              <div className="flex flex-grow flex-col items-center">
                <div className="h-full w-[24px] bg-gradient-to-b from-transparent to-gray-300 sm:w-[40px]" />
                <div className="h-0 w-0 border-l-[24px] border-r-[24px] border-t-[24px] border-l-transparent border-r-transparent border-t-gray-300 sm:border-l-[40px] sm:border-r-[40px] sm:border-t-[40px]" />
              </div>
              <span className="whitespace-nowrap text-xs tracking-widest text-gray-800 sm:text-sm">
                レイター
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-emerald-500 from-60% to-emerald-400">
        <div className="flex justify-center">
          <div className="h-0 w-0 border-l-[40px] border-r-[40px] border-t-[34px] border-l-transparent border-r-transparent border-t-white sm:border-l-[60px] sm:border-r-[60px] sm:border-t-[50px]" />
        </div>

        <div className="mx-auto w-[88%] max-w-[1200px] pb-11 pt-8 text-center sm:pb-12 sm:pt-10 lg:pb-16 lg:pt-11">
          <p className="text-lg font-bold !leading-[1.7] tracking-wider text-white min-[375px]:text-xl sm:text-2xl md:text-3xl">
            Reminus CTO代行は、
            <br />
            SaaS事業の技術の課題を解決するCTO代行サービスです。
          </p>
        </div>
      </div>
    </section>
  );
}
