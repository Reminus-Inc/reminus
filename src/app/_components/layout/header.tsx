"use client";

import Link from "next/link";
import { NavMenu } from "./nav-menu";
import { ReminusLogo } from "@/app/_components/ui/reminus-logo";

interface HeaderProps {
  showNavMenu?: boolean;
  rightContent?: React.ReactNode;
  onLogoClick?: () => void;
}

export function Header({
  showNavMenu = true,
  rightContent,
  onLogoClick,
}: HeaderProps) {
  const handleLogoClick = (e: React.MouseEvent) => {
    // 同じページの場合はトップにスクロール
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      // URLからハッシュフラグメントを除去
      window.history.replaceState(null, "", window.location.pathname);
    }
    onLogoClick?.();
  };

  return (
    <header className="sticky left-0 top-0 z-10 flex h-[60px] items-center bg-white sm:h-[80px]">
      <div className="mx-auto w-full max-w-[1360px] px-6">
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="transition-opacity hover:opacity-80"
              onClick={handleLogoClick}
            >
              <ReminusLogo
                className="h-4 w-auto md:h-6 md:scale-90"
                aria-label="Reminus"
              />
            </Link>
          </div>
          {rightContent || (showNavMenu && <NavMenu />)}
        </div>
      </div>
    </header>
  );
}
