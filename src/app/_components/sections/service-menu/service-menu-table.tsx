import { cn } from "@/lib/utils";

export type MenuItem = {
  category: string;
  strategy: string[];
  execution: string[];
};

export function ServiceMenuTable({ data }: { data: MenuItem[] }) {
  return (
    <div className="bleed md:bleed-none mt-12 pl-6 md:mt-16 md:pl-0">
      <div className="overflow-x-auto pb-2 md:overflow-visible">
        <div className="bg-gray-50 md:mx-auto md:w-full md:max-w-[1000px]">
          {/* ヘッダー行 */}
          <div className="flex">
            <div className="sticky left-0 z-10 w-[80px] shrink-0 bg-gray-50 sm:w-[100px] md:static md:w-[180px]" />
            <HeaderCell className="min-w-[240px] flex-1 rounded-tl-lg">
              戦略
            </HeaderCell>
            <div className="w-[2px] shrink-0 self-stretch" />
            <HeaderCell className="min-w-[240px] flex-1 rounded-tr-lg">
              実行・管理
            </HeaderCell>
            <div className="w-6 shrink-0 md:hidden" />
          </div>

          {data.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === data.length - 1;
            return (
              <div key={index} className="flex">
                <CategoryCell
                  className={cn(
                    "sticky left-0 z-10 w-[80px] shrink-0 sm:w-[100px] md:static md:w-[180px]",
                    isFirst && "rounded-tl-lg",
                    isLast ? "rounded-bl-lg" : "border-b-[2px] border-white"
                  )}
                >
                  {item.category}
                </CategoryCell>
                <ContentCell
                  className={cn(
                    "min-w-[240px] flex-1",
                    !isLast && "border-b-[2px] border-white"
                  )}
                >
                  <MenuList items={item.strategy} />
                </ContentCell>
                <div className="w-[2px] shrink-0 self-stretch" />
                <ContentCell
                  className={cn(
                    "min-w-[240px] flex-1",
                    isLast && "rounded-br-lg",
                    !isLast && "border-b-[2px] border-white"
                  )}
                >
                  <MenuList items={item.execution} />
                </ContentCell>
                <div className="w-6 shrink-0 md:hidden" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
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
      <h3 className="whitespace-pre-line text-center text-xs font-medium !leading-[1.6] tracking-wider text-white sm:text-sm md:text-xl lg:text-2xl">
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
        "flex items-center justify-center bg-gray-600 p-3 sm:p-4 sm:py-5 md:px-10 md:py-5",
        className
      )}
    >
      <p className="text-center text-xs font-medium !leading-[1.6] tracking-wider text-white sm:text-sm md:text-xl lg:text-2xl">
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
    <div
      className={cn(
        "bg-gray-100 px-3.5 py-4 sm:px-4 sm:py-5 md:px-10 md:py-8",
        className
      )}
    >
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
