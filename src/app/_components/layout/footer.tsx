"use client";

import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();
  // イラストの出典表記は d7a69bf (2026-07-25) で全ページから削除したが、
  // 当時のトップを復元した /k だけは当時どおり出す。
  const showAttribution = pathname === "/k";

  return (
    <footer className="py-4 font-sans">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-gray-600">
          <small>
            &copy; 2026 Reminus.（レミナス）&nbsp;All rights reserved.
          </small>
        </p>
        {showAttribution && (
          <p className="text-center text-sm text-gray-600">
            <small>
              Illustrations by&nbsp;
              <a
                href="https://storyset.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Storyset
              </a>
            </small>
          </p>
        )}
      </div>
    </footer>
  );
};
