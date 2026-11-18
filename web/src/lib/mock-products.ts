import type { Product, ProductCategory, ProductCategoryId } from "@/types/product";

export const CATEGORIES: ProductCategory[] = [
  { id: "fruteria", label: "Frutería", emoji: "🥬" },
  { id: "carniceria", label: "Carnicería", emoji: "🥩" },
  { id: "pescaderia", label: "Pescadería", emoji: "🐟" },
  { id: "lacteos", label: "Lácteos", emoji: "🥛" },
  { id: "despensa", label: "Despensa", emoji: "🥫" },
];

export const CATEGORY_BY_ID = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c]),
) as Record<ProductCategoryId, ProductCategory>;

export const PRODUCTS: Product[] = [
  { id: "p01", name: "Yogur griego natural", brand: "Danone", category: "lacteos", barcode: "8410000810004", nutriScore: "B" },
  { id: "p02", name: "Copos de avena integral", brand: "Hacendado", category: "despensa", barcode: "8480000107930", nutriScore: "A" },
  { id: "p03", name: "Aceite de oliva virgen extra", brand: "Carbonell", category: "despensa", barcode: "8410179100014", nutriScore: "B" },
  { id: "p04", name: "Lentejas pardinas", brand: "Luengo", category: "despensa", barcode: "8412600000127", nutriScore: "A" },
  { id: "p05", name: "Queso feta griego", brand: "Dodoni", category: "lacteos", barcode: "8424818241005", nutriScore: "D" },
  { id: "p06", name: "Leche semidesnatada", brand: "Central Lechera Asturiana", category: "lacteos", barcode: "8410300100012", nutriScore: "B" },
  { id: "p07", name: "Quinoa real", brand: "Hacendado", category: "despensa", barcode: "8480000610850", nutriScore: "A" },
  { id: "p08", name: "Chorizo dulce", brand: "Revilla", category: "carniceria", barcode: "8411320100106", nutriScore: "E" },
  { id: "p09", name: "Garbanzos cocidos", brand: "Bonduelle", category: "despensa", barcode: "8412345000017", nutriScore: "A" },
  { id: "p10", name: "Salmón ahumado", brand: "Ahumados Domínguez", category: "pescaderia", barcode: "8480000220011", nutriScore: "C" },
  { id: "p11", name: "Pechuga de pollo fileteada", brand: "Hacendado", category: "carniceria", barcode: "8480000150028", nutriScore: "A" },
  { id: "p12", name: "Huevos camperos L", brand: "Pazo de Vilane", category: "lacteos", barcode: "8410128000017", nutriScore: "A" },
  { id: "p13", name: "Tomate cherry rama", brand: "La Huerta", category: "fruteria", barcode: "8435012300011", nutriScore: "A" },
  { id: "p14", name: "Plátano de Canarias", brand: "Plátano de Canarias IGP", category: "fruteria", barcode: "8480000330018", nutriScore: "A" },
  { id: "p15", name: "Merluza del Cantábrico", brand: "Pescanova", category: "pescaderia", barcode: "8410069012345", nutriScore: "A" },
  { id: "p16", name: "Pan integral de molde", brand: "Bimbo", category: "despensa", barcode: "8410076472113", nutriScore: "B" },
];
