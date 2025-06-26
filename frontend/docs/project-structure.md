# プロジェクト構造

```
.
├── public
│   ├── mockServiceWorker.js
├── src
│   ├── components
│   ├── integrations
│   ├── lib
│   ├── main.tsx
│   ├── msw
│   ├── routeTree.gen.ts
│   ├── routes
│   └── styles.css
├── tsconfig.json
├── vite-env.d.ts
└── vite.config.js
```

## Tanstack Router

Tanstack Router は TypeScript の型システムを活用して、ルーティングの定義やナビゲーションを型安全に行えるのが特徴である。これにより、ルートの追加や変更時に型エラーで問題を早期に発見できる。セットアップは React Router と多少異なるが、基本的な考え方は同じである。

- `main.tsx` ではルーターの定義と、API モック用の MSW のセットアップを行っている。
- `routeTree.gen.ts` は Vite プラグインによって自動生成されるルート定義ファイルである。
    - React Router の `flatRoutes` のように階層的なルート定義はできないが、このファイル内で階層的なルートが自動生成される。
    - 自動生成を使わない場合は、各ルートを手動で登録する必要がある。

このように、Tanstack Router を使うことで型安全かつ効率的にルーティングを管理できる。

新しいファイルを作ると、dev サーバーを立ち上げていれば自動的にボイラープレートが生成される。

## `vite-env.d.ts`

必要に応じて、Vite の環境変数や型定義を追加するためのファイルである。ここでは、Vite の特定の機能やプラグインで使用される型を定義することができる。

```ts
interface ImportMetaEnv {
  readonly VITE_PUBLIC_API_URL: string;
  readonly VITE_ENABLE_MOCKS: boolean;
  // 他の環境変数をここに追加
}
```

## src の構成

- `components`: [共通コンポーネント](./components.md)を格納するディレクトリ。
- `integrations`: [外部サービスとの統合](./integrations.md)を格納するディレクトリ。
- `lib`: [ユーティリティ関数やヘルパー関数](./lib.md)を格納するディレクトリ。
- `msw`: [MSW (Mock Service Worker)](./msw.md)を格納するディレクトリ。
- `routes`: [ルートコンポーネント](./routes.md)を格納するディレクトリ。
-  `styles.css`: [Tailwind CSS](./tailwind.md)のスタイルを定義するファイル。
