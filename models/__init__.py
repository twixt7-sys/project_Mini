# db.py or models/__init__.py
from sqlalchemy.orm import declarative_base

Base = declarative_base()

# models/__init__.py
from .user import User
from .post import Post