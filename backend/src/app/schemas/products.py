from pydantic import BaseModel


class ListProductsResponseProduct(BaseModel):
    id: int
    name: str
    description: str
    price: float


class ListProductsResponse(BaseModel):
    products: list[ListProductsResponseProduct]
    total: int
    page: int
    page_size: int
