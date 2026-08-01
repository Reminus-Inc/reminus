"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

import { usePathname } from "next/navigation";
import { Header } from "./header";
import { DownloadButton } from "../ui/download-button";
import { ContactButton } from "../ui/contact-button";
import { cn } from "@/lib/utils";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import {
  lpDownloadPath,
  lpHomePath,
  type LpId,
  type Variant,
} from "@/lib/lp";

type MenuItem = readonly [hash: string, label: string];

// メニュー項目は全 LP / 全 variant で共通。各セクションの id はどの LP にも存在するので、
// 遷移先は homePath (LP × variant で決まるホーム) を前置して組み立てるだけでよい。
const MENU: readonly MenuItem[] = [
  ["service-overview", "特長"],
  ["case-studies", "導入事例"],
  ["column", "コラム"],
  ["management", "経営者紹介"],
];

export function NavMenu({
  variant,
  lp,
}: { variant?: Variant; lp?: LpId } = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  // ホームのパスは LP 定義から導出する。variant が決まっていればその表示パス
  // (top の c なら /c) を指すので、ロゴから戻ったときに再抽選もリダイレクトも発生しない。
  const homePath = lpHomePath(lp, variant);
  const isHomePage = pathname === homePath;
  // 資料DL の遷移先は LP 定義から導出 (c/f は HubSpot 埋め込みの /c/download)。
  const downloadHref = lpDownloadPath(lp, variant);

  useEffect(() => {
    if (isOpen) {
      // スクロールバーの幅を計算してレイアウトシフトを防ぐ
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  const menuItems = MENU.map(([hash, label]) => ({
    href: isHomePage ? `#${hash}` : `${homePath}#${hash}`,
    label,
  }));

  const handleLinkClick = (
    e?: React.MouseEvent<HTMLAnchorElement>,
    href?: string
  ) => {
    setIsOpen(false);

    if (e && href?.startsWith("#")) {
      e.preventDefault();
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        smoothScrollTo(element);
        window.history.pushState(null, "", href);
      }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      clipPath: "inset(0 0 100% 0)",
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      opacity: 1,
      clipPath: "inset(0 0 0% 0)",
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      {/* デスクトップナビゲーション */}
      <div className="hidden items-center space-x-8 lg:flex">
        <nav className="flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="group relative whitespace-nowrap text-sm tracking-wider text-foreground transition-colors hover:text-primary"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA ボタン */}
        <div className="flex items-center space-x-4">
          <DownloadButton size="small" href={downloadHref} />
          <ContactButton size="small" href="/contact" />
        </div>
      </div>

      {/* タブレット・中間幅での表示 */}
      <div className="hidden items-center space-x-4 md:flex lg:hidden">
        {/* CTA ボタン */}
        <div className="flex items-center space-x-3">
          <DownloadButton
            size="small"
            className="min-w-[140px]"
            href={downloadHref}
          />
          <ContactButton size="small" href="/contact" />
        </div>

        {/* ハンバーガーボタン */}
        <MenuToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>

      {/* モバイル: 資料ダウンロードボタン + ハンバーガー */}
      <div className="flex items-center gap-1.5 md:hidden">
        <DownloadButton
          size="small"
          href={downloadHref}
          className="hidden px-4 py-2.5 min-[360px]:inline-flex"
        />
        <MenuToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>

      {/* モバイルメニューオーバーレイ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[9999] flex flex-col bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div>
              <Header
                showNavMenu={false}
                onLogoClick={handleLinkClick}
                rightContent={
                  <div className="flex items-center gap-1.5">
                    <DownloadButton
                      size="small"
                      href={downloadHref}
                      className="hidden px-4 py-2.5 min-[360px]:inline-flex"
                      onClick={() => setIsOpen(false)}
                    />
                    <MenuToggle
                      isOpen={isOpen}
                      onClick={() => setIsOpen(false)}
                    />
                  </div>
                }
              />
            </div>

            <nav className="flex-1 overflow-y-auto">
              <ul className="mt-2 px-4">
                {menuItems.map((item, index) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-4 py-5 font-bold tracking-wider text-gray-800"
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </Link>

                    {index < menuItems.length - 1 && (
                      <div className="h-px bg-gray-200/60" />
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center justify-center gap-4 p-6 sm:gap-8 sm:p-10">
              <DownloadButton
                size="small"
                fullWidth
                href={downloadHref}
                onClick={() => setIsOpen(false)}
              />
              <ContactButton
                size="small"
                fullWidth
                href="/contact"
                onClick={() => setIsOpen(false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const MenuToggle = ({
  isOpen,
  onClick,
  className,
}: {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full p-2 transition-colors hover:bg-accent",
        className
      )}
      aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        className="text-foreground"
      >
        <motion.path
          fill="transparent"
          strokeWidth="2"
          stroke="currentColor"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 4 6 L 20 6" },
            open: { d: "M 4 4 L 20 20" },
          }}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="2"
          stroke="currentColor"
          strokeLinecap="round"
          d="M 4 12 L 20 12"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="2"
          stroke="currentColor"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 4 18 L 20 18" },
            open: { d: "M 4 20 L 20 4" },
          }}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
      </svg>
    </button>
  );
};
