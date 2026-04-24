import type { MenuItem } from "./service-menu-table";

export function ServiceMenuList({ data }: { data: MenuItem[] }) {
  return (
    <div className="flex flex-col gap-4">
      {data.map((item, index) => {
        const Icon = item.icon;
        return (
          <article
            key={index}
            className="rounded-2xl bg-white p-5 shadow-[0_12px_32px_-14px_rgba(17,24,39,0.14)] ring-1 ring-gray-200/60"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-baseline gap-3">
                <span className="text-[32px] font-bold italic !leading-none text-emerald-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-[9.5px] font-medium tracking-[0.3em] text-gray-500">
                    {item.en.toUpperCase()}
                  </p>
                  <h3 className="mt-0.5 text-lg font-bold tracking-[0.1em] text-gray-800">
                    {item.category}
                  </h3>
                </div>
              </div>
              <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-50">
                <Icon className="size-4 text-emerald-600" strokeWidth={1.7} />
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-[13px] !leading-[1.8] text-gray-800">
              {item.items.map((text, i) => (
                <li key={i} className="flex items-baseline gap-2">
                  <span className="mt-[0.5em] block size-[4px] shrink-0 rounded-full bg-emerald-500" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  );
}
