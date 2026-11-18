import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckoutBarProps {
  checked: number;
  total: number;
  className?: string;
}

// Sticky: en móvil se queda por encima del bottom nav (4rem + safe-area), en desktop a 1rem del borde.
export function CheckoutBar({ checked, total, className }: CheckoutBarProps) {
  return (
    <div
      className={cn(
        "sticky bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-30 rounded-[2rem] bg-card/90 p-2 shadow-card backdrop-blur md:bottom-4",
        className,
      )}
    >
      <button
        type="button"
        className="flex h-14 w-full items-center justify-center gap-2.5 rounded-3xl bg-gradient-primary text-base font-bold text-primary-foreground transition-transform hover:brightness-105 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <ShoppingCart className="size-5" />
        Finalizar Compra
        <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-semibold">
          {checked}/{total}
        </span>
      </button>
    </div>
  );
}
