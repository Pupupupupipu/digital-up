from fastapi import APIRouter, Depends, Body, HTTPException, status
from typing import Union, Annotated

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi.responses import JSONResponse

from back.db_connection import get_session

from back.models.film import Film
from back.models.schemas.film import Film_answer



film_router = APIRouter(tags=["film"], prefix="/film")

@film_router.get('/', response_model=Union[list[Film_answer], None])
async def get_films(DB: AsyncSession = Depends(get_session)):
    films = await DB.execute(select(Film))
    if films == None:
        return JSONResponse(status_code=404, content={"message":"Нет записей"})
    return films.scalars().all()

