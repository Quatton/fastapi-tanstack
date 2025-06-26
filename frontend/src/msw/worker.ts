import { setupWorker } from "msw/browser";
import { productMocks } from "./products";

const worker = setupWorker();
worker.use(...productMocks());

export { worker };
