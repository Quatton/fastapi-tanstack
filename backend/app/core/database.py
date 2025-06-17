from app.domains.products.models import Product

models = [Product]
metadata = [model.metadata for model in models]

__all__ = ["Product", "models", "metadata"]
