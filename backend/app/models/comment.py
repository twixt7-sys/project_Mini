from app.extensions import db
from datetime import datetime as dt

class Comment(db.Model):
    __tablename__ = 'comments'
    
    #Attributes:
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=dt.now(dt.timezone.utc))
    
    # Foreign Keys:
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    
    # Relationships:
    user = db.relationship('User', backref='comments', lazy=True)
    post = db.relationship('Post', backref='comments', lazy=True)