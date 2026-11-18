import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { TodayMenuCard } from "@/components/dashboard/today-menu-card";
import { ShoppingSummaryCard } from "@/components/dashboard/shopping-summary-card";
import { SmartListBanner } from "@/components/dashboard/smart-list-banner";
import { WeekStrip } from "@/components/dashboard/week-strip";
import { PLANNED_MEALS_COUNT, SHOPPING_SUMMARY, TODAY_MEALS, WEEK } from "@/lib/mock-data";

export const metadata: Metadata = { title: "Inicio" };

export default function HomePage() {
  return (
    <>
      <PageHeader
        eyebrow="Jueves"
        title="¡Hola, familia! 👋"
        description="Esto es lo que hay en el menú de hoy."
      />

      <div className="grid gap-5 lg:grid-cols-5">
        <TodayMenuCard meals={TODAY_MEALS} className="lg:col-span-3" />
        <ShoppingSummaryCard summary={SHOPPING_SUMMARY} className="lg:col-span-2" />
      </div>

      <SmartListBanner plannedMeals={PLANNED_MEALS_COUNT} className="mt-5" />
      <WeekStrip days={WEEK} className="mt-5" />
    </>
  );
}
