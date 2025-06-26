import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppForm } from "@/components/ui/tanstack-form";
import { useCreateProductV1ProductsPost } from "@/lib/api/_generated/products/products";
import { createProductV1ProductsPostBody } from "@/lib/api/_generated/products/products.schema";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

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
            setSuccessMessage("Product created successfully!");
          },
        }
      );
    },
  });

  return (
    <form.AppForm>
      <form className="flex flex-col gap-4" onSubmit={form.handleSubmit}>
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
