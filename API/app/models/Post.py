from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime
from app.services.frebase_service import db
from app.models.User import User

class Post(BaseModel):
    id: str
    title: str
    content: str
    author: User = Field(default_factory=User.to_dict())
    photos: Optional[List[str]] = Field(default_factory=list)
    likes: List[str] = Field(default_factory=list)
    comments: List[str] = Field(default_factory=list)
    created_at: datetime = Field(default_factory=datetime.now)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'content': self.content,
            'author': self.author,
            'photos': self.photos,
            'likes': self.likes,
            'comments': self.comments,
            'created_at': self.created_at.isoformat()
        }

    def save(self):
        posts_ref = db.collection('posts')
        doc_ref = posts_ref.document(self.id)
        doc_ref.set(self.to_dict())
        return doc_ref.get().to_dict()