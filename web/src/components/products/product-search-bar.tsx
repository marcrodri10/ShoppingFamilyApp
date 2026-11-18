import { Search } from "lucide-react";

// Solo visual: input sin estado. Más adelante: Client Component con debounce o searchParams.
export function ProductSearchBar() {
  return (
    <div role="search" className="relative">
      <Search className="pointer-events-none absolute left-6 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
      <input
        type="search"
        aria-label="Buscar productos"
        placeholder="Busca por nombre o marca (p. ej. avena, Hacendado…)"
        className="h-14 w-full rounded-full bg-card pl-14 pr-6 text-base shadow-card outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary/40"
      />
    </div>
  );
}
