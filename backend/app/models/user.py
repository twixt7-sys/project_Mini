import __init__ as db

class User(db.Base):
  __tablename__ = 'users'
  # Table creation via Annotated Declarative Mapping
  
  # Attributes:
  id: db.Mapped[int] = db.mapped_column(db.Integer, primary_key=True) #autoincrement??
  username: db.Mapped[str] = db.mapped_column(db.String(80), unique=True, nullable=False)
  email: db.Mapped[str] = db.mapped_column(db.String(80), unique=True, nullable=False)
  password: db.Mapped[str] = db.mapped_column(db.String(80), nullable=False)
  created_at: db.Mapped[db.DateTime] = db.mapped_column(db.DateTime, default=db.dt.now(db.dt.timezone.utc))
  
  #relationships:
  posts = db.relationship('Post', backref='user', lazy=True)
  likes = db.relationship('Like', backref='user', lazy=True)
  comments = db.relationship('Comment', backref='user', lazy=True)
  
  # followers relationship [many-to-many]:
  following = db.relationship(
  'User',
  secondary='followers',
  primaryjoin='User.id==followers.c.follower_id',
  secondaryjoin='User.id==followers.c.followed_id',
  backref='followers'
  )