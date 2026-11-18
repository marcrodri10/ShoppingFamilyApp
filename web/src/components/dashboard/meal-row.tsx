import Image from "next/image";
import Link from "next/link";
import { Clock, Coffee, Moon, Sun, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MealSlot, PlannedMeal, RecipeTagTone } from "@/lib/mock-data";

const SLOT: Record<MealSlot, { label: string; icon: LucideIcon }> = {
  desayuno: { label: "Desayuno", icon: Coffee },
  comida: { label: "Comida", icon: Sun },
  cena: { label: "Cena", icon: Moon },
};

const TAG_STYLES: Record<RecipeTagTone, string> = {
  fast: "bg-muted text-muted-foreground",
  traditional: "bg-warm-soft text-warm-ink",
};

export function MealRow({ meal }: { meal: PlannedMeal }) {
  const { label, icon: SlotIcon } = SLOT[meal.slot];
  const { recipe } = meal;

  return (
    <li className="flex items-center gap-4 rounded-2xl bg-card p-2.5 pr-4 text-card-foreground">
      <div className="relative grid size-16 shrink-0 place-items-center overflow-hidden rounded-xl bg-muted text-muted-foreground">
        {recipe?.image ? (
          <Image src={recipe.image} alt="" fill sizes="64px" className="object-cover" />
        ) : (
          <SlotIcon className="size-6" />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-primary">
          <SlotIcon className="size-3.5" />
          {label}
          <span className="font-normal normal-case tracking-normal text-muted-foreground">· {meal.time}</span>
        </p>

        {recipe ? (
          <>
            <h3 className="truncate text-[15px] font-semibold leading-snug">{recipe.title}</h3>
            <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="size-3" />
              {recipe.minutes} min
            </p>
          </>
        ) : (
          <>
            <h3 className="text-[15px] font-semibold leading-snug">Sin planificar</h3>
            <Link
              href="/planificador"
              className="mt-0.5 inline-block text-xs font-medium text-primary hover:underline"
            >
              Añadir receta
            </Link>
          </>
        )}
      </div>

      {recipe?.tag && (
        <span
          className={cn(
            "hidden shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium sm:inline-flex",
            TAG_STYLES[recipe.tag.tone],
          )}
        >
          {recipe.tag.label}
        </span>
      )}
    </li>
  );
}
