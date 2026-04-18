import { SectionHeader } from "../ui/section-header";
import { cn } from "@/lib/utils";
import { Fragment } from "react";

import Image from "next/image";
const menuData = [
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
    <section id="service-menu" className={cn("py-24 sm:py-32", className)}>
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

        {/* 〜 md */}
        <div className="mx-auto mt-12 flex max-w-[480px] flex-col justify-center gap-10 md:hidden">
          {menuData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[100px_1fr] overflow-hidden rounded-lg"
            >
              <CategoryCell>{item.category}</CategoryCell>

              <div className="flex flex-col">
                <div className="flex flex-col">
                  <HeaderCell>戦略</HeaderCell>
                  <ContentCell>
                    <MenuList items={item.strategy} />
                  </ContentCell>
                </div>

                <div className="flex flex-col">
                  <HeaderCell>実行・管理</HeaderCell>
                  <ContentCell>
                    <MenuList items={item.execution} />
                  </ContentCell>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* md 〜 */}
        <div className="mt-16 hidden w-full max-w-[1000px] rounded-lg md:mx-auto md:grid md:grid-cols-[180px_1fr_1px_1fr]">
          <HeaderCell className="col-start-2 rounded-tl-lg">戦略</HeaderCell>
          <HeaderCell className="col-start-4 rounded-tr-lg">
            実行・管理
          </HeaderCell>

          {menuData.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === menuData.length - 1;

            return (
              <Fragment key={index}>
                <CategoryCell
                  className={cn(
                    "col-start-1",
                    isFirst && "rounded-tl-lg",
                    isLast && "rounded-bl-lg",
                    !isLast && "border-b border-white"
                  )}
                >
                  {item.category}
                </CategoryCell>

                <ContentCell
                  className={cn(
                    "col-start-2",
                    !isLast && "border-b border-white"
                  )}
                >
                  <MenuList items={item.strategy} />
                </ContentCell>

                <div className="col-start-3 bg-white" />

                <ContentCell
                  className={cn(
                    "col-start-4",
                    isLast && "rounded-br-lg",
                    !isLast && "border-b border-white"
                  )}
                >
                  <MenuList items={item.execution} />
                </ContentCell>
              </Fragment>
            );
          })}
        </div>

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

function CategoryCell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-emerald-500 p-2 md:p-3 lg:p-5",
        className
      )}
    >
      <h3 className="whitespace-pre-line text-center text-sm !leading-[1.6] tracking-widest text-white md:text-xl lg:text-2xl">
        {children}
      </h3>
    </div>
  );
}

function HeaderCell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-gray-600 p-3 md:px-10 md:py-5",
        className
      )}
    >
      <p className="text-center text-sm !leading-[1.6] tracking-widest text-white md:text-xl lg:text-2xl">
        {children}
      </p>
    </div>
  );
}

function ContentCell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("bg-gray-100 px-4 py-5 md:px-10 md:py-8", className)}>
      {children}
    </div>
  );
}

function MenuList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1 text-xs !leading-[1.5] tracking-wider md:text-base lg:text-lg">
      {items.map((text, i) => (
        <li key={i} className="flex items-baseline gap-0.5">
          <span>・</span>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}
