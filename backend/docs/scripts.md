# scripts ディレクトリ

`scripts` ディレクトリには、開発や運用を補助するためのスクリプトを格納します。

- `schema.py`: スキーマ生成やデータベース関連の補助スクリプト。

## justfile について

`justfile` には、開発や運用でよく使うコマンドがまとめられています。

- `install`: パッケージのインストール（`uv sync`）
- `dev`: 開発サーバーの起動（`uvicorn`）
- `format`: コードフォーマット（`ruff format`）
- `lint`: コードリント（`ruff check`）
- `clean`: ビルドやキャッシュの削除
- `gen`: スキーマ生成（`python -m scripts.schema`）
- `db-push`: Alembic マイグレーションの適用
- `db-migrate MESSAGE`: Alembic マイグレーションの新規作成

これらのコマンドを使うことで、開発フローを効率化できます。
