"use client";

import { ReminusLogo } from "@/app/_components/ui/reminus-logo";

export default function CtoTeamHeader() {
  return (
    <header className="sticky left-0 top-0 z-10 bg-gray-800 py-4 sm:py-5 lg:relative">
      <div className="mx-auto w-full max-w-[1360px] px-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="ページトップに戻る"
        >
          <ReminusLogo className="s h-auto w-[110px] text-white sm:w-[150px]" />
        </button>
      </div>
    </header>
  );
}
