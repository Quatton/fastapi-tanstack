# FastAPI + TanStack Router Example

## 技術

チェックマークのないものは、まだ実装していないが、実装予定のものです。

- [ ] GitHub Action
- [ ] `devcontainer.json`

- [x] [FastAPI](https://fastapi.tiangolo.com/)
- [ ] [uv](https://docs.astral.sh/uv/) - Package manager
- [ ] [SQLAlchemy](https://www.sqlalchemy.org/) - ORM
- [ ] [Alembic](https://alembic.sqlalchemy.org/en/latest/) - Database migration tool
- [ ] [Pytest](https://docs.pytest.org/en/stable/) - バックエンドのテスト
- [ ] [Prisma](https://www.prisma.io/) - 意外ですが、Prisma Studio やっぱり便利なので使います。**ORM としては使いません。**

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
