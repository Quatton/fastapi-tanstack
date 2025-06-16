# Load environment variables
set dotenv-load := true

mod backend "./backend/justfile"

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