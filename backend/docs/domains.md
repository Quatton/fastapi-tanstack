# domains ディレクトリ

`domains` ディレクトリは、アプリケーションのビジネスロジックやドメインごとの機能をまとめる場所です。

- `products/`: プロダクトに関するAPI・モデル・リポジトリ・スキーマなどを格納。
  - `apis/`: エンドポイントの実装。
  - `models.py`: データベースモデル。
  - `repository.py`: データアクセス層。
  - `schemas.py`: 入出力用スキーマ。

ドメインごとにディレクトリを分けることで、機能の追加や保守がしやすくなります。
