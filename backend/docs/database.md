# database・マイグレーション

このプロジェクトでは、`alembic` ディレクトリと `core/database.py` を使ってデータベース管理・マイグレーションを行います。

- `alembic/`: マイグレーションスクリプトや設定ファイルを格納。
  - `env.py`: マイグレーションのエントリーポイント。
  - `versions/`: 各マイグレーションの履歴。
- `alembic.ini`: Alembic の設定ファイル。
- `core/database.py`: DB接続やセッション管理。

マイグレーションの実行や新規作成は Alembic コマンドで行います。
