import { ShoppingBasket } from "lucide-react";

export function MobileHeader({ familyName }: { familyName: string }) {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-2.5 border-b border-border/70 bg-background/85 px-4 backdrop-blur md:hidden">
      <div className="grid size-8 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
        <ShoppingBasket className="size-4" />
      </div>
      <p className="font-display text-base font-bold">Shopping Family</p>
      <span className="ml-auto rounded-full bg-card px-2.5 py-1 text-xs text-muted-foreground shadow-card">
        {familyName}
      </span>
    </header>
  );
}
