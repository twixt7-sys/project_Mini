from app.extensions import db
from datetime import datetime as dt

class Post(db.Model):
    __tablename__ = 'posts'
    
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    image_url = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime, default=dt.now(dt.timezone.utc))
    updated_at = db.Column(db.DateTime, default=dt.now(dt.timezone.utc), onupdate=dt.now(dt.timezone.utc))
    
    # Foreign key:
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    
    #Relationships:
    comments = db.relationship('Comment', backref='post', lazy=True)
    likes = db.relationship('Like', backref='post', lazy=True)