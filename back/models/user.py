from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__="users"
    id = Column(Integer, primary_key=True)
    login = Column(String, nullable=False)
    hash_password = Column(String, nullable=False)
    name = Column(String, nullable=False)

    def __init__(self, login, hash_password):
        self.login = login
        self.hash_password = hash_password
        self.name = login