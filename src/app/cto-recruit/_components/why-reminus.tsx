import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

const solutions = [
  {
    pain: "CTOが採用できる媒体がわからない",
    title: "CTO代行の実績から、\n有効媒体を熟知",
    description:
      "累計6社以上のCTO代行を通じ、CTOクラスが実際に反応する媒体や、経営層にリーチできるチャネルを把握しています。自らCTOとして転職市場を経験しているからこそ、最短で母集団を形成できます。",
    icon: "🔍",
  },
  {
    pain: "給与相場や求人設計が難しい",
    title: "CTOの仕事を知るからこそ、\n刺さる求人を設計",
    description:
      "CTOが日々どんな意思決定をし、何にやりがいを感じるかを実体験で理解しています。給与相場だけでなく、候補者が「この会社で働きたい」と思う求人票の設計を、CTO目線で支援します。",
    icon: "💰",
  },
  {
    pain: "スカウトの返信率が低い",
    title: "技術と経営の両方がわかるから、\n候補者に刺さる",
    description:
      "テンプレートでは響かないCTOクラスに対し、技術スタック・事業フェーズ・経営課題を踏まえたパーソナライズドスカウトを作成。「技術がわかる人が書いている」と伝わるメッセージで、返信率を引き上げます。",
    icon: "✉️",
  },
  {
    pain: "面接で見極められない",
    title: "CTO経験者が、\n面接・オファーまで伴走",
    description:
      "書類選考・面接設計・面接同席・オファー条件設計まで、採用プロセスの下流工程こそReminusの真価。技術力だけでなく組織構築力・経営目線を正しく評価し、入社後のミスマッチを防ぎます。",
    icon: "🎯",
  },
];

export function WhyReminus({ className }: { className?: string }) {
  return (
    <section
      id="why-reminus"
      className={cn("content-auto py-16 font-sans sm:py-24 md:py-32", className)}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="Reminusが選ばれる理由"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
          align="center"
        >
          CTO採用の
          <span className="highlight-underline text-emerald-500">壁</span>
          を、
          <br className="hidden sm:inline" />
          CTO代行の知見で突破する。
        </SectionHeader>

        <div className="mt-10 flex flex-col gap-6 sm:mt-16 sm:gap-8 lg:gap-10">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-solid border-gray-200 bg-white shadow-sm"
            >
              {/* 課題ラベル */}
              <div className="flex items-center gap-2 border-b border-solid border-gray-100 bg-gray-50 px-5 py-3 sm:px-8 sm:py-4">
                <span className="text-base sm:text-lg">{solution.icon}</span>
                <span className="text-xs font-bold tracking-wider text-gray-500 sm:text-sm">
                  課題:
                </span>
                <span className="text-xs font-bold tracking-wide text-gray-700 sm:text-sm">
                  {solution.pain}
                </span>
              </div>
              {/* ソリューション */}
              <div className="flex flex-col gap-3 p-5 sm:flex-row sm:gap-8 sm:p-8">
                <div className="flex items-center gap-2 sm:flex-shrink-0 sm:flex-col sm:items-start sm:gap-1">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 sm:h-10 sm:w-10">
                    <svg
                      className="h-4 w-4 text-emerald-500 sm:h-5 sm:w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold tracking-wider text-emerald-600 sm:hidden">
                    Reminusなら
                  </span>
                </div>
                <div>
                  <div className="mb-1 hidden text-xs font-bold tracking-wider text-emerald-600 sm:block">
                    Reminusなら
                  </div>
                  <h3 className="whitespace-pre-line text-base font-bold !leading-[1.6] tracking-wide text-gray-800 sm:text-lg md:text-xl">
                    {solution.title}
                  </h3>
                  <p className="mt-2 text-sm !leading-[1.9] tracking-wide text-gray-600 sm:text-base">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
