import { SectionHeader } from "../../ui/section-header";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ServiceMenuTable } from "./service-menu-table";
import type { MenuItem } from "./service-menu-table";

const menuData: MenuItem[] = [
  {
    category: "技術戦略",
    strategy: [
      "事業に応じた技術選定",
      "技術施策の優先度判断",
      "製品ロードマップの策定支援",
      "エンジニアや外注先の技術監修",
    ],
    execution: [
      "技術施策の運用管理",
      "製品開発の技術的なレビュー",
      "開発プロセスの最適化",
    ],
  },
  {
    category: "エンジニア\n採用",
    strategy: [
      "媒体やツールの選定と提案",
      "選考プロセスの設計",
      "求人票の設計",
      "レジュメのスクリーニング支援",
    ],
    execution: [
      "スカウトメッセージの代行",
      "面談録画のレビュー・アドバイス",
      "一部面談への同席（見極め）",
      "採用ファネルのPDCA推進",
    ],
  },
  {
    category: "組織設計",
    strategy: [
      "組織体制の立案",
      "製品仕様検討〜開発の仕組み化",
      "給与レンジや評価制度の設計",
    ],
    execution: [
      "開発MTGのファシリテーション",
      "マネジメント施策の運用管理",
      "開発文化の醸成",
    ],
  },
];

export function ServiceMenu({ className }: { className?: string }) {
  return (
    <section
      id="service-menu"
      className={cn("content-auto py-24 font-sans sm:py-32", className)}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="提供メニュー"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
        >
          <span className="highlight-underline text-emerald-500">
            CTO不在の課題をフルカバー。
          </span>
          <br />
          事業状況を踏まえて最適な進め方をご提案します。
        </SectionHeader>

        <ServiceMenuTable data={menuData} />

        <div className="mt-24">
          <h3 className="text-xl font-bold tracking-widest sm:text-2xl md:text-3xl">
            チャット ✕ 定例で伴走。1チームでグロースを目指す一体感
          </h3>
          <p className="mt-4 text-sm !leading-[190%] text-gray-800 sm:text-base md:mt-6 md:text-lg">
            チャットツールと週次の定例を組み合わせ、伴走型でプロダクトを推進します。
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-2 md:gap-8">
            <div className="flex flex-col items-center rounded-2xl border border-solid border-gray-200 bg-white p-6 text-center shadow-sm sm:p-8">
              <Image
                src="/icon-slack-chat.png"
                alt=""
                width={773}
                height={507}
                className="w-[200px] sm:w-[300px]"
              />
              <h4 className="mt-8 whitespace-pre-line text-base font-bold !leading-[1.6] tracking-wider text-gray-800 sm:mt-10 sm:text-lg md:text-xl">
                チャットで、<br className="block sm:hidden" />定例を待たずにすぐ相談
              </h4>
              <p className="mt-3 text-sm !leading-[1.9] tracking-wide text-gray-800 text-left sm:text-base">
              Slack Connectで気軽に相談できるのはもちろん、CTO代行側からも日常的に開発状況を確認し、必要な発信をします。社内にCTOがいるのと同じ感覚で、プロダクトに向き合えます。
              </p>
            </div>
            <div className="flex flex-col items-center rounded-2xl border border-solid border-gray-200 bg-white p-6 text-center shadow-sm sm:p-8">
              <Image
                src="/service-menu-calendar.png"
                alt=""
                width={1170}
                height={735}
                className="w-[200px] sm:w-[300px]"
              />
              <h4 className="mt-8 whitespace-pre-line text-base font-bold !leading-[1.6] tracking-wider text-gray-800 sm:mt-10 sm:text-lg md:text-xl">
                週次定例で、<br className="block sm:hidden" />状況と優先度を可視化
              </h4>
              <p className="mt-3 text-sm !leading-[1.9] tracking-wide text-gray-800 text-left sm:text-base">
                週次の定例で、経営 ✕ 技術の両面で進捗を可視化し、優先順位を整理します。計画が毎週クリアになるので、重要な経営イシューを打ち漏らすことがありません。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
