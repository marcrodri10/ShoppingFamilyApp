import type { ReactNode } from "react";
import { Bricolage_Grotesque } from "next/font/google";
import { AuthHero } from "@/components/auth/auth-hero";

// Tipografía display solo para el panel de bienvenida
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-hero",
  display: "swap",
});

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${bricolage.variable} grid min-h-dvh lg:grid-cols-2`}>
      <AuthHero />
      <main className="flex items-center justify-center px-5 py-10 sm:px-8">
        <div className="w-full max-w-sm animate-float-in">{children}</div>
      </main>
    </div>
  );
}
