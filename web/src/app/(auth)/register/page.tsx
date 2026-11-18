import type { Metadata } from "next";
import Link from "next/link";
import { AuthField } from "@/components/auth/auth-field";
import { Button } from "@/components/ui/button";
import { AuthDivider, SocialButtons } from "@/components/auth/social-buttons";

export const metadata: Metadata = { title: "Crear cuenta" };

export default function RegisterPage() {
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight">Crea tu cuenta</h2>
      <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
        Gratis y en un momento. Después podrás invitar a tu familia.
      </p>

      <div className="mt-8">
        <SocialButtons />
      </div>

      <AuthDivider label="o regístrate con tu email" />

      <form className="flex flex-col gap-4">
        <AuthField id="name" label="Nombre" placeholder="Laura García" autoComplete="name" />
        <AuthField id="email" label="Email" type="email" placeholder="tu@email.com" autoComplete="email" />
        <AuthField
          id="password"
          label="Contraseña"
          type="password"
          placeholder="Mínimo 8 caracteres"
          autoComplete="new-password"
          withToggle
        >
          {/* Medidor de fortaleza (visual) */}
          <div aria-hidden className="grid grid-cols-4 gap-1.5 pr-[22%]">
            {Array.from({ length: 4 }, (_, i) => (
              <span key={i} className="h-1 rounded-full bg-border" />
            ))}
          </div>
        </AuthField>
        <AuthField
          id="confirmPassword"
          label="Repite la contraseña"
          type="password"
          autoComplete="new-password"
          withToggle
        />

        <label className="flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground">
          <input
            type="checkbox"
            name="terms"
            className="size-4 shrink-0 cursor-pointer appearance-none rounded-full border-[1.5px] border-primary bg-card checked:bg-primary"
          />
          <span>
            Acepto las{" "}
            <Link href="#" className="hover:text-foreground hover:underline">
              condiciones de uso
            </Link>{" "}
            y la{" "}
            <Link href="#" className="hover:text-foreground hover:underline">
              política de privacidad
            </Link>
            .
          </span>
        </label>

        <Button type="submit" variant="gradient" size="xl" className="mt-1 w-full">
          Crear cuenta
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        ¿Ya tienes cuenta?{" "}
        <Link href="/login" className="font-semibold text-primary hover:underline">
          Iniciar sesión
        </Link>
      </p>
    </>
  );
}
