import type { ReactNode } from "react";
import Image from "next/image";
import { ReminusLogo } from "../../ui/reminus-logo";
import { cn } from "@/lib/utils";

export type ComparisonRow = {
  title: string;
  reminus: CellData;
  advisor: CellData;
  freelance: CellData;
};

type CellData = {
  mark: MarkType;
  description?: string;
};

export const MARK_TYPE = {
  CIRCLE: "circle",
  DOUBLE_CIRCLE: "doubleCircle",
  TRIANGLE: "triangle",
  TRIANGLE_TO_CIRCLE: "triangle-to-circle",
} as const;
type MarkType = (typeof MARK_TYPE)[keyof typeof MARK_TYPE];
const MARK_ICON = {
  [MARK_TYPE.CIRCLE]: "/icon/circle.svg",
  [MARK_TYPE.DOUBLE_CIRCLE]: "/icon/double-circle.svg",
  [MARK_TYPE.TRIANGLE]: "/icon/triangle.svg",
} as const satisfies Record<
  Exclude<MarkType, typeof MARK_TYPE.TRIANGLE_TO_CIRCLE>,
  string
>;

export function ComparisonTable({ data }: { data: ComparisonRow[] }) {
  return (
    <div className="bleed flex justify-center pl-6 lg:px-0">
      <div className="overflow-x-auto pb-2">
        <div className="flex items-center">
          {/* 1 列目 */}
          <div className="sticky left-0 z-10 flex w-[88px] shrink-0 flex-col bg-white py-1 md:w-[140px] lg:w-[180px]">
            <TitleEmptyCell />
            {data.map((row, i) => (
              <TitleCell
                title={row.title}
                isLast={i === data.length - 1}
                key={i}
              />
            ))}
          </div>

          {/* 2 列目以降 */}
          <div className="flex flex-1 items-start">
            <div className="relative -my-1 p-1 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:border-[4px] before:border-emerald-500 before:content-['']">
              <Column
                cells={data.map((r) => r.reminus)}
                className="relative w-[148px] bg-emerald-50/80 md:w-[220px] lg:w-[280px]"
              />
            </div>
            <div className="w-[3px] shrink-0 self-stretch bg-white md:w-[4px]" />
            <Column
              header="技術顧問会社"
              cells={data.map((r) => r.advisor)}
              className="w-[120px] md:w-[180px] lg:w-[240px]"
            />
            <div className="w-[3px] shrink-0 self-stretch bg-white md:w-[4px]" />
            <Column
              header="フリーランス"
              cells={data.map((r) => r.freelance)}
              className="mr-6 w-[112px] self-stretch md:w-[180px] lg:mr-0 lg:w-[240px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

type ColumnProps = {
  header?: string;
  cells: CellData[];
  className?: string;
};
function Column({ header, cells, className }: ColumnProps) {
  return (
    <div className={cn("flex shrink-0 flex-col", className)}>
      <HeaderCell title={header} />
      {cells.map((cell, i) => (
        <DataCell data={cell} isLast={i === cells.length - 1} key={i} />
      ))}
    </div>
  );
}

function CommonCell({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-[60px] items-center justify-center px-2 md:h-[72px] lg:h-[88px]",
        className
      )}
    >
      {children}
    </div>
  );
}

function TitleCell({ title, isLast }: { title: string; isLast: boolean }) {
  return (
    <CommonCell
      className={cn(
        "bg-gray-200",
        isLast ? "" : "border-b-[3px] border-white md:border-b-[4px]"
      )}
    >
      <span className="text-xs font-bold !leading-[1.5] tracking-wider text-gray-800 md:text-base lg:text-lg">
        {title}
      </span>
    </CommonCell>
  );
}

function TitleEmptyCell() {
  return <CommonCell />;
}

function HeaderCell({ title }: { title?: string }) {
  return (
    <CommonCell
      className={cn(title == null ? "bg-emerald-500" : "bg-gray-600")}
    >
      <div className="flex items-baseline gap-1">
        {title == null && (
          <ReminusLogo className="h-auto w-[60px] text-white md:w-[90px] lg:w-[110px]" />
        )}
        <span className="text-xs font-bold !leading-[1.5] tracking-wider text-white md:text-base lg:text-lg">
          {title ? title : "CTO代行"}
        </span>
      </div>
    </CommonCell>
  );
}

function DataCell({ data, isLast }: { data: CellData; isLast: boolean }) {
  return (
    <CommonCell
      className={cn(
        isLast ? "" : "border-b-[3px] border-white md:border-b-[4px]"
      )}
    >
      {data.description != null ? (
        <div className="flex flex-col items-center gap-1 md:gap-0.5">
          <MarkIcon mark={data.mark} />
          <p className="text-xs font-bold !leading-[1.5] tracking-wider text-gray-800 md:text-sm lg:text-base">
            {data.description}
          </p>
        </div>
      ) : (
        <MarkIcon mark={data.mark} />
      )}
    </CommonCell>
  );
}

function MarkIcon({ mark }: { mark: MarkType }) {
  if (mark === MARK_TYPE.TRIANGLE_TO_CIRCLE) {
    return (
      <span className="flex items-center gap-1">
        <Image
          src="/icon/triangle.svg"
          width={20}
          height={20}
          className="h-auto w-[16px] md:w-[20px] lg:w-[28px]"
          alt=""
        />
        <span className="text-xs font-bold text-gray-800 lg:text-sm">〜</span>
        <Image
          src="/icon/circle.svg"
          width={20}
          height={20}
          className="h-auto w-[16px] md:w-[20px] lg:w-[28px]"
          alt=""
        />
      </span>
    );
  }
  return (
    <Image
      src={MARK_ICON[mark]}
      width={20}
      height={20}
      className="h-auto w-[16px] md:w-[20px] lg:w-[28px]"
      alt=""
    />
  );
}
