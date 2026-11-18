import Image from "next/image";
import { CalendarDays, ListChecks, ShoppingBasket, Users, type LucideIcon } from "lucide-react";
import ensaladaQuinoa from "@/assets/receta-ensalada-quinoa.jpg";
import salmon from "@/assets/receta-salmon.jpg";
import tortilla from "@/assets/receta-tortilla.jpg";

const FEATURES: { icon: LucideIcon; label: string }[] = [
  { icon: CalendarDays, label: "Planifica los menús de toda la semana" },
  { icon: ListChecks, label: "La lista de la compra se hace sola" },
  { icon: Users, label: "Compártela con tu familia" },
];

export function AuthHero() {
  return (
    <aside className="sticky top-0 hidden h-dvh overflow-hidden bg-gradient-to-br from-[#18a06b] to-primary text-primary-foreground lg:flex lg:flex-col">
      <div className="flex items-center gap-3 px-10 pt-8 xl:px-14">
        <div className="grid size-11 place-items-center rounded-xl bg-white/15">
          <ShoppingBasket className="size-5" />
        </div>
        <span className="font-[family-name:var(--font-hero)] text-xl font-bold">Shopping Family</span>
      </div>

      <div className="mt-[6vh] px-10 xl:px-14">
        <h1 className="max-w-[12ch] font-[family-name:var(--font-hero)] text-[clamp(3rem,3.2vw+2vh,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
          La compra de la semana, resuelta en <span className="text-[#c6f5dc]">familia.</span>
        </h1>

        <ul className="mt-[4vh] flex flex-col gap-4">
          {FEATURES.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3.5 text-base font-medium xl:text-lg">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/15">
                <Icon className="size-5" />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>

      {/* Fotos decorativas: sobresalen por abajo para dar sensación de mesa llena */}
      <div aria-hidden className="mt-auto flex items-end gap-4 px-8 pt-10 xl:px-12">
        <div className="relative aspect-[4/5] h-[30vh] max-w-[30%] translate-y-6 -rotate-6 overflow-hidden rounded-[2rem] border-[6px] border-white/25 shadow-2xl">
          <Image src={salmon} alt="" fill sizes="25vw" className="object-cover" />
        </div>
        <div className="relative aspect-[3/4] h-[36vh] max-w-[36%] translate-y-2 overflow-hidden rounded-[2rem] border-[6px] border-white/25 shadow-2xl">
          <Image src={ensaladaQuinoa} alt="" fill sizes="25vw" className="object-cover" />
        </div>
        <div className="relative aspect-[4/5] h-[27vh] max-w-[28%] translate-y-8 rotate-6 overflow-hidden rounded-[2rem] border-[6px] border-white/25 shadow-2xl">
          <Image src={tortilla} alt="" fill sizes="25vw" className="object-cover" />
        </div>
      </div>
    </aside>
  );
}
