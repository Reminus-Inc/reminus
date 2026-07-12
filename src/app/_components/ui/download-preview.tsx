"use client";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselOverlayPrevious,
  CarouselOverlayNext,
  CarouselOverlayPagination,
  useCarousel,
} from "@/components/ui/carousel";

const DOCUMENT_IMAGES = [
  {
    src: "/document-1.png",
    alt: "レミナスCTO代行資料イメージ1",
  },
  {
    src: "/document-2.png",
    alt: "レミナスCTO代行資料イメージ2",
  },
  {
    src: "/document-3.png",
    alt: "レミナスCTO代行資料イメージ3",
  },
] as const;

type DownloadPreviewImage = { src: string; alt: string };

// 画像タップでdead clickになっていたため、タップで次のスライドへ送る
const ClickToNextItem = ({ image }: { image: DownloadPreviewImage }) => {
  const { scrollNext } = useCarousel();

  return (
    <CarouselItem>
      <button
        type="button"
        aria-label="次の資料イメージを表示"
        onClick={() => scrollNext()}
        className="block w-full"
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={1654}
          height={932}
          priority
          className="h-auto w-full object-cover"
        />
      </button>
    </CarouselItem>
  );
};

export const DownloadPreview = ({
  images = DOCUMENT_IMAGES,
}: {
  images?: readonly DownloadPreviewImage[];
}) => {
  return (
    <div className="w-full max-w-[520px]">
      <Carousel opts={{ loop: true }} showPagination={false}>
        <div className="relative">
          <CarouselContent className="overflow-hidden">
            {images.map((image) => (
              <ClickToNextItem key={image.src} image={image} />
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
