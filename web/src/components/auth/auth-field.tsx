import type { ComponentProps, ReactNode } from "react";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AuthFieldProps extends ComponentProps<"input"> {
  id: string;
  label: string;
  /** Contenido a la derecha de la etiqueta (p. ej. "¿La has olvidado?") */
  labelAside?: ReactNode;
  /** Muestra el botón del ojo (solo visual) */
  withToggle?: boolean;
  children?: ReactNode;
}

export function AuthField({ id, label, labelAside, withToggle, children, ...inputProps }: AuthFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
        {labelAside}
      </div>
      <div className="relative">
        <input
          id={id}
          name={id}
          className="h-11 w-full rounded-xl border border-border bg-card px-3.5 text-sm shadow-[0_1px_2px_rgb(15_31_46/0.04)] outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-3 focus:ring-primary/20 data-[toggle=true]:pr-11"
          data-toggle={withToggle}
          {...inputProps}
        />
        {withToggle && (
          <Button
            type="button"
            variant="subtle"
            aria-label="Mostrar contraseña"
            className="absolute inset-y-0 right-0 h-full w-11 rounded-none active:translate-y-0"
          >
            <Eye className="size-4" />
          </Button>
        )}
      </div>
      {children}
    </div>
  );
}
