"use client";

import Link from "next/link";
import Image from "next/image";
import { NavMenu, type NavVariant } from "./nav-menu";
import { cn } from "@/lib/utils";

interface HeaderProps {
  showNavMenu?: boolean;
  rightContent?: React.ReactNode;
  onLogoClick?: () => void;
  logoHref?: string;
  shadow?: boolean;
  variant?: NavVariant;
  lp?: string;
}

export function Header({
  showNavMenu = true,
  rightContent,
  onLogoClick,
  logoHref,
  shadow = false,
  variant,
  lp,
}: HeaderProps) {
  // lp(ページのパス) があればそれをホームに、無ければ variant から導出。
  const resolvedLogoHref = logoHref ?? lp ?? (variant ? `/${variant}` : "/");
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
        shadow && "shadow-[0_2px_4px_rgba(0,48,16,0.063)]"
      )}
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6">
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center">
            <Link href={resolvedLogoHref} onClick={handleLogoClick}>
              <Image
                src="/logo-reminus.svg"
                alt="Reminus"
                width={400}
                height={74}
                priority
                className="h-auto w-[124px] md:w-[152px] md:scale-90 lg:-mt-0.5"
              />
            </Link>
          </div>
          {rightContent ||
            (showNavMenu && <NavMenu variant={variant} lp={lp} />)}
        </div>
      </div>
    </header>
  );
}
