from fastapi import APIRouter

from app.schemas.products import ListProductsResponse

router = APIRouter(
    prefix="/products",
    tags=["products"],
)


@router.get("/")
async def list_products() -> ListProductsResponse:
    """
    Get all products.
    """
    return ListProductsResponse(products=[], total=0, page=1, page_size=10)
