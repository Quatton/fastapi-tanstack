import { getProductsMock } from "@/lib/api/_generated/products/products.msw";
import { setupServer } from "msw/node";

const server = setupServer();
server.use(...getProductsMock());
