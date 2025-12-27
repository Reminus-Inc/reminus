"use client";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 py-4">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-gray-600">
          <small>
            &copy; 2025 Reminus.（レミナス）&nbsp;All rights reserved.
          </small>
        </p>
        <p className="text-center text-sm text-gray-600">
          <small>
            Illustrations by 
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
      </div>
    </footer>
  );
};
