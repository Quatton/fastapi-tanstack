# Load environment variables
set dotenv-load := true

mod backend "./backend/justfile"
mod db "./db/justfile"

default:
    @just --list

format:
    @just backend::format
    bun run --filter frontend format

lint:
    @just backend::lint
    bun run --filter frontend lint

gen:
    @just backend::gen
    bun run --filter frontend gen

db-dev:
    docker compose up

studio:
    bun run --filter db db:pull && bun run --filter db studio