import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PlannedMeal } from "@/lib/mock-data";
import { MealRow } from "./meal-row";

interface TodayMenuCardProps {
  meals: PlannedMeal[];
  className?: string;
}

export function TodayMenuCard({ meals, className }: TodayMenuCardProps) {
  return (
    <section
      aria-labelledby="hoy-titulo"
      className={cn("rounded-3xl bg-primary p-5 text-primary-foreground shadow-card sm:p-7", className)}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 id="hoy-titulo" className="text-xl font-bold sm:text-2xl">
          ¿Qué comemos hoy?
        </h2>
        <Link
          href="/planificador"
          className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-white/25"
        >
          Semana
          <ArrowRight className="size-3.5" />
        </Link>
      </div>

      <ul className="flex flex-col gap-3">
        {meals.map((meal) => (
          <MealRow key={meal.slot} meal={meal} />
        ))}
      </ul>
    </section>
  );
}
