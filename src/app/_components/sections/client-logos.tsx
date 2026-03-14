import Image from "next/image";

export function ClientLogos() {
  return (
    <div className="pt-8 sm:pt-16">
      <div className="mx-auto flex justify-center px-6 lg:px-12">
        {/* 〜 md */}
        <div className="max-w-[400px] sm:max-w-[520px] md:max-w-[600px] lg:hidden">
          <Image
            src={"/logos/logo-sp.png"}
            alt="クライアント様ロゴ"
            width={1011}
            height={252}
          />
        </div>

        {/* lg 〜 */}
        <div className="hidden max-w-[1200px] lg:block">
          <Image
            src={"/logos/logo-pc.png"}
            alt="クライアント様ロゴ"
            width={2088}
            height={72}
          />
        </div>
      </div>

      <p className="mt-3 flex justify-center font-sans text-[10px] text-gray-400">
        <span className="font-sans">※一部CTOパートナー以外を含む</span>
      </p>
    </div>
  );
}
