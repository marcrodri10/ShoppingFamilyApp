import {
  BookOpen,
  CalendarDays,
  Home,
  ListChecks,
  ReceiptText,
  Search,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  showsPendingBadge?: boolean;
}

export interface NavGroup {
  label?: string;
  items: readonly NavItem[];
}

export const NAV_GROUPS: readonly NavGroup[] = [
  {
    items: [
      { href: "/", label: "Inicio", icon: Home },
      { href: "/planificador", label: "Planificador", icon: CalendarDays },
      { href: "/recetas", label: "Recetas", icon: BookOpen },
      { href: "/products", label: "Productos", icon: Search },
      { href: "/cart", label: "Lista", icon: ListChecks, showsPendingBadge: true },
    ],
  },
  {
    label: "Gestión",
    items: [
      { href: "/gastos", label: "Gastos", icon: Wallet },
      { href: "/tickets", label: "Tickets", icon: ReceiptText },
      { href: "/familia", label: "Familia", icon: Users },
    ],
  },
];

// En móvil solo caben las secciones principales (el grupo "Gestión" irá en un menú "Más").
export const BOTTOM_NAV = NAV_GROUPS[0].items;

export function isActive(href: string, pathname: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}
