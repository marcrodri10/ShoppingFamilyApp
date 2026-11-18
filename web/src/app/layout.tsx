import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Shopping Family", template: "%s · Shopping Family" },
  description: "Planifica el menú semanal y genera la lista de la compra en familia.",
};

export const viewport: Viewport = {
  themeColor: "#0a8f5f",
  viewportFit: "cover", // necesario para env(safe-area-inset-bottom) en móviles
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
