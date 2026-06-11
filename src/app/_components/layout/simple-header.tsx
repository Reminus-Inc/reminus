import Image from "next/image";

export function SimpleHeader() {
  return (
    <header className="sticky left-0 top-0 z-10 flex h-[60px] items-center bg-white md:h-[80px] font-sans">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6">
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/logo-reminus.svg"
              alt="Reminus"
              width={400}
              height={74}
              priority
              className="h-auto w-[102px] md:w-[153px] md:scale-90"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
