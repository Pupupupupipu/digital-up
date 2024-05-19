from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import declarative_base



Base = declarative_base()

class Genre(Base):
    __tablename__ = "genre"
    id_genre = Column(Integer, primary_key=True)
    name = Column(String, index=True, nullable=False)


