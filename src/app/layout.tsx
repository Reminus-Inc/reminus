import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from '@next/third-parties/google'
import Link from "next/link";
import { ContactButton } from "./_components/contact-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reminus",
  description:
    "エンジニアリングの課題に直面していますか？Reminusは洗練されたエンジニアリングの洞察を事業と組織に実装し、企業のエンジニアリングのレベルを押し上げるサービスを提供しています。お気軽にご相談ください。",
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
                実績と事例
              </Link>
              <Link href="#services" className="text-gray-600 hover:text-gray-900">
                その他サービス
              </Link>
            </nav>
            <ContactButton isHeader={true} />
          </div>
        </header>
        {children}
        <footer className="bg-background text-center py-8">
          <div className="container mx-auto px-4">
            <p>&copy; 2025 Reminus. All rights reserved.</p>
          </div>
        </footer>
        <Toaster />
      </body>
      { !!process.env.GA_ID && <GoogleAnalytics gaId={process.env.GA_ID} /> }
    </html>
  );
}
