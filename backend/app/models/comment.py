import __init__ as db

class Comment(db.Base):
    __tablename__ = 'comments'
    
    id: db.Mapped[int] = db.mapped_column(db.Integer, primary_key=True)
    content: db.Mapped[str] = db.mapped_column(db.Text, nullable=False)
    created_at: db.Mapped[db.DateTime] = db.mapped_column(db.DateTime, default=db.dt.now(db.dt.timezone.utc))
    
    # Mapped Attributes:
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=db.dt.now(db.dt.timezone.utc))
    
    # Mapped Foreign Keys:
    user_id: db.Mapped[int] = db.mapped_column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id: db.Mapped[int] = db.mapped_column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    
    # Relationships:
    user = db.relationship('User', backref='comments', lazy=True)
    post = db.relationship('Post', backref='comments', lazy=True)