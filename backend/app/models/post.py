import __init__ as db

class Post(db.Model):
    __tablename__ = 'posts'
    # Table Creation via Annotated Declarative Mapping
    # Attributes:
    id: db.Mapped[int] = db.mapped_column(db.Integer, primary_key=True)
    content: db.Mapped[str] = db.mapped_column(db.Text, nullable=False)
    image_url: db.Mapped[str] = db.mapped_column(db.String(255), nullable=True)
    created_at: db.Mapped[db.DateTime] = db.mapped_column(db.DateTime, default=db.dt.now(db.dt.timezone.utc))
    updated_at: db.Mapped[db.DateTime] = db.mapped_column(db.DateTime, default=db.dt.now(db.dt.timezone.utc), onupdate=db.dt.now(db.dt.timezone.utc))
    
    # Foreign key:
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    
    #Relationships:
    comments = db.relationship('Comment', backref='post', lazy=True)
    likes = db.relationship('Like', backref='post', lazy=True)