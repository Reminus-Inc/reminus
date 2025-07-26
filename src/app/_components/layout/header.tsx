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
    }
    onLogoClick?.();
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 h-16 border-b bg-white">
      <div className="mx-auto flex h-full items-center justify-between px-4 xl:container">
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
    </header>
  );
}
