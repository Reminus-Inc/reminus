import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { XPixelPageView } from "./_components/layout/x-pixel-pageview";
import { Footer } from "./_components/layout/footer";
import { DownloadDialogProvider } from "@/app/_components/ui/download-dialog-context";
import { DownloadDialog } from "@/app/_components/ui/download-dialog";

import { DownloadDialogCloser } from "@/app/_components/layout/download-dialog-closer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "株式会社Reminus（レミナス）｜非エンジニア経営者のためのCTO代行サービス",
  description:
    "技術戦略や開発チームの構築でお困りの創業者様へ。株式会社Reminus（レミナス）がCTOを代行し、事業成長を技術面から強力にサポートします。まずはお気軽にご相談ください。",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${inter.className} flex min-h-svh flex-col`}>
        <DownloadDialogProvider>
          {children}
          <DownloadDialog />
          <DownloadDialogCloser />
        </DownloadDialogProvider>
        <Footer />
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
