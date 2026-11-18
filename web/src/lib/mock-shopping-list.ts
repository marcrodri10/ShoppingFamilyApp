import type { ShoppingSection } from "@/types/shopping-list";

// 34 artículos, 16 marcados. Dentro de cada sección: pendientes primero, marcados al final.
export const SHOPPING_SECTIONS: ShoppingSection[] = [
  {
    categoryId: "fruteria",
    items: [
      { id: "f01", name: "Cebolla", quantity: "1 ud", recipeCount: 2, checked: false },
      { id: "f02", name: "Mézclum de lechugas", quantity: "1 bolsa", recipeCount: 2, checked: false },
      { id: "f03", name: "Limones", quantity: "2 uds", recipeCount: 2, checked: false },
      { id: "f04", name: "Eneldo fresco", quantity: "1 manojo", recipeCount: 2, checked: false },
      { id: "f05", name: "Manzanas", quantity: "1 kg", recipeCount: 1, checked: false },
      { id: "f06", name: "Arándanos", quantity: "125 g", recipeCount: 5, checked: true },
      { id: "f07", name: "Plátanos", quantity: "2 uds", recipeCount: 5, checked: true },
      { id: "f08", name: "Zanahorias", quantity: "3 uds", recipeCount: 2, checked: true },
      { id: "f09", name: "Aguacates", quantity: "2 uds", recipeCount: 2, checked: true },
      { id: "f10", name: "Tomates cherry", quantity: "250 g", recipeCount: 2, checked: true },
    ],
  },
  {
    categoryId: "carniceria",
    items: [
      { id: "c01", name: "Pechuga de pollo fileteada", quantity: "600 g", recipeCount: 3, checked: false },
      { id: "c02", name: "Carne picada de ternera", quantity: "400 g", recipeCount: 2, checked: false },
      { id: "c03", name: "Jamón serrano", quantity: "100 g", recipeCount: 2, checked: true },
      { id: "c04", name: "Salchichas frescas", quantity: "1 bandeja", recipeCount: 1, checked: true },
      { id: "c05", name: "Costillas de cerdo", quantity: "1 kg", recipeCount: 1, checked: true },
    ],
  },
  {
    categoryId: "pescaderia",
    items: [
      { id: "p01", name: "Merluza del Cantábrico", quantity: "500 g", recipeCount: 2, checked: false },
      { id: "p02", name: "Gambas peladas", quantity: "300 g", recipeCount: 1, checked: false },
      { id: "p03", name: "Salmón fresco", quantity: "2 lomos", recipeCount: 2, checked: true },
      { id: "p04", name: "Mejillones", quantity: "1 kg", recipeCount: 1, checked: true },
    ],
  },
  {
    categoryId: "lacteos",
    items: [
      { id: "l01", name: "Yogur griego natural", quantity: "4 uds", recipeCount: 3, checked: false },
      { id: "l02", name: "Leche semidesnatada", quantity: "2 L", recipeCount: 4, checked: false },
      { id: "l03", name: "Queso feta", quantity: "200 g", recipeCount: 2, checked: false },
      { id: "l04", name: "Huevos camperos", quantity: "12 uds", recipeCount: 5, checked: true },
      { id: "l05", name: "Mantequilla", quantity: "250 g", recipeCount: 1, checked: true },
      { id: "l06", name: "Queso rallado", quantity: "1 bolsa", recipeCount: 2, checked: true },
    ],
  },
  {
    categoryId: "despensa",
    items: [
      { id: "d01", name: "Lentejas pardinas", quantity: "500 g", recipeCount: 2, checked: false },
      { id: "d02", name: "Copos de avena integral", quantity: "500 g", recipeCount: 3, checked: false },
      { id: "d03", name: "Aceite de oliva virgen extra", quantity: "1 L", recipeCount: 2, checked: false },
      { id: "d04", name: "Quinoa real", quantity: "250 g", recipeCount: 1, checked: false },
      { id: "d05", name: "Garbanzos cocidos", quantity: "2 botes", recipeCount: 2, checked: false },
      { id: "d06", name: "Pan integral de molde", quantity: "1 ud", recipeCount: 3, checked: false },
      { id: "d07", name: "Arroz integral", quantity: "1 kg", recipeCount: 2, checked: true },
      { id: "d08", name: "Pasta integral", quantity: "500 g", recipeCount: 2, checked: true },
      { id: "d09", name: "Tomate triturado", quantity: "3 botes", recipeCount: 4, checked: true },
    ],
  },
];
