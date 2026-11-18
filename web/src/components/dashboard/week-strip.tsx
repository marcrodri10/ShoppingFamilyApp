import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";
import type { WeekDay } from "@/lib/mock-data";

function SlotDots({ filled, onAccent }: { filled: number; onAccent: boolean }) {
  return (
    <span className="flex gap-1" aria-hidden>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={cn(
            "size-1.5 rounded-full",
            i < filled
              ? onAccent ? "bg-white" : "bg-primary"
              : onAccent ? "bg-white/40" : "bg-border",
          )}
        />
      ))}
    </span>
  );
}

interface WeekStripProps {
  days: WeekDay[];
  className?: string;
}

export function WeekStrip({ days, className }: WeekStripProps) {
  return (
    <section
      aria-labelledby="semana-titulo"
      className={cn("rounded-3xl bg-card p-5 shadow-card sm:p-6", className)}
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 id="semana-titulo" className="flex items-center gap-2 text-lg font-bold">
          <CalendarDays className="size-5 text-primary" />
          Tu semana
        </h2>
        <Link href="/planificador" className="text-sm font-medium text-primary hover:underline">
          Editar
        </Link>
      </div>

      {/* Móvil: scroll horizontal con snap. Desktop: 7 columnas iguales. */}
      <ul className="-mx-1 flex snap-x gap-2 overflow-x-auto px-1 pb-1 md:mx-0 md:grid md:grid-cols-7 md:overflow-visible md:px-0 md:pb-0">
        {days.map((day) => (
          <li key={day.id} className="min-w-[4.5rem] flex-1 snap-start">
            <Link
              href="/planificador"
              aria-current={day.isToday ? "date" : undefined}
              aria-label={`${day.label}: ${day.plannedSlots} de 3 comidas planificadas`}
              className={cn(
                "flex h-14 flex-col items-center justify-center gap-1.5 rounded-2xl text-xs font-semibold transition-colors",
                day.isToday
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "bg-muted/60 hover:bg-muted",
              )}
            >
              {day.label}
              <SlotDots filled={day.plannedSlots} onAccent={day.isToday} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
