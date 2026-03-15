import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

const painPoints = [
  {
    icon: "🔍",
    title: "CTOが採用できる媒体がわからない",
    description:
      "エンジニア採用の媒体は多いものの、CTOクラスの人材が見つかる媒体は限られています。最適な媒体選定には専門的な知見が必要です。",
  },
  {
    icon: "💰",
    title: "給与相場や求人設計が難しい",
    description:
      "CTOの給与相場は幅広く、求人に記載する業務内容も一般的なエンジニアとは全く異なります。魅力的な求人を設計するには、CTO職の深い理解が必要です。",
  },
  {
    icon: "✉️",
    title: "スカウトの返信率が低い",
    description:
      "CTOクラスの人材は常に引く手数多。テンプレートのスカウトでは見向きもされません。相手に刺さるメッセージには、技術と経営の両面の理解が欠かせません。",
  },
  {
    icon: "🎯",
    title: "面接で見極められない",
    description:
      "技術力だけでなく、事業理解・組織構築力・経営目線を持つかどうかの見極めは非常に難しい。CTOとしての実務経験がなければ、適切な評価は困難です。",
  },
];

export function PainPoints({ className }: { className?: string }) {
  return (
    <section
      id="pain-points"
      className={cn("content-auto py-24 font-sans sm:py-32", className)}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="CTO採用の壁"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
          align="center"
        >
          CTOやエンジニアマネージャーの採用には、
          <br className="hidden lg:inline" />
          <span className="highlight-underline text-emerald-500">
            様々な専門知見
          </span>
          が求められます。
        </SectionHeader>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 sm:gap-6 md:grid-cols-2 md:gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="rounded-2xl border border-solid border-gray-200 bg-white p-5 shadow-sm sm:p-8"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="text-2xl">{point.icon}</span>
                <div>
                  <h3 className="text-lg font-bold !leading-[1.6] tracking-wide text-gray-800 sm:text-xl">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm !leading-[1.9] tracking-wide text-gray-600 sm:text-base">
                    {point.description}
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
