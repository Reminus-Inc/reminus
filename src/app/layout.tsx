import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { GoogleTagManager } from "@next/third-parties/google";
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
  return (
    <html lang="ja">
      {!!process.env.GTM_ID && (
        <GoogleTagManager gtmId={process.env.GTM_ID}  />
      )}
      <body
        className={`${inter.variable} ${notoSansJP.variable} flex min-h-svh flex-col`}
      >
        {children}
        <Footer />
        <Toaster />
        <PersistUtm />
      </body>
    </html>
  );
}
