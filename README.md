# FastAPI + TanStack Router Example

## 技術

チェックマークのないものは、まだ実装していないが、実装予定のものです。

- [ ] GitHub Action
- [ ] `devcontainer.json`

- [x] [FastAPI](https://fastapi.tiangolo.com/)
- [x] [uv](https://docs.astral.sh/uv/) - Package manager
- [x] [SQLAlchemy](https://www.sqlalchemy.org/) - ORM
- [x] [Alembic](https://alembic.sqlalchemy.org/en/latest/) - Database migration tool
- [ ] [Pytest](https://docs.pytest.org/en/stable/) - バックエンドのテスト
- [x] [Prisma](https://www.prisma.io/) - 意外ですが、Prisma Studio やっぱり便利なので使います。**ORM としては使いません。**

- [x] [TanStack Router](https://tanstack.com/router/latest)
- [x] [React](https://react.dev/)
- [x] [Tailwind CSS](https://tailwindcss.com/)
- [x] [Shadcn UI](https://ui.shadcn.com/) - Tailwind CSS ベースのコンポーネントライブラリ
- [x] [Orval](https://orval.dev/) - OpenAPI から TypeScript のクライアントコードを生成
- [x] [Vite](https://vite.dev/) - フロントエンドのビルドツール
- [x] [TanStack Query](https://tanstack.com/query/latest)
- [x] [Bun](https://bun.sh/) - Package manager (Runtime は Node.js のまま)
- [x] [Justfile](https://github.com/casey/just) - Makefile の代替
- [x] [MSW](https://mswjs.io/) - Mock Service Worker
- [x] [ESLint](https://eslint.org/) - JavaScript/TypeScript の linter
- [x] [Prettier](https://prettier.io/) - コードフォーマッター
- [ ] [Vitest](https://vitest.dev/) - フロントエンドのテスト

### テンプレートに含まれていないが、検討中

- 認証ライブラリ
- 画像・ファイルアップロード


### テンプレートに含む予定がないが、おすすめの拡張

- 状態管理ライブラリ (使いやすさ、拡張性の差が大きいので、必要に応じて)
- インフラ関連
- モニタリング・ロギング関連
  
## 機能

- [x] CRUD 操作
- [x] Query キャッシュと無効化
- [x] 自動生成された OpenAPI ドキュメント・クライアントコード
- [x] MSW を使ったモックサーバー
- [x] Docker Compose での開発環境構築

## 構成

```
.
├── README.md
├── backend
│   ├── docs <- Backend については詳しく書いています。
│   ├── alembic
│   ├── alembic.ini
│   ├── app
│   ├── justfile
│   ├── openapi.json
│   ├── pyproject.toml
│   ├── scripts
│   └── uv.lock
├── bun.lock
├── db
│   ├── README.md
│   ├── justfile
│   ├── package.json
│   └── prisma
├── docker-compose.yml
├── frontend
│   ├── docs <- Frontend については詳しく書いています。
│   ├── components.json
│   ├── eslint.config.mjs
│   ├── index.html
│   ├── justfile
│   ├── orval.config.ts
│   ├── package.json
│   ├── prettier.config.mjs
│   ├── public
│   ├── src
│   ├── tsconfig.json
│   ├── vite-env.d.ts
│   └── vite.config.js
├── justfile
└── package.json
```

## 基本的な使い方

### データベース

```
docker compose up
```

### バックエンド

```
cd backend
just install (uv sync)
just db-push (uv run alembic upgrade head)
just dev (uvicorn app.main:app --reload --host 0.0.0.0 --port 8000)
```

### フロントエンド

```
cd frontend
bun install
bun run dev
```