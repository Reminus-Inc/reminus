import Image from "next/image";

/**
 * C2版クライアントロゴ。
 * - 〜lg: 結合ロゴストリップ(logo-sp-sushi.png)を純CSSマーキーで無限ループ。
 *   ストリップを4コピー(=前半2枚 + 後半2枚)並べ、トラックを translateX(-50%) で流す。
 *   1ハーフ(=ストリップ2枚分)が lg 未満の最大画面幅を超えるので、タブレット幅でも
 *   ループ末尾に余白/継ぎ目が出ない。will-change-transform で compositor に乗せ、
 *   タッチスクロール中もアニメが止まりにくいようにしている。
 * - lg〜: 従来どおり静止表示（マーキーなし）。
 */
export function ClientLogos() {
  return (
    <div className="mx-auto flex justify-center lg:px-12">
      {/* 〜lg: マーキー */}
      <div className="w-full overflow-hidden lg:hidden">
        <div className="flex w-max animate-[c2-logo-marquee_36s_linear_infinite] will-change-transform motion-reduce:animate-none">
          {[0, 1, 2, 3].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy !== 0}
              className="shrink-0 pl-6"
            >
              <Image
                src="/logos/logo-sp-sushi.png"
                alt={copy === 0 ? "クライアント様ロゴ" : ""}
                width={2176}
                height={108}
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
