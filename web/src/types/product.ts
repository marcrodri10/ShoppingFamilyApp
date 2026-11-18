export type NutriScore = "A" | "B" | "C" | "D" | "E";

export type ProductCategoryId = "fruteria" | "carniceria" | "pescaderia" | "lacteos" | "despensa";

export interface ProductCategory {
  id: ProductCategoryId;
  label: string;
  emoji: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategoryId;
  barcode: string;
  nutriScore: NutriScore;
}
