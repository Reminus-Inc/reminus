"use client";
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
  { name: "カイゼンベース", logo: "/logos/kaizen-base.png",  width: 242, height: 39,  spWidth: 242, spHeight: 39 },
  { name: "千葉エコ・エネルギー", logo: "/logos/chiba-eco.webp", width: 92,  height: 38,  spWidth: 92,  spHeight: 38 },
  { name: "DRESS CODE", logo: "/logos/dress_code.svg",       width: 228, height: 28,  spWidth: 205, spHeight: 25 },
  { name: "Zaimo", logo: "/logos/zaimo.svg",                  width: 134, height: 28,  spWidth: 134,  spHeight: 28 },
  { name: "SalesBrain", logo: "/logos/salesbrain.png",        width: 201, height: 34,  spWidth: 201, spHeight: 34 },
];

export function ClientLogos() {
  return (
    <div className="pt-12 sm:pt-16">
        {/* --- XL: 固定表示（"一番でだす"を維持） --- */}
        <div className="hidden xl:block mx-auto max-w-[1220px] lg:w-[90%]">
          <div className="flex max-w-none flex-wrap items-center justify-between">
            {logos.map((l) => (
              <LogoItem key={l.name} logo={l} />
            ))}
          </div>
        </div>

        {/* --- XL未満: シームレス無限スクロール --- */}
        <div className="xl:hidden overflow-hidden">
          {/* 同一グループを2回並べ、2つめが左端にきたときにリセット */}
          <div className="flex animate-sushi w-max will-change-transform">
            {/* グループA */}
            <LogoBelt keyPrefix="A" />
            {/* グループB（Aの完全コピー） */}
            <LogoBelt keyPrefix="B" />
          </div>
        </div>

        <p className="mt-4 flex flex-wrap justify-center text-[10px] text-gray-400 mt-2">
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
        className="block sm:hidden object-contain"
        style={{ width: `${l.spWidth}px`, height: `${l.spHeight}px`, objectFit: "contain" }}
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
    <div className="flex w-max items-center gap-4">
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

