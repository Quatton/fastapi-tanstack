/// <reference types="vite/client" />

interface ViteTypeOptions {
  strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
  readonly VITE_PUBLIC_API_URL: string;
  readonly VITE_ENABLE_MOCKS: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
