import { ReminusLogo } from "@/app/_components/ui/reminus-logo";

export function SimpleHeader() {
  return (
    <header className="sticky left-0 top-0 z-10 flex h-[60px] items-center bg-white md:h-[80px] font-sans">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6">
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center">
            <ReminusLogo
              className="h-4 w-auto md:h-6 md:scale-90"
              aria-label="Reminus"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
