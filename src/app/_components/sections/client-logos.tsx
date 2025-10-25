"use client";

import { Section } from "../ui/section";
import Image from "next/image";

const clientLogos = [
  {
    name: "カイゼンベース",
    logo: "/logos/kaizen-base.png",
    height: 39,
    spHeight: 27,
    width: 242,
    spWidth: 167,
  },
  {
    name: "千葉エコ・エネルギー",
    logo: "/logos/chiba-eco.webp",
    height: 38,
    spHeight: 26,
    width: 92,
    spWidth: 64,
  },
  {
    name: "DRESS CODE",
    logo: "/logos/dress_code.svg",
    height: 28,
    spHeight: 20,
    width: 228,
    spWidth: 160,
  },
  {
    name: "Zaimo",
    logo: "/logos/zaimo.svg",
    height: 28,
    spHeight: 20,
    width: 134,
    spWidth: 95,
  },
  {
    name: "SalesBrain",
    logo: "/logos/salesbrain.png",
    height: 34,
    spHeight: 24,
    width: 201,
    spWidth: 142,
  },
];

export function ClientLogos() {
  return (
    <Section className="py-12 md:py-16" fullWidth="all">
      <div className="space-y-6 sm:space-y-8">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-6 md:gap-x-12 md:gap-y-8">
          {clientLogos.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="block sm:hidden">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  height={client.spHeight}
                  width={client.spWidth}
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
                  style={{
                    height: `${client.height}px`,
                    width: `${client.width}px`,
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <p className="flex flex-wrap justify-center gap-x-3 gap-y-1.5 text-center text-sm tracking-wide text-gray-500">
          <span>Reminus支援実績17社</span>
          <span>Reminus&nbsp;CTOパートナー支援実績8社</span>
        </p>
      </div>
    </Section>
  );
}
