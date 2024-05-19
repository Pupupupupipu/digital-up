from pydantic import BaseModel

class User_create(BaseModel):
    login: str
    password: str