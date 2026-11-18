import { Check } from "lucide-react";
import type { ShoppingItem } from "@/types/shopping-list";

// Checkbox nativo (sr-only) + estilos con `peer`: accesible por teclado y lector de pantalla,
// y el estado visual funciona sin JavaScript. Toda la fila es el área táctil.
// Cuando haya lógica: pasar a Client Component con `checked` + `onChange`.
export function ShoppingItemRow({ item }: { item: ShoppingItem }) {
  return (
    <li>
      <label className="flex min-h-16 cursor-pointer items-center gap-4 px-4 py-2 transition-colors hover:bg-muted/30 has-checked:bg-muted/40">
        <input type="checkbox" defaultChecked={item.checked} className="peer sr-only" />

        <span
          aria-hidden
          className="grid size-8 shrink-0 place-items-center rounded-full border-2 border-border bg-card text-transparent transition-all duration-200 peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40 peer-focus-visible:ring-offset-2 peer-active:scale-90"
        >
          <Check className="size-5" strokeWidth={3} />
        </span>

        <span className="min-w-0 flex-1 truncate text-[15px] font-medium transition-colors peer-checked:text-muted-foreground/60 peer-checked:line-through">
          {item.name}
        </span>

        <span
          title={item.recipeCount > 1 ? `Aparece en ${item.recipeCount} recetas` : undefined}
          className="shrink-0 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground transition-opacity peer-checked:opacity-50"
        >
          {item.quantity}
          {item.recipeCount > 1 && ` ×${item.recipeCount}`}
        </span>
      </label>
    </li>
  );
}
