import type { Metadata } from "next";
import { ScanBarcode } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { CategoryFilter } from "@/components/products/category-filter";
import { ProductCard } from "@/components/products/product-card";
import { ProductSearchBar } from "@/components/products/product-search-bar";
import { CATEGORIES, CATEGORY_BY_ID, PRODUCTS } from "@/lib/mock-products";

export const metadata: Metadata = { title: "Productos" };

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Buscador"
        title="Productos"
        description="Consulta el Nutri-Score y añade productos a la lista de la compra."
      />

      <div className="flex flex-col gap-4">
        <ProductSearchBar />
        <CategoryFilter categories={CATEGORIES} active="todas" />
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <ScanBarcode className="size-3.5" />
          Datos de Open Food Facts (simulado)
        </p>
      </div>

      <ul className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} category={CATEGORY_BY_ID[product.category]} />
        ))}
      </ul>
    </>
  );
}
