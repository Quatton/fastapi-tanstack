import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useAppForm } from "@/components/ui/tanstack-form";
import type { ProductInfo } from "@/lib/api/_generated";
import {
  useCreateProductV1ProductsPost,
  useListProductsV1ProductsGet,
} from "@/lib/api/_generated/products/products";
import { createProductV1ProductsPostBody } from "@/lib/api/_generated/products/products.schema";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { data: products, error } = useListProductsV1ProductsGet();

  return (
    <main className="p-4">
      <Separator />
      <h1 className="m-4 text-2xl">Products</h1>
      {error && <div className="text-red-500">Error: {error.message}</div>}
      <ProductList products={products?.data.products} />
    </main>
  );
}

export function CreateProductForm() {
  const { mutate: createProduct, isPending } = useCreateProductV1ProductsPost();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const form = useAppForm({
    validators: { onBlur: createProductV1ProductsPostBody },
    defaultValues: {
      name: "",
      price: 0,
      description: "",
    },
    onSubmit: ({ value }) => {
      createProduct(
        { data: value },
        {
          onSuccess: () => {
            form.reset();
          },
        }
      );
    },
  });

  return (
    <form.AppForm>
      <form className="flex flex-col gap-4" onSubmit={form.handleSubmit}>
        <h2 className="text-xl">Create Product</h2>
        <form.AppField name="name">
          {(field) => (
            <field.FormItem className="space-y-1.5">
              <field.FormLabel>Name</field.FormLabel>
              <field.FormControl>
                <Input
                  placeholder="Product Name"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                />
              </field.FormControl>
              <field.FormMessage />
            </field.FormItem>
          )}
        </form.AppField>

        <form.AppField name="price">
          {(field) => (
            <field.FormItem className="space-y-1.5">
              <field.FormLabel>Price</field.FormLabel>
              <field.FormControl>
                <Input
                  type="number"
                  placeholder="Product Price"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(parseFloat(e.target.value))}
                  onBlur={field.handleBlur}
                />
              </field.FormControl>
              <field.FormMessage />
            </field.FormItem>
          )}
        </form.AppField>

        <form.AppField name="description">
          {(field) => (
            <field.FormItem className="space-y-1.5">
              <field.FormLabel>Description</field.FormLabel>
              <field.FormControl>
                <Input
                  placeholder="Product Description"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                />
              </field.FormControl>
              <field.FormMessage />
            </field.FormItem>
          )}
        </form.AppField>

        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? "Creating..." : "Create Product"}
        </Button>

        {successMessage && (
          <div className="text-green-500">
            <CheckCircle className="mr-2 inline" />
            {successMessage}
          </div>
        )}
      </form>
    </form.AppForm>
  );
}

// for testing purposes, but we shouldn't export components from routes
export function ProductList({ products }: { products?: ProductInfo[] }) {
  return (
    <>
      {products && (
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <li key={product.id}>
              <ProductView product={product} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export function ProductView({ product }: { product: ProductInfo }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground text-sm">{product.description ?? "(No description)"}</p>
        <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
      </CardContent>

      <CardFooter>
        <Button className="ml-auto" variant="outline">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
