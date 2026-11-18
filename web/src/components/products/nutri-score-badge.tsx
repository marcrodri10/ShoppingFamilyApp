import { cn } from "@/lib/utils";
import type { NutriScore } from "@/types/product";

const STYLES: Record<NutriScore, string> = {
  A: "bg-nutri-a",
  B: "bg-nutri-b",
  C: "bg-nutri-c",
  D: "bg-nutri-d",
  E: "bg-nutri-e",
};

export function NutriScoreBadge({ grade, className }: { grade: NutriScore; className?: string }) {
  return (
    <span
      role="img"
      aria-label={`Nutri-Score ${grade}`}
      className={cn(
        "grid size-12 shrink-0 place-items-center rounded-full text-base font-bold text-white",
        STYLES[grade],
        className,
      )}
    >
      {grade}
    </span>
  );
}
