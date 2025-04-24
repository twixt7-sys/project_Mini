import __init__ as db

class Like(db.Model):
    __tablename__ = 'likes'
    # Table Creation via Annotated Declarative Mapping
    # Attributes:
    id: db.Mapped[int] = db.mapped_column(db.Integer, primary_key=True)
    liked_at: db.Mapped[db.DateTime] = db.mapped_column(db.DateTime, default=db.dt.now(db.dt.timezone.utc))
    
    # Foregin Keys:
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    
    # Relationships:
    user = db.relationship('User', backref='likes', lazy=True)
    post = db.relationship('Post', backref='likes', lazy=True)