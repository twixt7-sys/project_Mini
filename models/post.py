from sqlalchemy import Column, Integer, String, ForeignKey
from models import Base

class Post(Base):
	__tablename__ = "posts"

	id = Column(Integer, primary_key=True)
	title = Column(String)
	content = Column(String)
	user_id = Column(Integer, ForeignKey("users.id"))
