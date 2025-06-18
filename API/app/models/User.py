from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List
from datetime import datetime
from app.services.frebase_service import db

class User(BaseModel):
    id: str
    email: EmailStr
    username: str
    bio: Optional[str] = ""
    profile_pic: Optional[str] = ""
    cover_pic: Optional[str] = ""
    followers: List[str] = Field(default_factory=list)
    following: List[str] = Field(default_factory=list)
    posts: List[str] = Field(default_factory=list)
    password: str
    created_at: datetime = Field(default_factory=datetime.now)

    def to_dict(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "bio": self.bio,
            "profile_pic": self.profile_pic,
            "cover_pic": self.cover_pic,
            "followers": self.followers,
            "following": self.following,
            "posts": self.posts,
            "password": self.password,
            "created_at": self.created_at.isoformat()
        }

    def save(self):
        users_ref = db.collection("users")
        doc_ref = users_ref.document(self.id)
        doc_ref.set(self.to_dict())
        return doc_ref.get().to_dict()
