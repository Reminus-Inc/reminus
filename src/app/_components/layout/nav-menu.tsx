"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Header } from "./header";
import { DownloadButton } from "../ui/download-button";
import { ContactButton } from "../ui/contact-button";

export function NavMenu() {
  const pathname = usePathname();
  const isRoot = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  if (!isRoot) return null;

  const menuItems = [
    { href: "#plans", label: "プラン" },
    { href: "#phase", label: "支援内容" },
    { href: "#case-studies", label: "事例" },
    { href: "#services", label: "その他サービス" },
    { href: "#management", label: "経営者紹介" },
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
              className="whitespace-nowrap text-sm text-gray-600 hover:text-gray-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA ボタン */}
        <div className="flex items-center space-x-4">
          <DownloadButton variant="primary" size="small" iconPosition="left">
            資料ダウンロード
          </DownloadButton>
          <ContactButton aggressive iconPosition="left" size="small">
            無料相談を予約する
          </ContactButton>
        </div>
      </div>

      {/* タブレット・中間幅での表示 */}
      <div className="hidden items-center space-x-4 md:flex lg:hidden">
        {/* CTA ボタン */}
        <div className="flex items-center space-x-3">
          <DownloadButton variant="primary" size="small" iconPosition="left">
            資料ダウンロード
          </DownloadButton>
          <ContactButton aggressive iconPosition="left" size="small">
            無料相談を予約する
          </ContactButton>
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
        <div className="fixed inset-0 z-[9999] bg-white lg:hidden">
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
          <nav className="p-4 pt-20">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-1 text-gray-600 hover:text-gray-900"
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* モバイル用 CTA ボタン */}
            <div className="mt-6 space-y-4">
              <div>
                <DownloadButton
                  variant="primary"
                  size="small"
                  iconPosition="left"
                  className="w-full"
                >
                  資料ダウンロード
                </DownloadButton>
              </div>
              <div>
                <ContactButton
                  aggressive
                  iconPosition="left"
                  size="small"
                  className="w-full"
                  onClick={() => setTimeout(() => setIsOpen(false), 300)}
                >
                  無料相談を予約する
                </ContactButton>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
