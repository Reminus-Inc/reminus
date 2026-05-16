import Image from "next/image";

export function ClientLogos() {
  return (
    <div className="mx-auto flex justify-center px-4 lg:px-12">
      {/* 〜 md */}
      <div className="max-w-[400px] sm:max-w-[520px] md:max-w-[600px] lg:hidden">
        <Image
          src={"/logos/logo-sp.png"}
          alt="クライアント様ロゴ"
          width={1011}
          height={252}
          sizes="(min-width: 768px) 600px, (min-width: 640px) 520px, 400px"
        />
      </div>

      {/* lg 〜 */}
      <div className="hidden max-w-[1200px] lg:block">
        <Image
          src={"/logos/logo-pc.png"}
          alt="クライアント様ロゴ"
          width={2088}
          height={72}
          sizes="1200px"
        />
      </div>
    </div>
  );
}
