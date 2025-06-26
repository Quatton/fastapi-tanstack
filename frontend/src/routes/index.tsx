import { Separator } from "@/components/ui/separator";
import { useListProductsV1ProductsGet } from "@/lib/api/_generated/products/products";
import { createFileRoute } from "@tanstack/react-router";
import { CreateProductForm } from "@/features/products/form";
import { ProductList } from "@/features/products/view";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { data: products, error } = useListProductsV1ProductsGet();

  return (
    <main className="container mx-auto space-y-4 p-4 pt-24">
      <h2 className="text-2xl">Create Product</h2>
      <section className="mx-auto max-w-xl">
        <CreateProductForm />
      </section>
      <Separator />
      <h2 className="text-2xl">Products</h2>
      <section>
        {error && <div className="text-red-500">Error: {error.message}</div>}
        {products?.data.products && <ProductList products={products?.data.products} />}
      </section>
    </main>
  );
}
