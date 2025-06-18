from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.sql.functions import count

from .schemas import ListProductsResponse, ProductInfo
from .models import Product


class ProductRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def add_product(self, product: Product):
        self.db.add(product)
        return product

    async def get_product(self, product_id: str) -> Product | None:
        result = await self.db.get(Product, product_id)
        return result

    async def list_products(self, page: int = 1, page_size: int = 10):
        products = (
            await self.db.scalars(
                select(Product).offset((page - 1) * page_size).limit(page_size)
            )
        ).all()

        total = await self.db.scalar(select(count(Product.id)))

        if total is None:
            total = 0

        page_size = len(products)

        return ListProductsResponse(
            total=total,
            page=page,
            page_size=page_size,
            products=[ProductInfo.model_validate(product) for product in products],
        )
