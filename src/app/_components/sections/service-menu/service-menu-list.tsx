import { Compass, ClipboardCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MenuItem } from "./service-menu-table";

export function ServiceMenuList({ data }: { data: MenuItem[] }) {
  return (
    <div className="flex flex-col gap-10">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col gap-3">
          <div className="flex flex-col gap-[1px]">
            <div className="flex flex-col">
              <span className="block h-[0.8em] overflow-hidden text-xs font-extrabold !leading-none text-emerald-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="h-px w-6 bg-emerald-500" />
            </div>
            <h3 className="whitespace-pre-line text-lg font-bold !leading-[1.6] tracking-wider text-gray-800">
              {item.category.replace("\n", "")}
            </h3>
          </div>

          <div className="flex flex-col gap-3">
            <MenuCard
              icon={
                <Compass className="size-4 text-blue-500" strokeWidth={2.5} />
              }
              label="戦略"
              labelColor="text-blue-500"
              bgColor="bg-blue-50"
              items={item.strategy}
            />
            <MenuCard
              icon={
                <ClipboardCheck
                  className="size-4 text-orange-500"
                  strokeWidth={2.5}
                />
              }
              label="実行・管理"
              labelColor="text-orange-500"
              bgColor="bg-orange-50"
              items={item.execution}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function MenuCard({
  icon,
  label,
  labelColor,
  bgColor,
  items,
}: {
  icon: React.ReactNode;
  label: string;
  labelColor: string;
  bgColor: string;
  items: string[];
}) {
  return (
    <div className={cn(bgColor, "rounded px-4 py-4")}>
      <div className="flex items-center gap-1.5">
        {icon}
        <span className={`text-sm font-bold tracking-wider ${labelColor}`}>
          {label}
        </span>
      </div>
      <ul className="mt-1.5 text-xs font-medium !leading-[1.7] tracking-wider text-gray-800">
        {items.map((text, i) => (
          <li key={i} className="flex items-baseline gap-0.5">
            <span>・</span>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
