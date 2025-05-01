# Load environment variables
set dotenv-load := true

# Backend module for Python/FastAPI related tasks
# Contains commands for running, testing, and managing the backend
mod backend "./backend/justfile"

# Database module for Prisma and database management
# Contains commands for migrations and schema management
mod db "./packages/db/justfile"

# Default command to list all available commands
default:
    @just --list

# Install all dependencies
install:
    @just backend::install
    @just db::install

# Start all development servers
dev:
    @just backend::dev

# Run all tests
test:
    @just backend::test

# Clean all build artifacts
clean:
    @just backend::clean
    @just db::clean