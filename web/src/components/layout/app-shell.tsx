// Server Component: compone el layout y delega la interactividad a Sidebar y BottomNav.
import type { ReactNode } from "react";
import { BottomNav } from "./bottom-nav";
import { MobileHeader } from "./mobile-header";
import { Sidebar } from "./sidebar";

interface AppShellProps {
  children: ReactNode;
  familyName: string;
  pendingCount: number;
}

export function AppShell({ children, familyName, pendingCount }: AppShellProps) {
  return (
    <div className="flex min-h-dvh">
      <Sidebar familyName={familyName} pendingCount={pendingCount} />

      <div className="flex min-w-0 flex-1 flex-col">
        <MobileHeader familyName={familyName} />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-28 pt-5 sm:px-6 md:pb-10 md:pt-8 lg:px-10">
          {children}
        </main>
      </div>

      <BottomNav pendingCount={pendingCount} />
    </div>
  );
}
