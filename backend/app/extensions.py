import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, registry, sessionmaker, scoped_session
from flask_jwt_extended import JWTManager

models = [
	"User", "Post", "Comment", "Like", "followers"
]

load_dotenv()

mapper_registry = registry()
Base: DeclarativeBase = mapper_registry.generate_base()
engine = create_engine(os.getenv("DATABASE_URL"), echo=True)
SessionLocal = scoped_session(sessionmaker(bind=engine))

jwt = JWTManager()

def init_extensions(app):
	jwt.init_app(app)
	Base.metadata.create_all(engine)
	app.session = SessionLocal