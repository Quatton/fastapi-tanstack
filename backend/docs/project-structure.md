# プロジェクト構造

```
backend
├── README.md
├── alembic
│   ├── README
│   ├── env.py
│   ├── script.py.mako
│   └── versions
│       ├── 855f2864e24b_make_description_non_optional.py
│       └── a745d8867235_added_project_table.py
├── alembic.ini
├── app
│   ├── common
│   │   └── dependencies.py
│   ├── core
│   │   ├── database.py
│   │   └── settings.py
│   ├── domains
│   │   ├── __init__.py
│   │   └── products
│   │       ├── __init__.py
│   │       ├── apis
│   │       │   ├── __init__.py
│   │       │   └── v1.py
│   │       ├── models.py
│   │       ├── repository.py
│   │       └── schemas.py
│   └── main.py
├── docs
│   └── project-structure.md
├── justfile
├── openapi.json
├── pyproject.toml
├── scripts
│   └── schema.py
└── uv.lock
```

## ディレクトリ概要

- `alembic`: マイグレーション管理用ディレクトリ。
- `app`: アプリケーション本体。
  - `common`: 共通依存関係など。
  - `core`: 設定やDB接続などのコア機能。
  - `domains`: ドメインごとの機能。
    - `products`: プロダクト関連のAPI・モデル・リポジトリ・スキーマ。
- `scripts`: スクリプト類。
- `docs`: ドキュメント。

## 詳細ドキュメント

- [core.md](./core.md): コア機能の詳細
- [domains.md](./domains.md): ドメイン層の詳細
- [database.md](./database.md): データベース・マイグレーション
- [scripts.md](./scripts.md): スクリプトの使い方
