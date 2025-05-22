import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from '@next/third-parties/google'
import Link from "next/link";
import { ContactButton } from "./_components/contact-button";

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
  // "use cache";
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={inter.className}>
        <header className="border-b h-18">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Reminus</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#value" className="text-gray-600 hover:text-gray-900">
                サービス
              </Link>
              <Link href="#plans" className="text-gray-600 hover:text-gray-900">
                プラン
              </Link>
              <Link href="#phase" className="text-gray-600 hover:text-gray-900">
                支援内容
              </Link>
              <Link href="#case-studies" className="text-gray-600 hover:text-gray-900">
                事例
              </Link>
              <Link href="#services" className="text-gray-600 hover:text-gray-900">
                その他サービス
              </Link>
              <Link href="#management" className="text-gray-600 hover:text-gray-900">
                経営陣紹介
              </Link>
            </nav>
            <ContactButton isHeader={true} />
          </div>
        </header>
        {children}
        <footer className="bg-background text-center py-8">
          <div className="container mx-auto px-4">
            <p>&copy; 2025 Reminus.（レミナス） All rights reserved.</p>
          </div>
        </footer>
        <Toaster />
      </body>
      { !!process.env.GA_ID && <GoogleAnalytics gaId={process.env.GA_ID} /> }
    </html>
  );
}
