import uuid
from pydantic import BaseModel

from app.models.products import Product


class ProductInfo(BaseModel):
    id: uuid.UUID
    name: str
    description: str | None = None
    price: float

    @classmethod
    def from_orm(cls, obj: Product):
        return cls(
            id=obj.id, name=obj.name, description=obj.description, price=obj.price
        )


class ListProductsResponse(BaseModel):
    total: int
    page: int
    page_size: int
    products: list[ProductInfo]
