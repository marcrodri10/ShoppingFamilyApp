import { Plus } from "lucide-react";
import type { Product, ProductCategory } from "@/types/product";
import { NutriScoreBadge } from "./nutri-score-badge";

interface ProductCardProps {
  product: Product;
  category: ProductCategory;
}

export function ProductCard({ product, category }: ProductCardProps) {
  return (
    <li className="flex items-center gap-3 rounded-2xl bg-card p-3 shadow-card transition-shadow hover:shadow-md">
      <NutriScoreBadge grade={product.nutriScore} />

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-[15px] font-semibold leading-snug">{product.name}</h3>
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="truncate">{product.brand}</span>
          <span aria-hidden>·</span>
          <span className="inline-flex shrink-0 items-center gap-1">
            <span aria-hidden>{category.emoji}</span>
            {category.label}
          </span>
        </p>
        <p className="mt-0.5 font-mono text-[10px] text-muted-foreground/70">{product.barcode}</p>
      </div>

      {/* 44px: objetivo táctil cómodo con el pulgar */}
      <button
        type="button"
        aria-label={`Añadir ${product.name} a la lista`}
        className="grid size-11 shrink-0 place-items-center rounded-full bg-primary-soft text-primary-ink transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-95"
      >
        <Plus className="size-5" />
      </button>
    </li>
  );
}
