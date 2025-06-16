from pydantic import BaseModel


class Product(BaseModel):
    id: int
    name: str
    description: str
    price: float


class ListProductsResponse(BaseModel):
    products: list[Product]
    total: int
    page: int
    page_size: int
