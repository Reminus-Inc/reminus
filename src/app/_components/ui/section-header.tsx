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
  className,
  headingClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {/* 上部ラベル */}
      <div className="flex items-center gap-2.5">
        <div className="h-3 w-3 rounded-full bg-emerald-200" />
        <p className="text-sm tracking-wider text-gray-800 sm:text-base">
          {label}
        </p>
      </div>

      {/* メイン見出し */}
      <Tag
        className={cn(
          "pl-2 font-bold tracking-wider text-gray-800 sm:pl-5",
          headingClassName
        )}
      >
        {children}
      </Tag>
    </div>
  );
}
