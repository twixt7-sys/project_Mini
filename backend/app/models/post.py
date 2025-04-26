from sqlalchemy import Column, Integer, Text, DateTime, ForeignKey, String
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from datetime import datetime

from extensions import Base
class Post(Base):
    __tablename__ = 'posts'
    # Table Creation via Annotated Declarative Mapping
    # Attributes:
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    image_url: Mapped[str] = mapped_column(String(255), nullable=True)
    created_at: Mapped[DateTime] = mapped_column(DateTime, default=datetime.now())

    # Foreign key:
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    
    #Relationships:
    comments = relationship('Comment', backref='post', lazy=True)
    likes = relationship('Like', backref='post', lazy=True)