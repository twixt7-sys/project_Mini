from sqlalchemy import Column, Integer, Text, DateTime, ForeignKey
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from datetime import datetime

from extensions import Base
class Like(Base):
    __tablename__ = 'likes'
    # Table Creation via Annotated Declarative Mapping
    # Attributes:
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    liked_at: Mapped[DateTime] = mapped_column(DateTime, default=datetime.now())
    
    # Foregin Keys:
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    post_id = Column(Integer, ForeignKey('posts.id'), nullable=False)