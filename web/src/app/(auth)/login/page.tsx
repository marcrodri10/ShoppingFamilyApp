import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { AuthField } from "@/components/auth/auth-field";
import { Button } from "@/components/ui/button";
import { AuthDivider, SocialButtons } from "@/components/auth/social-buttons";

export const metadata: Metadata = { title: "Iniciar sesión" };

export default function LoginPage() {
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight">Hola de nuevo</h2>
      <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
        Entra para ver el menú de la semana y la lista de tu familia.
      </p>

      <div className="mt-8">
        <SocialButtons />
      </div>

      <AuthDivider label="o con tu email" />

      <form className="flex flex-col gap-4">
        <AuthField id="email" label="Email" type="email" placeholder="tu@email.com" autoComplete="email" />
        <AuthField
          id="password"
          label="Contraseña"
          type="password"
          autoComplete="current-password"
          withToggle
          labelAside={
            <Link href="#" className="text-xs font-semibold text-primary hover:underline">
              ¿La has olvidado?
            </Link>
          }
        />

        <Button type="submit" variant="gradient" size="xl" className="mt-2 w-full">
          Entrar
        </Button>
      </form>

      <div className="mt-5 flex items-center gap-3 rounded-xl border border-dashed border-border bg-card px-3.5 py-3 text-xs text-muted-foreground">
        <Sparkles className="size-4 shrink-0 text-primary" />
        <p className="flex-1">
          Cuenta de prueba: <span className="font-semibold text-foreground">marc@familia.es</span> ·{" "}
          <span className="font-semibold text-foreground">familia123</span>
        </p>
        <Button type="button" variant="link" size="inline" className="text-xs font-semibold">
          Rellenar
        </Button>
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        ¿No tienes cuenta?{" "}
        <Link href="/register" className="font-semibold text-primary hover:underline">
          Crear cuenta
        </Link>
      </p>
    </>
  );
}
