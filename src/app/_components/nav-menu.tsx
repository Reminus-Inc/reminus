"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Header } from "./header";

export function NavMenu() {
  const pathname = usePathname();
  const isRoot = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  // モバイルメニューが開いている間、背景のスクロールを制御
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // クリーンアップ関数
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // ESCキーでメニューを閉じる機能
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  if (!isRoot) return null;

  const menuItems = [
    { href: "#value", label: "サービス" },
    { href: "#plans", label: "プラン" },
    { href: "#phase", label: "支援内容" },
    { href: "#case-studies", label: "事例" },
    { href: "#services", label: "その他サービス" },
    { href: "#management", label: "経営陣紹介" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* デスクトップナビゲーション */}
      <nav className="hidden md:flex space-x-8">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-gray-600 hover:text-gray-900"
          >
            {item.label}
          </Link>
        ))}
      </nav>

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
        <div className="md:hidden fixed inset-0 z-[9999] bg-white">
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
                    className="block py-3 text-lg text-gray-600 hover:text-gray-900 border-b border-gray-100"
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
