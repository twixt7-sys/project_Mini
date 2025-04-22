from sqlalchemy import Column, Integer, String
from models import Base  # or from models import Base

class User(Base):
	__tablename__ = "users"
	
	id = Column(Integer, primary_key=True)
	username = Column(String, unique=True, nullable=False)
	email = Column(String, unique=True, nullable=False)
