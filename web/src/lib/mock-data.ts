// Mock data tipado. Sustituir por datos de la API (validados con Zod) más adelante.
// Si ya tienes FAMILY en este archivo, conserva el tuyo y añade el resto.
import lentejas from "@/assets/receta-lentejas.jpg";
import polloVerduras from "@/assets/receta-pollo-verduras.jpg";
import salmon from "@/assets/receta-salmon.jpg";
import tortilla from "@/assets/receta-tortilla.jpg";
import bolYogur from "@/assets/receta-yogur-avena.jpg";

import type { StaticImageData } from "next/image";

// ---------- Types ----------
export type MealSlot = "desayuno" | "comida" | "cena";
export type RecipeTagTone = "fast" | "traditional";

export interface Recipe {
  id: string;
  title: string;
  minutes: number;
  image?: string | StaticImageData; // ruta en /public
  tag?: { label: string; tone: RecipeTagTone };
}

export interface PlannedMeal {
  slot: MealSlot;
  time: string;
  recipe: Recipe | null; // null = sin planificar
}

export interface ShoppingCategorySummary {
  id: string;
  label: string;
  emoji: string;
  pending: number;
}

export interface ShoppingSummary {
  purchased: number;
  total: number;
  categories: ShoppingCategorySummary[];
}

export interface WeekDay {
  id: string;
  label: string;
  plannedSlots: 0 | 1 | 2 | 3;
  isToday: boolean;
}

export const FAMILY = { name: "Familia García" } as const;

export const TODAY_MEALS: PlannedMeal[] = [
  {
    slot: "desayuno",
    time: "08:00",
    recipe: {
      id: "r1",
      title: "Bol de yogur, avena y arándanos",
      minutes: 5,
      image: bolYogur,
      tag: { label: "Rápido", tone: "fast" },
    },
  },
  {
    slot: "comida",
    time: "14:00",
    recipe: {
      id: "r2",
      title: "Lentejas estofadas de la abuela",
      minutes: 50,
      image: lentejas,
      tag: { label: "Tradicional", tone: "traditional" },
    },
  },
  { slot: "cena", time: "21:00", recipe: null },
];

export const SHOPPING_SUMMARY: ShoppingSummary = {
  purchased: 6,
  total: 34,
  categories: [
    { id: "fruteria", label: "Frutería", emoji: "🥬", pending: 14 },
    { id: "carniceria", label: "Carnicería", emoji: "🥩", pending: 3 },
    { id: "pescaderia", label: "Pescadería", emoji: "🐟", pending: 2 },
    { id: "lacteos", label: "Lácteos", emoji: "🥛", pending: 4 },
    { id: "despensa", label: "Despensa", emoji: "🥫", pending: 5 },
  ],
};

export const WEEK: WeekDay[] = [
  { id: "lun", label: "Lun", plannedSlots: 3, isToday: false },
  { id: "mar", label: "Mar", plannedSlots: 3, isToday: false },
  { id: "mie", label: "Mié", plannedSlots: 2, isToday: false },
  { id: "jue", label: "Jue", plannedSlots: 2, isToday: true },
  { id: "vie", label: "Vie", plannedSlots: 3, isToday: false },
  { id: "sab", label: "Sáb", plannedSlots: 1, isToday: false },
  { id: "dom", label: "Dom", plannedSlots: 1, isToday: false },
];

// Derivados (en producción vendrán del backend)
export const PENDING_ITEMS = SHOPPING_SUMMARY.total - SHOPPING_SUMMARY.purchased;
export const PLANNED_MEALS_COUNT = WEEK.reduce((sum, d) => sum + d.plannedSlots, 0);
