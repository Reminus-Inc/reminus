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
            具体的な進め方
          </h3>
          <p className="mt-4 text-sm !leading-[190%] text-gray-800 sm:text-base md:mt-6 md:text-lg">
            週次の定例ミーティングを中心として予実を管理し、週単位で回していきます。
            <br />
            週中も、適宜チャットツールでコミュニケーションを取りながら、各自作業を進めます。
          </p>

          <div className="mt-8 md:mt-10">
            <Image
              src="/service-menu-flow-pc.svg"
              alt=""
              width={1240}
              height={440}
              className="hidden sm:block"
            />
            <Image
              src="/service-menu-flow-sp.png"
              alt=""
              width={390}
              height={586}
              className="block sm:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
