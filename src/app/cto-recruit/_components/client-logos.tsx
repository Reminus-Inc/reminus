import Image from "next/image";

export function CtoRecruitClientLogos() {
  return (
    <div className="pt-4 sm:pt-8 pb-2 sm:pb-4">
      <div className="mx-auto flex flex-wrap items-center justify-center gap-x-5 gap-y-1 px-6 sm:flex-nowrap sm:gap-x-12 md:gap-x-16 lg:gap-x-20 lg:px-12">
        <div className="flex h-10 items-center sm:h-12">
          <Image
            src="/logos/1backoffice.png"
            alt="1backoffice"
            width={200}
            height={40}
            className="h-8 w-auto sm:h-10"
          />
        </div>
        <div className="flex h-10 items-center sm:h-12">
          <span className="font-sans text-xl font-bold tracking-wide text-gray-700 sm:text-2xl md:text-3xl">
            Zaimo.ai
          </span>
        </div>
        <div className="flex h-10 items-center sm:h-12">
          <span className="font-sans text-base tracking-wide text-gray-400 sm:text-lg">
            他1社
          </span>
        </div>
      </div>
      <p className="mt-3 flex justify-center font-sans text-[10px] text-gray-400">
        <span className="font-sans">※一部CTOパートナー以外を含む</span>
      </p>
    </div>
  );
}
