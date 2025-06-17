import uuid
from pydantic import BaseModel, ConfigDict


class ProductInfo(BaseModel):
    model_config = ConfigDict(
        from_attributes=True,
    )

    id: uuid.UUID
    name: str
    description: str | None = None
    price: float


class ListProductsResponse(BaseModel):
    total: int
    page: int
    page_size: int
    products: list[ProductInfo]


class CreateProductRequest(BaseModel):
    name: str
    description: str | None = None
    price: float


class CreateProductResponse(ProductInfo):
    pass
