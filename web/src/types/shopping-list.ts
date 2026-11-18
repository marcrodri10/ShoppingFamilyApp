import type { ProductCategoryId } from "./product";

export interface ShoppingItem {
  id: string;
  name: string;
  quantity: string; // "1 ud", "125 g", "1 bolsa"...
  recipeCount: number; // nº de recetas planificadas que usan el ingrediente (el "×2" de la UI)
  checked: boolean;
}

export interface ShoppingSection {
  categoryId: ProductCategoryId;
  items: ShoppingItem[]; // pendientes primero, marcados al final
}
