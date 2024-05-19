from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import JSONResponse
from back.db_connection import get_session
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from back.models.user import User
from back.models.schemas.user import User_create
import bcrypt


user_router = APIRouter(tags=["users"], prefix="/users")

# salt = bcrypt.gensalt()
salt = b"$2b$12$7vs1U0V38x8CyXzLxrHmW."


@user_router.post('/')
async def create_user(
    item: User_create,
    db: AsyncSession=Depends(get_session)):
    try:
        existing_user = await db.execute(select(User).filter(User.login == item.login))
        existing_user = existing_user.scalars().all()

        if existing_user != []:
            raise HTTPException(detail="User with this login already exists", status_code=400)
           
        hashed_password = bcrypt.hashpw(item.password.encode('utf-8'), salt)

        user = User(
                    login = item.login,
                    hash_password = str(hashed_password)
                    )
        db.add(user)
        await db.commit()
        await db.refresh(user)
        return {"name": user.name, 
                "login": user.login}
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail=f"Произошла ошибка: {e}")

@user_router.post('/sign_in')
async def sign_in_user(
    item: User_create,
    db: AsyncSession=Depends(get_session)):

    try:
        hashed_password = bcrypt.hashpw(item.password.encode('utf-8'), salt)
        user = await db.execute(select(User).filter(User.login == item.login))
        user = user.scalars().first()

        if user == None:
            raise HTTPException(detail="User with this login not exists", status_code=400)
        
        if user.hash_password != str(hashed_password):
            raise HTTPException(detail="Incorrect password", status_code=400)
        
        return { "name": user.name, "login": user.login }
    except Exception as e:
        print(e)
        raise  HTTPException(status_code=500, detail=f"Произошла ошибка: {e}")
    


@user_router.get('/')
async def get_users(db: AsyncSession=Depends(get_session)):
    try:
        users = await db.execute(select(User))

        return users.scalars().all()
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail=f"Произошла ошибка: {e}")
