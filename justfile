# Load environment variables
set dotenv-load := true

mod backend "./backend/justfile"

# Default command to list all available commands
default:
    @just --list

format:
    @just backend::format
    bun run --filter frontend format

lint:
    @just backend::lint
    bun run --filter frontend lint