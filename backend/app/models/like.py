from . import Base, Mapped, mapped_column, Integer, DateTime, relationship, Column, ForeignKey, dt

class Like(Base):
    __tablename__ = 'likes'
    # Table Creation via Annotated Declarative Mapping
    # Attributes:
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    liked_at: Mapped[DateTime] = mapped_column(DateTime, default=dt.now(dt.timezone.utc))
    
    # Foregin Keys:
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    post_id = Column(Integer, ForeignKey('posts.id'), nullable=False)
    
    # Relationships:
    user = relationship('User', backref='likes', lazy=True)
    post = relationship('Post', backref='likes', lazy=True)