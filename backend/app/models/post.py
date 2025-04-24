from . import Base, Mapped, mapped_column, String, Integer, DateTime, relationship, Column, ForeignKey, Text, dt


class Post(Base):
    __tablename__ = 'posts'
    # Table Creation via Annotated Declarative Mapping
    # Attributes:
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    image_url: Mapped[str] = mapped_column(String(255), nullable=True)
    created_at: Mapped[DateTime] = mapped_column(DateTime, default=dt.now(dt.timezone.utc))
    updated_at: Mapped[DateTime] = mapped_column(DateTime, default=dt.now(dt.timezone.utc), onupdate=dt.now(dt.timezone.utc))
    
    # Foreign key:
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    
    #Relationships:
    comments = relationship('Comment', backref='post', lazy=True)
    likes = relationship('Like', backref='post', lazy=True)