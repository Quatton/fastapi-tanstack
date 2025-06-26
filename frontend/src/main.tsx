import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

import * as TanstackQuery from "./integrations/tanstack-query/root-provider";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

import "./styles.css";
import reportWebVitals from "./reportWebVitals.ts";

const router = createRouter({
  routeTree,
  context: {
    ...TanstackQuery.getContext(),
  },
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

async function enableMocking() {
  if (import.meta.env.PROD) {
    return;
  }

  if (!import.meta.env.VITE_ENABLE_MOCKS) {
    return;
  }

  const { worker } = await import("./msw/worker.ts");

  return worker.start({
    onUnhandledRequest: "bypass",
  });
}

// Render the app
const rootElement = document.getElementById("app");

if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  enableMocking()
    .catch((error) => {
      console.error("Failed to start MSW:", error);
    })
    .then(() => {
      root.render(
        <StrictMode>
          <TanstackQuery.Provider>
            <RouterProvider router={router} />
          </TanstackQuery.Provider>
        </StrictMode>
      );
    });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
