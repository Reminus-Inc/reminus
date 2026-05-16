import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "./_components/layout/footer";
import { PersistUtm } from "./_components/PersistUtm"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  preload: false,
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "株式会社Reminus（レミナス）｜非エンジニア経営者のためのCTO代行サービス",
  description:
    "技術戦略や開発チームの構築でお困りの創業者様へ。株式会社Reminus（レミナス）がCTOを代行し、事業成長を技術面から強力にサポートします。まずはお気軽にご相談ください。",
  metadataBase: new URL("https://www.reminus.co.jp"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "株式会社Reminus（レミナス）｜非エンジニア経営者のためのCTO代行サービス",
    description:
      "技術戦略や開発チームの構築でお困りの創業者様へ。CTO代行で事業成長を技術面から強力にサポートします。",
    url: "/",
    siteName: "株式会社Reminus",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // RootLayout はサーバーコンポーネントなので process.env.GTM_ID は描画時に
  // インラインスクリプト本文へ埋め込まれる。クライアントランタイムは参照しない。
  const gtmId = process.env.GTM_ID;
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${notoSansJP.variable} flex min-h-svh flex-col`}
      >
        {children}
        <Footer />
        <Toaster />
        <PersistUtm />
        {!!gtmId && (
          <Script id="gtm-init" strategy="lazyOnload">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        )}
      </body>
    </html>
  );
}
