"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { usePathname } from "next/navigation";
import { Header } from "./header";
import { DownloadButton } from "../ui/download-button";

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const menuItems = [
    { href: isHomePage ? "#service-overview" : "/#service-overview", label: "サービス概要" },
    { href: isHomePage ? "#case-studies" : "/#case-studies", label: "事例紹介" },
    { href: isHomePage ? "#note-articles" : "/#note-articles", label: "公式 note" },
    { href: isHomePage ? "#management" : "/#management", label: "経営者紹介" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
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
              className="whitespace-nowrap text-sm text-gray-800 hover:text-emerald-500 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA ボタン */}
        <div className="flex items-center">
          <DownloadButton size="small" asLink={true} />
        </div>
      </div>

      {/* タブレット・中間幅での表示 */}
      <div className="hidden items-center space-x-4 md:flex lg:hidden">
        {/* CTA ボタン */}
        <div className="flex items-center">
          <DownloadButton size="small" className="min-w-[180px]" asLink={true} />
        </div>

        {/* ハンバーガーボタン */}
        <button onClick={() => setIsOpen(!isOpen)} aria-label="メニューを開く">
          {isOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </div>

      {/* モバイルハンバーガーボタン */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="メニューを開く"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-gray-600" />
        ) : (
          <Menu className="h-6 w-6 text-gray-600" />
        )}
      </button>

      {/* モバイルメニューオーバーレイ */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-primary lg:hidden">
          <Header
            showNavMenu={false}
            onLogoClick={handleLinkClick}
            rightContent={
              <button
                onClick={() => setIsOpen(false)}
                aria-label="メニューを閉じる"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            }
          />
          <nav className="px-6 py-10">
            <ul>
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-2 text-lg font-bold text-white"
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 md:hidden">
              <DownloadButton
                color="white"
                fullWidth
                asLink={true}
                onClick={() => setTimeout(() => setIsOpen(false), 300)}
              />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
