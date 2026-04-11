"use client";

import Link from "next/link";
import { NavMenu, type NavVariant } from "./nav-menu";
import { ReminusLogo } from "@/app/_components/ui/reminus-logo";
import { cn } from "@/lib/utils";

interface HeaderProps {
  showNavMenu?: boolean;
  rightContent?: React.ReactNode;
  onLogoClick?: () => void;
  logoHref?: string;
  shadow?: boolean;
  variant?: NavVariant;
}

export function Header({
  showNavMenu = true,
  rightContent,
  onLogoClick,
  logoHref,
  shadow = false,
  variant,
}: HeaderProps) {
  const resolvedLogoHref = logoHref ?? (variant ? `/${variant}` : "/");
  const handleLogoClick = (e: React.MouseEvent) => {
    // ロゴのhrefと現在のパスが一致する場合はトップにスクロール
    if (
      window.location.pathname === resolvedLogoHref ||
      window.location.pathname === "/"
    ) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      // URLからハッシュフラグメントを除去
      window.history.replaceState(null, "", window.location.pathname);
    }
    onLogoClick?.();
  };

  return (
    <header
      className={cn(
        "sticky left-0 top-0 z-10 flex h-[60px] items-center bg-white font-sans md:h-[80px]",
        shadow && "shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
      )}
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6">
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center">
            <Link href={resolvedLogoHref} onClick={handleLogoClick}>
              <ReminusLogo
                className="h-4 w-auto md:h-6 md:scale-90 lg:-mt-0.5"
                aria-label="Reminus"
              />
            </Link>
          </div>
          {rightContent || (showNavMenu && <NavMenu variant={variant} />)}
        </div>
      </div>
    </header>
  );
}
