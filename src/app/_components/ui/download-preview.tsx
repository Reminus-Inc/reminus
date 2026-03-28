"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";
const DOCUMENT_IMAGES = [
  {
    src: "/document-1.png",
    alt: "Reminus CTOパートナー資料イメージ1",
  },
  {
    src: "/document-2.png",
    alt: "Reminus CTOパートナー資料イメージ2",
  },
  {
    src: "/document-3.png",
    alt: "Reminus CTOパートナー資料イメージ3",
  },
] as const;

export const DownloadPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = DOCUMENT_IMAGES[activeIndex];

  return (
    <div className="w-full max-w-[520px]">
      <div className="border-[4px] border-solid border-gray-300">
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          width={1654}
          height={932}
          priority
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="mt-4 flex gap-3 sm:mt-5 sm:gap-4">
        {DOCUMENT_IMAGES.map((image, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative flex-1 overflow-hidden border-2 border-gray-200 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-500",
                isActive ? "border-gray-300" : ""
              )}
              aria-label={`資料プレビュー ${index + 1}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={320}
                height={200}
                className="h-full w-full object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
