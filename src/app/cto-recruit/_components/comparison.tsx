import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

/* ---- æ¡C: ã«ãã´ãªå SVG ã¢ã¤ã³ã³ ---- */
type CategoryIconName =
  | "layers"
  | "code"
  | "send"
  | "users-round"
  | "file-check"
  | "book-open";

const categoryIconPaths: Record<CategoryIconName, React.ReactNode> = {
  layers: (
    <>
      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
      <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
      <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
    </>
  ),
  code: (
    <>
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </>
  ),
  send: (
    <>
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
      <path d="m21.854 2.147-10.94 10.939" />
    </>
  ),
  "users-round": (
    <>
      <path d="M18 21a8 8 0 0 0-16 0" />
      <circle cx="10" cy="8" r="5" />
      <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
    </>
  ),
  "file-check": (
    <>
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m9 15 2 2 4-4" />
    </>
  ),
  "book-open": (
    <>
      <path d="M12 7v14" />
      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
    </>
  ),
};

function CategoryIcon({
  icon,
  size = "pc",
}: {
  icon: CategoryIconName;
  size?: "pc" | "sp";
}) {
  const containerClass =
    size === "pc"
      ? "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100"
      : "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-gray-100";
  const svgClass = size === "pc" ? "h-4 w-4 text-gray-500" : "h-3.5 w-3.5 text-gray-500";

  return (
    <span className={containerClass}>
      <svg
        viewBox="0 0 24 24"
        className={svgClass}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {categoryIconPaths[icon]}
      </svg>
    </span>
  );
}

/* 24px SVG ã¤ã³ã¸ã±ã¼ã¿ã¼ â æ¡A: ãã­ã¹ãããè¦è¦¤è¨å·ãä¸»å½¹ã« */
function ComparisonDash() {
  return (
    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-100">
      <svg viewBox="0 0 24 24" className="h-3 w-3">
        <line
          x1="6"
          y1="12"
          x2="18"
          y2="12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="text-gray-400"
        />
      </svg>
    </span>
  );
}

