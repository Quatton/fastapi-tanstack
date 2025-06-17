import uuid
from sqlmodel import Field, SQLModel


class Product(SQLModel):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    name: str
    description: str | None = None
    price: float
