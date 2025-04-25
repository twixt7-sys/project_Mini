import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, registry, sessionmaker, scoped_session

models = [
	"User", "Post", "Comment", "Like", "followers"
]

load_dotenv()

mapper_registry = registry()
Base: DeclarativeBase = mapper_registry.generate_base()

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL, echo=True)
SessionLocal = scoped_session(sessionmaker(bind=engine))