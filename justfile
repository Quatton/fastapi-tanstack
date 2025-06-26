# Load environment variables
set dotenv-load := true

mod backend "./backend/justfile"
mod db "./db/justfile"

# すべてのコマンドのリスト
default:
    @just --list

# フロントエンド、バックエンドのコードフォーマット
format:
    @just backend::format
    bun run --filter frontend format

# フロントエンド、バックエンドのコードリント
lint:
    @just backend::lint
    bun run --filter frontend lint

# フロントエンド、バックエンドのスキーマ生成
gen:
    @just backend::gen
    bun run --filter frontend gen

# データベースを立ち上げる
db-dev:
    docker compose up

# Prisma Studioを起動
studio:
    bun run --filter db db:pull && bun run --filter db studio