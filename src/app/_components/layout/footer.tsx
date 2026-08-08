"use client";

import { usePathname } from "next/navigation";

// イラストの出典表記は d7a69bf (2026-07-25) で全ページから削除したが、
// storyset 系のイラストを使っているページだけは出す。
//   /k        : 当時のトップを復元したものなので当時どおり
//   /mvp(/a)  : サービスの特長で旧 LP の storyset イラストを使っている
const ATTRIBUTION_PATHS = ["/k", "/mvp/a"];

export const Footer = () => {
  const pathname = usePathname();
  const showAttribution = ATTRIBUTION_PATHS.includes(pathname);

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
