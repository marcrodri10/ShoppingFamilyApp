import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { CategorySection } from "@/components/cart/category-section";
import { CheckoutBar } from "@/components/cart/checkout-bar";
import { ListProgressBar } from "@/components/cart/list-progress-bar";
import { SHOPPING_SECTIONS } from "@/lib/mock-shopping-list";
import { CATEGORY_BY_ID } from "@/lib/mock-products";

export const metadata: Metadata = { title: "Lista de la compra" };

export default function ListaPage() {
  const items = SHOPPING_SECTIONS.flatMap((s) => s.items);
  const total = items.length;
  const checked = items.filter((i) => i.checked).length;

  return (
    <div className="mx-auto max-w-2xl">
      <PageHeader
        eyebrow="Lista de la compra"
        title="Ruta por el súper"
        description={`${checked} de ${total} artículos en el carro`}
      />

      <ListProgressBar checked={checked} total={total} />

      <div className="mt-5 flex flex-col gap-4">
        {SHOPPING_SECTIONS.map((section) => (
          <CategorySection
            key={section.categoryId}
            section={section}
            category={CATEGORY_BY_ID[section.categoryId]}
          />
        ))}
      </div>

      <CheckoutBar checked={checked} total={total} className="mt-6" />
    </div>
  );
}
