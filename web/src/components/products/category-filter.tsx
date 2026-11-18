import { cn } from "@/lib/utils";
import type { ProductCategory, ProductCategoryId } from "@/types/product";

function Chip({ active, emoji, label }: { active: boolean; emoji: string; label: string }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        "inline-flex h-10 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        active
          ? "bg-primary text-primary-foreground shadow-glow"
          : "bg-card text-foreground shadow-card hover:bg-primary-soft",
      )}
    >
      <span aria-hidden>{emoji}</span>
      {label}
    </button>
  );
}

interface CategoryFilterProps {
  categories: ProductCategory[];
  active: ProductCategoryId | "todas";
}

export function CategoryFilter({ categories, active }: CategoryFilterProps) {
  return (
    // Móvil: scroll horizontal. Desde sm: salta de línea.
    <div
      role="group"
      aria-label="Filtrar por categoría"
      className="-mx-4 flex gap-2 overflow-x-auto px-4 py-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
    >
      <Chip active={active === "todas"} emoji="🛒" label="Todas" />
      {categories.map((c) => (
        <Chip key={c.id} active={active === c.id} emoji={c.emoji} label={c.label} />
      ))}
    </div>
  );
}
