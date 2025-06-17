from fastapi import APIRouter

from app.schemas.products import ListProductsResponse

router = APIRouter(
    prefix="/products",
    tags=["products"],
)


@router.get("/")
async def list_products(
    page: int = 1,
    page_size: int = 10,
) -> ListProductsResponse:
    """
    Get all products.
    """
    return ListProductsResponse(products=[], total=0, page=page, page_size=page_size)
