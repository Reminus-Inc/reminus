import { cn } from "@/lib/utils";

interface ScheduleProps {
  className?: string;
}

export function Schedule({ className }: ScheduleProps) {
  return (
    <section className={cn("py-16 md:py-20", className)}>
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-400">
          {/* スケジュールセクション - 3-E で実装 */}
          Schedule プレースホルダー
        </p>
      </div>
    </section>
  );
}
