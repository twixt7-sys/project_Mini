from sqlalchemy import Column, Integer, Text, DateTime, ForeignKey, Table


# imperative mapping
followers = Table('followers',
    Column('follower_id', Integer, ForeignKey('users.id'), primary_key=True),
    Column('followed_id', Integer, ForeignKey('users.id'), primary_key=True)
)