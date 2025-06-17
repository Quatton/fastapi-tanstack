import uuid
from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.sql.functions import count

from app.domains.products.schemas import (
    ListProductsResponse,
    CreateProductRequest,
    CreateProductResponse,
    ProductInfo,
)
from fastapi import HTTPException, status

from app.common.dependencies import DBSessionDep, get_db
from app.domains.products.models import Product

router = APIRouter(
    prefix="/v1/products",
    tags=["products"],
)


@router.get(
    "/",
    response_model=ListProductsResponse,
    status_code=status.HTTP_200_OK,
    dependencies=[Depends(get_db)],
)
async def list_products(
    db: DBSessionDep,
    page: int = 1,
    page_size: int = 10,
) -> ListProductsResponse:
    """
    Get all products.
    """
    products = (
        await db.scalars(
            select(Product).offset((page - 1) * page_size).limit(page_size)
        )
    ).all()

    total = await db.scalar(select(count(Product.id)))

    if total is None:
        total = 0

    page_size = len(products)

    return ListProductsResponse(
        total=total,
        page=page,
        page_size=page_size,
        products=[ProductInfo.model_validate(product) for product in products],
    )


@router.post(
    "/",
    response_model=CreateProductResponse,
    status_code=status.HTTP_201_CREATED,
    dependencies=[Depends(get_db)],
)
async def create_product(
    product: CreateProductRequest, db: DBSessionDep
) -> CreateProductResponse:
    """
    Create a new product.
    """
    new_product = Product(
        id=uuid.uuid4(),
        name=product.name,
        description=product.description,
        price=product.price,
    )

    try:
        db.add(new_product)
        await db.commit()
        await db.refresh(new_product)

        return CreateProductResponse.model_validate(new_product)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to create product: {str(e)}",
        )
