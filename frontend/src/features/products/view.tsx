import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import type { ProductInfo } from "@/lib/api/_generated";

export function ProductList({ products }: { products?: ProductInfo[] }) {
  return (
    <>
      {products && (
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <li key={product.id}>
              <ProductItem product={product} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export function ProductItem({ product }: { product: ProductInfo }) {
  return (
    <Card className="flex h-64 flex-col">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-muted-foreground justify-self-start text-sm">{product.description}</p>
      </CardContent>

      <CardFooter>
        <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>

        <Button className="ml-auto" variant="outline">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
