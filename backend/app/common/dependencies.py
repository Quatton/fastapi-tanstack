from typing import Annotated

from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import sessionmanager


async def get_db():
    async with sessionmanager.session() as session:
        yield session


DBSessionDep = Annotated[AsyncSession, Depends(get_db)]
