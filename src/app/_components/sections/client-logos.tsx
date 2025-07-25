"use client";

import Image from "next/image";

const clientLogos = [
  {
    name: "DRESS CODE",
    logo: "/logos/dress_code.svg",
    url: "https://www.dress-code.com/",
    height: 30,
    spHeight: 21,
    width: 245,
    spWidth: 172,
  },
  {
    name: "Zaimo",
    logo: "/logos/zaimo.svg",
    url: "https://lp.zaimo.ai/",
    height: 25,
    spHeight: 18,
    width: 120,
    spWidth: 85,
  },
  {
    name: "SalesBrain",
    logo: "/logos/salesbrain.png",
    url: "https://salesbrain.jp",
    height: 34,
    spHeight: 24,
    width: 201,
    spWidth: 142,
  },
];

export function ClientLogos() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-5 md:gap-x-12 md:gap-y-6">
        {clientLogos.map((client, index) => (
          <a
            key={index}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-pointer items-center justify-center transition-opacity hover:opacity-80"
          >
            <div className="block sm:hidden">
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                height={client.spHeight}
                width={client.spWidth}
                priority
                style={{
                  height: `${client.spHeight}px`,
                  width: `${client.spWidth}px`,
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="hidden sm:block">
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                height={client.height}
                width={client.width}
                priority
                style={{
                  height: `${client.height}px`,
                  width: `${client.width}px`,
                  objectFit: "contain",
                }}
              />
            </div>
          </a>
        ))}
      </div>

      <p className="flex flex-wrap justify-center gap-x-3 gap-y-1.5 text-center text-sm tracking-wide text-gray-500">
        <span>Reminus支援実績11社</span>
        <span>Reminus&nbsp;CTOパートナー支援実績4社</span>
      </p>
    </div>
  );
}
