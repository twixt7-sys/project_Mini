from app.extensions import db
from datetime import datetime as dt

class User(db.Model):
    __tablename__ = 'users'

    #attributes
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    created_at = db.Column(db.DateTime,  default=dt.now(dt.timezone.utc))
    
    #relationships
    posts = db.relationship('Post', backref='user', lazy=True)
    likes = db.relationship('Like', backref='user', lazy=True)
    comments = db.relationship('Comment', backref='user', lazy=True)
    
    # followers relationship (many-to-many)
    following = db.relationship(
		'User',
		secondary='followers',
		primaryjoin='User.id==followers.c.follower_id',
		secondaryjoin='User.id==followers.c.followed_id',
		backref='followers'
	)