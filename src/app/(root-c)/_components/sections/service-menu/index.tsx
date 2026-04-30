import { SectionHeader } from "@/app/_components/ui/section-header";
import { CustomDownloadButton } from "@/app/_components/ui/download-button";
import { cn } from "@/lib/utils";
import { Code2, Layers, Network, UserPlus } from "lucide-react";
import { ServiceMenuTable } from "./service-menu-table";
import { ServiceMenuList } from "./service-menu-list";
import type { MenuItem } from "./service-menu-table";

const menuData: MenuItem[] = [
  {
    category: "技術",
    en: "Technology",
    icon: Code2,
    items: [
      "事業に合わせた技術選定",
      "ROIの合う全体設計・技術判断",
      "プロダクト構想の可否判断・開発計画",
      "セキュリティや障害対策",
      "エンジニアや外注先の技術監修",
    ],
  },
  {
    category: "製品",
    en: "Product",
    icon: Layers,
    items: [
      "製品ロードマップの策定",
      "製品開発・企画のプロセス化",
      "価格設計やGTM戦略、PMFの進め方",
      "ARPA向上の機能整理",
      "AI機能の企画"
    ],
  },
  {
    category: "組織",
    en: "Organization",
    icon: Network,
    items: [
      "開発速度の最大化・AI活用",
      "開発組織の運営支援",
      "企画〜開発〜販売の連携仕組み化",
      "営業・CSまで含めた組織体制策定",
      "エンジニアの給与や人事評価設計",
    ],
  },
  {
    category: "採用",
    en: "Recruiting",
    icon: UserPlus,
    items: [
      "媒体選定",
      "求人票作成・選考プロセス設計",
      "スカウトメッセージの代行",
      "面談レビュー・同席",
      "採用ファネルのPDCA推進",
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
          label="Service"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
        >
          <span className="highlight-underline text-emerald-500">
            広範なSaaSの課題をカバー。
          </span>
          <br />
          ノウハウと最適なメンバー選定で課題解決を進めます。
        </SectionHeader>

        <div className="mt-8 md:mt-16">
          <div className="sm:hidden">
            <ServiceMenuList data={menuData} />
          </div>
          <div className="hidden sm:block">
            <ServiceMenuTable data={menuData} />
          </div>
        </div>

        <div className="bleed mt-16 px-4">
          <CustomDownloadButton
            subtitle="Reminus CTO代行"
            title="資料ダウンロード"
            href="/download"
          />
        </div>
      </div>
    </section>
  );
}
