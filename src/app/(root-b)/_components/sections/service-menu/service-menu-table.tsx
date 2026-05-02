import type { LucideIcon } from "lucide-react";

export type MenuItem = {
  category: string;
  en: string;
  icon: LucideIcon;
  items: string[];
};

export function ServiceMenuTable({ data }: { data: MenuItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-6">
      {data.map((item, index) => (
        <Card key={index} index={index} item={item} />
      ))}
    </div>
  );
}

function Card({ index, item }: { index: number; item: MenuItem }) {
  const Icon = item.icon;
  return (
    <article className="rounded-2xl bg-white p-8 shadow-[0_18px_48px_-18px_rgba(17,24,39,0.12)] ring-1 ring-gray-200/60 md:p-10">
      <div className="flex items-start justify-between">
        <div className="flex items-baseline gap-3 md:gap-4">
          <span className="text-[40px] font-bold italic !leading-none text-emerald-500 md:text-[44px]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <p className="text-[10px] font-medium tracking-[0.3em] text-gray-500 md:text-[10.5px]">
              {item.en.toUpperCase()}
            </p>
            <h3 className="mt-0.5 text-xl font-bold tracking-[0.1em] text-gray-800 md:text-[22px]">
              {item.category}
            </h3>
          </div>
        </div>
        <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 md:size-11">
          <Icon className="size-5 text-emerald-600" strokeWidth={1.7} />
        </div>
      </div>
      <ul className="mt-6 space-y-2.5 text-sm !leading-[1.8] text-gray-800 md:mt-7 md:text-[15px]">
        {item.items.map((text, i) => (
          <li key={i} className="flex items-baseline gap-3">
            <span className="mt-[0.55em] block size-[5px] shrink-0 rounded-full bg-emerald-500" />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
