import { cn } from "@/lib/utils";

interface ListProgressBarProps {
  checked: number;
  total: number;
  className?: string;
}

export function ListProgressBar({ checked, total, className }: ListProgressBarProps) {
  const percent = total === 0 ? 0 : Math.round((checked / total) * 100);

  return (
    <div
      role="progressbar"
      aria-label="Artículos en el carro"
      aria-valuenow={checked}
      aria-valuemin={0}
      aria-valuemax={total}
      className={cn("h-2 overflow-hidden rounded-full bg-card", className)}
    >
      <div
        className="h-full rounded-full bg-gradient-primary transition-[width] duration-500 ease-out"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
