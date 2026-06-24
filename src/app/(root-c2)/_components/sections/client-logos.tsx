import Image from "next/image";

/**
 * C2版クライアントロゴ。
 * - SP/タブレット(〜lg): PC用の横一列ストリップ(logo-pc.png)を純CSSマーキーで無限ループ。
 *   同じストリップを2コピー並べ、トラックを translateX(-50%) で流して継ぎ目なくループ。
 * - lg〜: 従来どおり静止表示（マーキーなし）。
 */
export function ClientLogos() {
  return (
    <div className="mx-auto flex justify-center lg:px-12">
      {/* 〜lg: マーキー */}
      <div className="w-full overflow-hidden lg:hidden">
        <div className="flex w-max animate-[c2-logo-marquee_36s_linear_infinite] motion-reduce:animate-none hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="shrink-0 pl-6"
            >
              <Image
                src="/logos/logo-sp-sushi.png"
                alt={copy === 0 ? "クライアント様ロゴ" : ""}
                width={577}
                height={39}
                priority={copy === 0}
                className="h-14 w-auto max-w-none sm:h-16"
              />
            </div>
          ))}
        </div>
        <style>{`@keyframes c2-logo-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </div>

      {/* lg〜: 従来の静止表示 */}
      <div className="hidden max-w-[1200px] lg:block">
        <Image
          src="/logos/logo-pc.png"
          alt="クライアント様ロゴ"
          width={2088}
          height={72}
          sizes="1200px"
        />
      </div>
    </div>
  );
}
