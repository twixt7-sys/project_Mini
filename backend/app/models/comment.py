from sqlalchemy import Column, Integer, Text, DateTime, ForeignKey
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from datetime import datetime as dt
from ..extensions import Base

class Comment(Base):
    __tablename__ = 'comments'
    
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    created_at: Mapped[DateTime] = mapped_column(DateTime, default=dt.now(dt.timezone.utc))
    
    # Mapped Attributes:
    id = Column(Integer, primary_key=True)
    content = Column(Text, nullable=False)
    created_at = Column(DateTime, default=dt.now(dt.timezone.utc))
    
    # Mapped Foreign Keys:
    user_id: Mapped[int] = mapped_column(Integer, ForeignKey('users.id'), nullable=False)
    post_id: Mapped[int] = mapped_column(Integer, ForeignKey('posts.id'), nullable=False)
    
    # Relationships:
    user = relationship('User', backref='comments', lazy=True)
    post = relationship('Post', backref='comments', lazy=True)