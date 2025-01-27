import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from '@next/third-parties/google'

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
