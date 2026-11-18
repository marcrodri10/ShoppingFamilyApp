import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface SmartListBannerProps {
  plannedMeals: number;
  className?: string;
}

// Solo visual: cuando haya lógica, el botón pasará a un pequeño Client Component
// (o a un <form action={serverAction}> con useFormStatus).
export function SmartListBanner({ plannedMeals, className }: SmartListBannerProps) {
  return (
    <section
      aria-labelledby="lista-inteligente-titulo"
      className={cn(
        "flex flex-col gap-4 rounded-3xl border border-primary/15 bg-primary-soft/70 p-5 sm:flex-row sm:items-center sm:gap-5",
        className,
      )}
    >
      <div className="grid size-12 shrink-0 place-items-center rounded-full bg-gradient-primary text-primary-foreground">
        <Sparkles className="size-5" />
      </div>

      <div className="min-w-0 flex-1">
        <h2 id="lista-inteligente-titulo" className="text-lg font-bold">
          Lista inteligente
        </h2>
        <p className="text-sm text-muted-foreground">
          Tienes {plannedMeals} comidas planificadas. Generamos la lista agrupada por pasillos en segundos.
        </p>
      </div>

      <button
        type="button"
        className="inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-6 text-base font-bold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <Sparkles className="size-5" />
        Generar Lista de la Compra
      </button>
    </section>
  );
}
