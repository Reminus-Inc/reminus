"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";

const clientLogos = [
  { 
    name: "DRESS CODE", 
    logo: "/logos/dress_code.svg", 
    url: "https://www.dress-code.com/",
    height: 30,
    spHeight: 21,
    width: 245,
    spWidth: 172
  },
  { 
    name: "Zaimo", 
    logo: "/logos/zaimo.svg", 
    url: "https://lp.zaimo.ai/",
    height: 25,
    spHeight: 18,
    width: 120,
    spWidth: 85
  },
  { 
    name: "SalesBrain", 
    logo: "/logos/salesbrain.png", 
    url: "https://salesbrain.jp",
    height: 34,
    spHeight: 24,
    width: 201,
    spWidth: 142
  },
];

export function ClientLogos() {
  return (
    <div className="bg-white relative">
      <div className="container mx-auto px-4 py-8 md:py-8">
          <div className="flex justify-center items-center text-gray-700">
            <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 shrink-0 " />
            <span className="font-medium text-sm md:text-lg xl:text-xl">
              <span className="text-emerald-700">Reminus</span><br className="bllck md:hidden" />支援実績 11社
            </span>
            <span className="mx-4 text-gray-300">|</span>
            <span className="font-medium text-sm md:text-lg xl:text-xl">
              <span className="text-emerald-700">Reminus CTOパートナー</span><br className="bllck md:hidden"/>支援実績 4社
            </span>
        </div>
        
        {/* ロゴセクション */}
        <div className="pt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 md:flex md:flex-wrap md:justify-center md:items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            {clientLogos.map((client, index) => (
              <a
                key={index}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
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
                      objectFit: 'contain'
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
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-200 w-full"></div>
    </div>
  );
}