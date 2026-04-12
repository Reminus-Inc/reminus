"use client";

import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();
  const hideAttribution = pathname === "/download";

  return (
    <footer className="py-4 font-sans">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-gray-600">
          <small>
            &copy; 2026 Reminus.（レミナス）&nbsp;All rights reserved.
          </small>
        </p>
        {!hideAttribution && (
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
