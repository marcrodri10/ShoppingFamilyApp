"use client";

// Client Component mínimo: solo necesita estado (colapsado) y usePathname (enlace activo).
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronsLeft, ShoppingBasket } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_GROUPS, isActive } from "./nav-items";
import { PendingBadge } from "./pending-badge";

export function Sidebar({ familyName, pendingCount }: { familyName: string; pendingCount: number }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      data-collapsed={collapsed}
      className="group/sidebar sticky top-0 hidden h-dvh w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar transition-[width] duration-300 ease-out data-[collapsed=true]:w-[76px] md:flex"
    >
      <div className="flex h-16 items-center gap-3 px-4">
        <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
          <ShoppingBasket className="size-5" />
        </div>
        <div className="min-w-0 transition-opacity group-data-[collapsed=true]/sidebar:pointer-events-none group-data-[collapsed=true]/sidebar:opacity-0">
          <p className="truncate font-display text-base font-bold leading-tight">Shopping Family</p>
          <p className="flex items-center gap-1 truncate text-xs text-muted-foreground">
            <span aria-hidden>🏠</span>
            {familyName}
          </p>
        </div>
      </div>

      <nav aria-label="Principal" className="mt-4 flex flex-1 flex-col gap-1 overflow-y-auto px-3">
        {NAV_GROUPS.map((group, i) => (
          <div key={group.label ?? i} className="flex flex-col gap-1">
            {group.label && (
              <>
                <p className="px-3 pb-1 pt-5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground group-data-[collapsed=true]/sidebar:hidden">
                  {group.label}
                </p>
                {/* Colapsado: el título se sustituye por un separador */}
                <hr className="my-3 hidden border-sidebar-border group-data-[collapsed=true]/sidebar:block" />
              </>
            )}

            {group.items.map(({ href, label, icon: Icon, showsPendingBadge }) => {
              const active = isActive(href, pathname);
              return (
                <Link
                  key={href}
                  href={href}
                  title={label}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative flex h-11 items-center gap-3 rounded-xl px-3 text-sm font-medium transition-colors duration-200",
                    active
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {active && <span className="absolute -left-3 h-6 w-1 rounded-r-full bg-primary" />}
                  <Icon className="size-5 shrink-0 transition-transform group-hover:scale-110" />
                  <span className="flex-1 truncate transition-opacity group-data-[collapsed=true]/sidebar:opacity-0">
                    {label}
                  </span>
                  {showsPendingBadge && (
                    <PendingBadge
                      count={pendingCount}
                      className="group-data-[collapsed=true]/sidebar:absolute group-data-[collapsed=true]/sidebar:right-1.5 group-data-[collapsed=true]/sidebar:top-1.5"
                    />
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      <button
        type="button"
        onClick={() => setCollapsed((c) => !c)}
        aria-label={collapsed ? "Expandir menú" : "Contraer menú"}
        aria-expanded={!collapsed}
        className="m-3 flex h-10 items-center gap-3 rounded-xl px-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-primary"
      >
        <ChevronsLeft className="size-5 shrink-0 transition-transform duration-300 group-data-[collapsed=true]/sidebar:rotate-180" />
        <span className="transition-opacity group-data-[collapsed=true]/sidebar:opacity-0">Contraer</span>
      </button>
    </aside>
  );
}
