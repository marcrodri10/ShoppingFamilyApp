import { Check } from "lucide-react";
import type { ProductCategory } from "@/types/product";
import type { ShoppingSection } from "@/types/shopping-list";
import { ShoppingItemRow } from "./shopping-item-row";

interface CategorySectionProps {
  section: ShoppingSection;
  category: ProductCategory;
}

export function CategorySection({ section, category }: CategorySectionProps) {
  const pending = section.items.filter((i) => !i.checked).length;
  const headingId = `seccion-${category.id}`;

  return (
    <section aria-labelledby={headingId} className="overflow-hidden rounded-3xl bg-card shadow-card">
      <header className="flex items-center gap-3 border-b border-border px-5 py-4">
        <span aria-hidden className="text-xl">
          {category.emoji}
        </span>
        <h2 id={headingId} className="flex-1 text-base font-bold">
          {category.label}
        </h2>

        {pending > 0 ? (
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span aria-hidden className="size-2 rounded-full bg-primary" />
            {pending} {pending === 1 ? "pendiente" : "pendientes"}
          </p>
        ) : (
          <p className="flex items-center gap-1 text-xs font-medium text-primary-ink">
            <Check className="size-3.5" />
            Completada
          </p>
        )}
      </header>

      <ul className="divide-y divide-border">
        {section.items.map((item) => (
          <ShoppingItemRow key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
