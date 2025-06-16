from fastapi import APIRouter

from .endpoints.products import router as products_router

router = APIRouter(
    prefix="/v1",
)

router.include_router(
    products_router,
)
