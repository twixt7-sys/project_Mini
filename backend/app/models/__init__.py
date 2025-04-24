# tables based on the database schema
from .user import User
from .post import Post
from .comment import Comment
from .like import Like
from .followers import followers

from app.extensions import Base

from datetime import datetime as dt
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy import DateTime as dt
from sqlalchemy.orm import relationship, Mapped