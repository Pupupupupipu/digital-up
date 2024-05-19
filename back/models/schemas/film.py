from typing import Union, Annotated
from pydantic import BaseModel, Field


class Film_answer(BaseModel):
    id: Union[int, None] = None
    id_genre: Union[int, None] = None
    name: Annotated[Union[str, None], Field(min_length = 1, max_length = 30)] = None
    description: Union[str, None] = None
    image: Union[str, None] = None



