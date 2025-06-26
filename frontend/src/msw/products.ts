import {
  getCreateProductV1ProductsPostMockHandler,
  getListProductsV1ProductsGetMockHandler,
} from "@/lib/api/_generated/products/products.msw";

export const productMocks = () => [
  getListProductsV1ProductsGetMockHandler(),
  getCreateProductV1ProductsPostMockHandler(),
];
