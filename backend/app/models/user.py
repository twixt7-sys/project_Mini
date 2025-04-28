from sqlalchemy import Integer, DateTime, String
from sqlalchemy.orm import Mapped, mapped_column, relationship
from datetime import datetime

from extensions import Base
class User(Base):
  __tablename__ = 'users'
  # Table creation via Annotated Declarative Mapping
  
  # Attributes:
  id: Mapped[int] = mapped_column(Integer, primary_key=True) #autoincrement??
  username: Mapped[str] = mapped_column(String(80), unique=True, nullable=False)
  email: Mapped[str] = mapped_column(String(80), unique=True, nullable=False)
  password: Mapped[str] = mapped_column(String(80), nullable=False)
  created_at: Mapped[DateTime] = mapped_column(DateTime, default=datetime.now())
  
  #relationships:
  posts = relationship('Post', backref='user', lazy=True)
  likes = relationship('Like', backref='user', lazy=True)
  comments = relationship('Comment', backref='user', lazy=True)
  
  # followers relationship [many-to-many]:
  following = relationship(
  'User',
  secondary='followers',
  primaryjoin='User.id==followers.c.follower_id',
  secondaryjoin='User.id==followers.c.followed_id',
  backref='followers'
  )
  
  def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }