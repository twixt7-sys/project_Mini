from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime
from services.frebase_service import db

# user attributes: id, email, username, bio, profile_pic, cover_pic, followers, following, posts, password, created_at
class User(BaseModel):
    id: str
    email: EmailStr
    username: str
    bio: Optional[str]
    profile_pic: Optional[str]
    cover_pic: Optional[str]
    followers: Optional[list]
    following: Optional[list]
    posts: Optional[list]
    password: str
    created_at: datetime = Field(default_factory=datetime.now)

# adding user document
def create_user(data):
    users = db.collection('users')
    doc_ref = users.add({
        ""
    })
    return doc_ref