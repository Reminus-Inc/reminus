import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";

export type MenuItem = {
  category: string;
  en: string;
  icon: LucideIcon;
  items: string[];
};

export function ServiceMenuTable({ data }: { data: MenuItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
      {data.map((item, index) => (
        <Card key={index} index={index} item={item} />
      ))}
    </div>
  );
}

function Card({ index, item }: { index: number; item: MenuItem }) {
  return (
    <article className="rounded-lg border border-gray-200/60 bg-white p-5 shadow-[0_0_20px_rgba(15,23,42,0.025),0_2px_6px_rgba(15,23,42,0.015)] sm:p-6 md:p-8">
      <div className="ml-0.5 flex flex-col">
        <span className="block h-[0.8em] overflow-hidden text-xs font-extrabold !leading-none text-emerald-500 sm:text-sm">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="h-px w-6 bg-emerald-500" />
      </div>

      <h3 className="mt-1.5 text-xl font-bold tracking-wide text-gray-800 sm:text-2xl md:text-3xl">
        {item.category}
      </h3>

      <ul className="mt-4 flex flex-col gap-2 sm:mt-5">
        {item.items.map((text, i) => (
          <li key={i} className="flex items-baseline gap-2">
            <span className="inline-flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full bg-emerald-50 text-emerald-500 sm:h-[20px] sm:w-[20px]">
              <Check
                className="size-3 sm:h-[13px] sm:w-[13px]"
                strokeWidth={4}
              />
            </span>
            <span className="text-sm !leading-[1.5] tracking-wide text-gray-800 sm:text-base">
              {text}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
