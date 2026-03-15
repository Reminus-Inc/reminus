import { cn } from "@/lib/utils";
import Image from "next/image";
import { ContactButton } from "@/app/_components/ui/contact-button";

export function CtoRecruitFirstView() {
  return (
    <div className="relative mx-auto flex w-[84%] max-w-[1200px] flex-col items-center gap-8 pt-4 font-sans sm:pt-4 md:pt-6 lg:w-[90%] lg:flex-row xl:gap-2">
      <div className="relative z-[1] w-full lg:w-fit lg:flex-none">
        <p className="text-sm font-bold tracking-wider text-emerald-600 sm:text-base">
          累計6社以上のCTO代行実績から生まれた採用支援
        </p>
        <Title className="mt-2.5" />
        <Description className="mt-4" />
        <div className="mt-2 flex justify-center sm:mt-2 md:mt-4 lg:hidden">
          <Image
            src="/hero.png"
            alt="CTO採用支援サービスイラスト"
            width={600}
            height={539}
            className="w-[80%] max-w-[320px] sm:max-w-[380px]"
          />
        </div>
        <div className="bleed lg:bleed-none relative z-[1] -mt-4 px-4 lg:mt-12 lg:px-0">
          <ContactButton href="/cto-recruit/contact" className="w-full max-w-[400px] lg:-ml-2">
            まずは無料で相談する
          </ContactButton>
        </div>
      </div>

      <div className="absolute bottom-[-20px] right-0 hidden lg:block">
        <Image
          src="/hero.png"
          alt="CTO採用支援サービスイラスト"
          width={580}
          height={521}
          className="lg:w-[560px] xl:w-[620px]"
        />
      </div>
    </div>
  );
}

const Title = ({ className }: { className?: string }) => {
  return (
    <h1
      className={cn(
        "text-2xl font-bold !leading-[1.5] tracking-wider text-gray-800 min-[375px]:text-[28px] sm:text-4xl md:text-5xl md:!leading-[1.4] lg:text-5xl lg:tracking-wide xl:text-[56px]",
        className,
      )}
    >
      <span className="block">CTO採用を、</span>
      <span className="block">
        <span className="text-emerald-600">CTOの知見</span>で加速。
      </span>
    </h1>
  );
};

const Description = ({ className }: { className?: string }) => {
  return (
    <p
      className={cn(
        "text-sm !leading-[1.8] tracking-wide text-gray-800 min-[375px]:text-base md:text-lg lg:text-base xl:text-lg",
        className,
      )}
    >
      <span className="hidden sm:inline">
        CTOを採用したい。でも、どう探し、どう見極めればいいかわからない。
        <br className="hidden lg:block" />
      </span>
      CTO代行で培った知見を活かし、
      <br className="hidden lg:block" />
      媒体選定からオファーまで一気通貫で支援します。
    </p>
  );
};
