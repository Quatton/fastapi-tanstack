from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import v1_router

app = FastAPI(
    title="FastAPI Backend",
    description="Backend API for FastAPI-Tanstack project",
    version="1.0.0",
)

app.include_router(v1_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