function ComparisonCheck() {
  return (
    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500">
      <svg viewBox="0 0 24 24" className="h-3 w-3">
        <polyline
          points="6,12 10,16 18,8"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

const comparisonItems: {
  category: string;
  icon: CategoryIconName;
  rpo: string;
  reminus: string;
}[] = [
  {
    category: "æ¯æ´ç¯å²",
    icon: "layers",
    rpo: "ã¹ã«ã¦ãã»æ¥ç¨èª¿æ´ãä¸­å¿",
    reminus: "å¨å·¥ç¨ãä¸è²«ãã¦ä¼´èµ°",
  },
  {
    category: "æå½èã®æè¡å",
    icon: "code",
    rpo: "éã¨ã³ã¸ãã¢ãå¯¾å¿",
    reminus: "CTOçµé¨èãç´æ¥æå½",
  },
  {
    category: "ã¹ã«ã¦ã",
    icon: "send",
    rpo: "ãã³ãã¬ã¼ãå¤§ééä¿¡",
    reminus: "åè£èãã¨ã«ã«ã¹ã¿ãã¤ãº",
  },
  {
    category: "é¢æ¥ã»è¦æ¥µã",
    icon: "users-round",
    rpo: "æ¥ç¨èª¿æ´ã»FBå±æã®ã¿",
    reminus: "è¨­è¨ã»åå¸­ã»é²ç»FBã¾ã§",
  },
  {
    category: "ãªãã¡ã¼æ¯æ´",
    icon: "file-check",
    rpo: "å¯¾è±¡å¤",
    reminus: "æ¡ä»¶è¨­è¨ã»ã¬ã¿ã¼ã¬ãã¥ã¼",
  },
  {
    category: "ãã¦ãã¦ã®èç©",
    icon: "book-open",
    rpo: "ãã©ãã¯ããã¯ã¹å",
    reminus: "ç©æ¥µå¬éã»åè£½åæ¯æ´",
  },
];

export function Comparison({ className }: { className?: string }) {
  return (
    <section
      id="comparison"
      className={cn("content-auto py-16 font-sans sm:py-24 md:py-24", className)}
    >
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="ã¨ã³ã¸ãã¢RPOã¨ã®éã"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
          align="center"
        >
          <span className="highlight-underline text-emerald-500">
            RPOãè¸ã¿è¾¼ããªãé å
          </span>
          ããã
          <br className="hidden sm:inline" />
          Reminusã®æ¬é ã
        </SectionHeader>

        <p className="mt-4 text-center text-sm !leading-[1.9] tracking-wide text-gray-600 sm:mt-6 sm:text-base">
          RPOã®ä¸»æ¥­åã¯äºåçãªæ¡ç¨ä»£è¡ã
          <br className="hidden sm:inline" />
          Reminusã¯é¢æ¥ã»è¦æ¥µãã»ãªãã¡ã¼ã¾ã§è¸ã¿è¾¼ãã¾ãã
        </p>

        {/* PC: ãã¼ãã« */}
        <div className="relative mt-10 hidden overflow-hidden rounded-2xl border border-solid border-gray-200 shadow-sm sm:mt-14 md:block">
          {/* Reminusã«ã©ã ãã¤ã©ã¤ã */}
          <div
            className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-[39%] rounded-r-2xl"
            style={{
              boxShadow:
                "inset 0 0 40px rgba(16, 185, 129, 0.10), -4px 0 24px rgba(16, 185, 129, 0.08)",
            }}
          />
          <table className="relative w-full">
            <thead>
              <tr>
                <th className="w-[22%] border-b border-solid border-gray-200 bg-gray-50 px-6 py-4 text-left text-sm font-bold tracking-wider text-gray-500" />
                <th className="w-[39%] border-b border-l border-solid border-gray-200 bg-gray-50 px-6 py-4 text-center text-sm font-bold tracking-wider text-gray-500">
                  ä¸è¬çãªã¨ã³ã¸ãã¢RPO
                </th>
                <th className="w-[39%] border-b border-l-2 border-solid border-emerald-300 bg-emerald-100 px-6 py-4 text-center text-sm font-bold tracking-wider text-emerald-700">
                  Reminus CTOæ¡ç¨
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonItems.map((item, index) => (
                <tr
                  key={index}
                  className={
                    index < comparisonItems.length - 1
                      ? "border-b border-solid border-gray-100"
                      : ""
                  }
                >
                  <td className="bg-gray-50 px-6 py-5 text-sm font-bold tracking-wider text-gray-700">
                    <div className="flex items-center gap-2.5">
                      <CategoryIcon icon={item.icon} size="pc" />
                      <span>{item.category}</span>
                    </div>
                  </td>
                  <td className="border-l border-solid border-gray-100 px-5 py-4 text-sm">
                    <div className="flex items-start gap-3">
                      <ComparisonDash />
                      <span className="text-sm !leading-[1.7] tracking-wide text-gray-400">
                        {item.rpo}
                      </span>
                    </div>
                  </td>
                  <td className="border-l-2 border-solid border-emerald-300 bg-emerald-50 px-5 py-4 text-sm">
                    <div className="flex items-start gap-3">
                      <ComparisonCheck />
                      <span className="text-sm font-medium !leading-[1.7] tracking-wide text-gray-700">
                        {item.reminus}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SP: ã«ã¼ãåï¼RPO vs Reminus ãæç¢ºã«åºå¥ï¼ */}
        <div className="mt-8 flex flex-col gap-4 md:hidden">
          {comparisonItems.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-solid border-gray-200 shadow-sm"
            >
              {/* ã«ãã´ãªã¼ãããã¼ */}
              <div className="bg-gray-50 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <CategoryIcon icon={item.icon} size="sp" />
                  <span className="text-[13px] font-bold tracking-wider text-gray-600">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* RPO */}
              <div className="border-b border-solid border-gray-100 px-4 py-3">
                <div className="mb-1 flex items-center gap-2">
                  <ComparisonDash />
                  <span className="text-[11px] font-bold tracking-wider text-gray-400">
                    ä¸è¬çãªRPO
                  </span>
                </div>
                <p className="pl-[34px] text-sm !leading-[1.8] tracking-wide text-gray-500">
                  {item.rpo}
                </p>
              </div>

              {/* Reminus */}
              <div className="rounded-lg bg-emerald-50/40 px-4 py-3 ring-1 ring-emerald-200/60">
                <div className="mb-1 flex items-center gap-2">
                  <ComparisonCheck />
                  <span className="text-[11px] font-bold tracking-wider text-emerald-600">
                    Reminus
                  </span>
                </div>
                <p className="pl-[34px] text-sm font-medium !leading-[1.8] tracking-wide text-gray-800">
                  {item.reminus}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* TrackRecordã¸ã®æ¥ç¶ã³ãã¼ */}
        <p className="mt-10 text-center text-sm !leading-[1.9] tracking-wide text-gray-500 sm:mt-14 sm:text-base">
          ãã®å¯¾å¿åã¯ãCTOä»£è¡ã¨ãã¦å¹ã£ã¦ããå®ç¸¾ã«è£ä»ãããã¦ãã¾ãã
        </p>
      </div>
    </section>
  );
}
