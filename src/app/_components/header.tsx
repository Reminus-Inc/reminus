import Link from "next/link";
import Image from "next/image";
import { NavMenu } from "./nav-menu";

interface HeaderProps {
  showNavMenu?: boolean;
  rightContent?: React.ReactNode;
  onLogoClick?: () => void;
}

export function Header({ showNavMenu = true, rightContent, onLogoClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b h-16">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity" onClick={onLogoClick}>
            <Image
              src="/reminus/logo.svg"
              alt="Reminus"
              width={120}
              height={40}
              className="h-4 md:h-6 w-auto md:scale-90"
              priority
            />
          </Link>
        </div>
        {rightContent || (showNavMenu && <NavMenu />)}
      </div>
    </header>
  );
}