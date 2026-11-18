import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { FAMILY, PENDING_ITEMS } from "@/lib/mock-data";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <AppShell familyName={FAMILY.name} pendingCount={PENDING_ITEMS}>
      {children}
    </AppShell>
  );
}
