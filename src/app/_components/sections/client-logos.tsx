import Image from "next/image";

import { cn } from "@/lib/utils";

type Logo = {
  name: string;
  logo: string;
  width: number;
  height: number;
  spWidth: number;
  spHeight: number;
};

const logos: Logo[] = [
  { name: "カイゼンベース", logo: "/logos/kaizen-base.png",  width: 200, height: 39,  spWidth: 120, spHeight: 20 },
  { name: "千葉エコ・エネルギー", logo: "/logos/chiba-eco.webp", width: 92,  height: 38,  spWidth: 80,  spHeight: 25 },
  { name: "1backoffice", logo: "/logos/1backoffice.png", width: 160,  height: 38,  spWidth: 100,  spHeight: 23 },
  { name: "DRESS CODE", logo: "/logos/dress_code.svg",       width: 160, height: 28,  spWidth: 120, spHeight: 18 },
  { name: "Zaimo", logo: "/logos/zaimo.svg",                  width: 120, height: 28,  spWidth: 80,  spHeight: 12 },
  { name: "SalesBrain", logo: "/logos/salesbrain.png",        width: 160, height: 34,  spWidth: 100, spHeight: 21 },
];

export function ClientLogos() {
  return (
    <div className="pt-12 sm:pt-16 font-sans">
        {/* --- LG以上: 1行表示（ファーストビューが左右レイアウトの時） --- */}
        <div className="hidden lg:block mx-auto max-w-[1220px] lg:w-[90%]">
          <div className="flex max-w-none flex-nowrap items-center justify-between gap-x-4">
            {logos.map((l) => (
              <LogoItem key={l.name} logo={l} />
            ))}
          </div>
        </div>

        {/* --- LG未満: 3×2グリッド表示 --- */}
        <div className="lg:hidden px-4">
          <div className="grid grid-cols-3 gap-x-1 gap-y-8 justify-items-center">
            {logos.map((l) => (
              <LogoItem key={l.name} logo={l} />
            ))}
          </div>
        </div>

        <p className="mt-4 flex flex-wrap justify-center text-[10px] text-gray-400">
          <span>※一部CTOパートナー以外を含む</span>
        </p>
      </div>
  );
}

// ロゴ1つの表示コンポーネント
type LogoItemProps = {
  logo: Logo;
  className?: string;
};
function LogoItem({ logo: l, className }: LogoItemProps) {
  return (
    <div className={cn("flex-shrink-0 flex items-center justify-center", className)}>
      {/* SP（〜639px） */}
      <Image
        src={l.logo}
        alt={`${l.name} logo`}
        width={l.spWidth}
        height={l.spHeight}
        className="block sm:hidden object-contain w-full h-auto"
        style={{ maxWidth: `${l.spWidth}px`, maxHeight: `${l.spHeight}px` }}
        priority={false}
      />
      {/* sm以上（640px〜） */}
      <Image
        src={l.logo}
        alt={`${l.name} logo`}
        width={l.width}
        height={l.height}
        className="hidden sm:block object-contain"
        style={{ width: `${l.width}px`, height: `${l.height}px`, objectFit: "contain" }}
        priority={false}
      />
    </div>
  );
}

function LogoBelt({ keyPrefix = "" }: { keyPrefix?: string }) {
  return (
    <div className="flex w-max items-center gap-0">
      {logos.map((l) => (
        <LogoItem
          key={keyPrefix ? `${keyPrefix}-${l.name}` : l.name}
          logo={l}
          className="px-4 md:px-6"
        />
      ))}
    </div>
  );
}

