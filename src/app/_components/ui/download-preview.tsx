"use client";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselOverlayPrevious,
  CarouselOverlayNext,
  CarouselOverlayPagination,
} from "@/components/ui/carousel";

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

type DownloadPreviewImage = { src: string; alt: string };

export const DownloadPreview = ({
  images = DOCUMENT_IMAGES,
}: {
  images?: readonly DownloadPreviewImage[];
}) => {
  return (
    <div className="w-full max-w-[520px]">
      <Carousel opts={{ loop: true }} showPagination={false}>
        <div className="relative border-[4px] border-solid border-gray-300">
          <CarouselContent className="overflow-hidden">
            {images.map((image) => (
              <CarouselItem key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1654}
                  height={932}
                  priority
                  className="h-auto w-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselOverlayPrevious />
          <CarouselOverlayNext />
          <CarouselOverlayPagination count={images.length} />
        </div>
      </Carousel>
    </div>
  );
};
