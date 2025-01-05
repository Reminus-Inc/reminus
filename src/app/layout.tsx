import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reminus",
  description:
    "Enterprise software development and technical consulting services",
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
      </body>
    </html>
  );
}
