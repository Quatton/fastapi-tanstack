from pydantic import BaseModel

from app.models.products import Product


class ListProductsResponse(BaseModel):
    products: list[Product]
    total: int
    page: int
    page_size: int
