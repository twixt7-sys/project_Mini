from sqlalchemy.orm import DeclarativeBase

models = [
	"User", "Post", "Comment", "Like", "followers"
]

class Base(DeclarativeBase):
	pass