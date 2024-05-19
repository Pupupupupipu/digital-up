from sqlalchemy import Column, Integer, String, ForeignKey, Identity
from sqlalchemy.orm import declarative_base


from back.models.genre import Genre

Base = declarative_base()

class Film(Base):
    __tablename__ = "film"
    id = Column(Integer,Identity(start=1), primary_key=True)
    id_genre = Column(Integer, ForeignKey(Genre.id_genre))
    name = Column(String, nullable=False)
    description = Column(String, nullable=False)
    image = Column(String, nullable=False)

