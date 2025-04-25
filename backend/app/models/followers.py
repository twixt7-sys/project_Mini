from sqlalchemy import Column, Integer, ForeignKey, Table
from extensions import Base

# imperative mapping
followers = Table('followers',
    Base.metadata,
    Column('follower_id', Integer, ForeignKey('users.id'), primary_key=True),
    Column('followed_id', Integer, ForeignKey('users.id'), primary_key=True)
)