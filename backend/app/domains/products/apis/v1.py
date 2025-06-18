import uuid
from fastapi import APIRouter, Depends

from app.domains.products.schemas import (
    ListProductsResponse,
    CreateProductRequest,
    CreateProductResponse,
)
from fastapi import HTTPException, status

from app.common.dependencies import DBSessionDep, get_db
from app.domains.products.models import Product
from app.domains.products.repository import ProductRepository

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
    return await ProductRepository(db).list_products(page=page, page_size=page_size)


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
        await ProductRepository(db).add_product(new_product)
        await db.commit()
        return CreateProductResponse.model_validate(new_product)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to create product: {str(e)}",
        )
