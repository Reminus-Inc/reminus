import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { XPixelPageView } from "./_components/x-pixel-pageview";
import Link from "next/link";
import { NavMenu } from "./_components/nav-menu";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "株式会社Reminus（レミナス）｜非エンジニア創業者のためのCTOサービス",
  description:
    "ビジネスのプロフェッショナルであられる創業者様、技術戦略や開発チームの構築でお困りではありませんか？株式会社Reminus（レミナス）は、まるでCTOのように事業成長を加速するCTOサービスで、あなたのビジネスを技術面から強力にサポートします。まずはお気軽にご相談ください。",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${inter.className} min-h-svh flex flex-col`}>
        <header className="border-b">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/reminus/logo.svg"
                  alt="Reminus"
                  width={120}
                  height={40}
                  className="h-6 w-auto"
                  priority
                />
              </Link>
            </div>
            <NavMenu />
          </div>
        </header>
        <main className="flex-1 flex flex-col">{children}</main>
        <footer className="bg-background text-center py-4 sm:py-8">
          <div className="container mx-auto px-4">
            <p className="text-xs sm:text-sm md:text-base">&copy; 2025 Reminus.（レミナス） All rights reserved.</p>
          </div>
        </footer>
        <Toaster />
        {/* XPixelPageView はベタ打ちPixel IDでも動作するように更新 */}
        <XPixelPageView />
        {!!process.env.GTM_ID && (
          <GoogleTagManager gtmId={process.env.GTM_ID} />
        )}
        {/* Twitter/X Pixel - 初期化してから読み込み */}
        <Script
          id="x-pixel-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,t,n,s,u,a){
                e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);},
                s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
                a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))
              }(window,document,'script');
              twq('config','pto6l');
            `,
          }}
        />
      </body>
    </html>
  );
}
