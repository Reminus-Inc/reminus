import { cn } from "@/lib/utils";

interface TransitionStatementProps {
  className?: string;
}

export function TransitionStatement({ className }: TransitionStatementProps) {
  return (
    <section
      className={cn(
        "bg-emerald-50 border-t border-b border-emerald-100",
        className
      )}
    >
      <div className="container mx-auto px-4 py-12 md:py-16">
        <p className="text-lg md:text-xl font-bold text-emerald-800 text-center">
          だからこそ、CTO経験者が
          <br className="sm:hidden" />
          採用の全工程に伴走する
        </p>
      </div>
    </section>
  );
}
