import { cn } from "@/lib/utils";

// Componente puramente visual: el contador llega por props desde el servidor.
export function PendingBadge({ count, className }: { count: number; className?: string }) {
  if (count <= 0) return null;
  return (
    <span
      aria-label={`${count} artículos pendientes`}
      className={cn(
        "grid min-w-5 place-items-center rounded-full bg-warm px-1.5 text-[10px] font-bold leading-5 text-primary-foreground",
        className,
      )}
    >
      {count}
    </span>
  );
}
