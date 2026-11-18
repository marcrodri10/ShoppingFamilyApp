"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BOTTOM_NAV, isActive } from "./nav-items";
import { PendingBadge } from "./pending-badge";

export function BottomNav({ pendingCount }: { pendingCount: number }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Principal"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden"
    >
      <ul className="grid grid-cols-5">
        {BOTTOM_NAV.map(({ href, label, icon: Icon, showsPendingBadge }) => {
          const active = isActive(href, pathname);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex h-16 flex-col items-center justify-center gap-1 px-0.5 text-[10px] font-medium transition-colors",
                  active ? "text-primary" : "text-muted-foreground active:text-foreground",
                )}
              >
                <span
                  className={cn(
                    "relative grid h-8 w-12 place-items-center rounded-full transition-colors duration-300",
                    active && "bg-primary-soft",
                  )}
                >
                  <Icon className={cn("size-5 transition-transform", active && "scale-110")} />
                  {showsPendingBadge && (
                    <PendingBadge count={pendingCount} className="absolute -right-0.5 -top-1" />
                  )}
                </span>
                <span className="max-w-full truncate">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
