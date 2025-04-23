from sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# models/__init__.py
from .user import User
from .post import Post