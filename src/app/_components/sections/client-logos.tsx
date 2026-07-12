import Image from "next/image";

export function ClientLogos() {
  return (
    <div className="mx-auto flex justify-center px-0 lg:px-12">
      {/* 〜 md */}
      <div className="max-w-[400px] sm:max-w-[520px] md:max-w-[600px] lg:hidden">
        <Image
          src={"/logos/logo-sp-notsushi.png?v=2"}
          alt="クライアント様ロゴ"
          width={1152}
          height={472}
          loading="eager"
          priority
          fetchPriority="high"
          sizes="(min-width: 768px) 600px, (min-width: 640px) 520px, 400px"
        />
      </div>

      {/* lg 〜 */}
      <div className="hidden max-w-[1280px] lg:block">
        <Image
          src={"/logos/logo-pc.png"}
          alt="クライアント様ロゴ"
          width={2745}
          height={108}
          sizes="1280px"
        />
      </div>
    </div>
  );
}
