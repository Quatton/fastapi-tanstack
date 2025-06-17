import os
from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


def get_database_url() -> str:
    url = os.environ.get("POSTGRES_DATABASE_URL")
    if url:
        return url

    user = os.environ.get("POSTGRES_USER", "postgres")
    password = os.environ.get("POSTGRES_PASSWORD", "postgres")
    db = os.environ.get("POSTGRES_DB", "mydb")
    port = os.environ.get("POSTGRES_PORT", "5432")
    host = os.environ.get("POSTGRES_HOST", "localhost")

    return f"postgresql://{user}:{password}@{host}:{port}/{db}"


class Settings(BaseSettings):
    """The settings for the application."""

    model_config = SettingsConfigDict(env_file=".env")

    DEBUG: bool = os.environ.get("DEBUG", "True").lower() in ("true", "1", "t")
    POSTGRES_DATABASE_URL: str = get_database_url()


@lru_cache
def get_settings():
    """This function returns the settings obj for the application."""
    return Settings()
