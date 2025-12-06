import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  /**
   * 上部に表示するラベルテキスト
   */
  label: string;
  /**
   * メイン見出しの内容
   */
  children: React.ReactNode;
  /**
   * 見出しのタグ (デフォルト: h2)
   */
  tag?: "h2" | "h3" | "h4" | "h5" | "h6";
  /**
   * 見出しの配置
   */
  align?: "left" | "center";
  /**
   * コンテナのクラス名 (gapなどの調整用)
   */
  className?: string;
  /**
   * メイン見出しのクラス名 (フォントサイズ、行間などの調整用)
   */
  headingClassName?: string;
}

export function SectionHeader({
  label,
  children,
  tag: Tag = "h2",
  align = "left",
  className,
  headingClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {/* 上部ラベル */}
      <div
        className={cn(
          "-ml-3 flex items-center gap-2.5 sm:-ml-5",
          align === "center" && "justify-center"
        )}
      >
        <div className="h-2 w-2 rounded-full bg-emerald-200 sm:h-3 sm:w-3" />
        <p className="text-sm tracking-wider text-gray-800 sm:text-base">
          {label}
        </p>
      </div>

      {/* メイン見出し */}
      <Tag
        className={cn(
          "font-bold tracking-wide sm:tracking-wider text-gray-800",
          align === "center" && "text-center",
          headingClassName
        )}
      >
        {children}
      </Tag>
    </div>
  );
}
