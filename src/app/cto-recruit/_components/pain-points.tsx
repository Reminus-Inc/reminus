import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

const painPoints = [
  {
    icon: "🔍",
    title: "技術力を正しく見極められない",
    description:
      "人事だけでは技術的な会話ができず、採用代行に任せても技術判断は対象外です。",
  },
  {
    icon: "✉️",
    title: "CTO層にスカウトが届かない",
    description:
      "CTO・VPoE層はすぐに転職を考えていない方が多く、テンプレートのスカウトには反応すらありません。",
  },
  {
    icon: "🤝",
    title: "面談まで進むが、辞退される",
    description:
      "技術で惹きつけられなければ、優秀な候補者ほど他社を選びます。",
  },
  {
    icon: "🎯",
    title: "採用後にミスマッチが発覚する",
    description:
      "肩書きだけで採用し入社後にギャップが発覚するケースは少なくありません。技術的な第三者の目が不可欠です。",
  },
];

export function PainPoints({ className }: { className?: string }) {
  return (
    <section
      id="pain-points"
      className={cn("content-auto py-16 font-sans sm:py-24 md:py-24", className)}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="採用の最難関"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
          align="center"
        >
          CTO採用が難しいのは、
          <br className="hidden lg:inline" />
          <span className="highlight-underline text-emerald-500">
            技術がわかる人
          </span>
          がいないから。
        </SectionHeader>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-16 sm:gap-6 md:grid-cols-2 md:gap-8">
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
