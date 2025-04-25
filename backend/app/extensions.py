from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, registry, sessionmaker, scoped_session

models = [
	"User", "Post", "Comment", "Like", "followers"
]

mapper_registry = registry()
Base = mapper_registry.generate_base()

# ⚙️ MySQL config — update with your actual creds
DB_USER = 'your_mysql_user'
DB_PASS = 'your_mysql_password'
DB_HOST = 'localhost'
DB_PORT = '3306'
DB_NAME = 'mini_db'

DATABASE_URL = f"mysql+mysqlconnector://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

engine = create_engine(DATABASE_URL, echo=True)
SessionLocal = scoped_session(sessionmaker(bind=engine))