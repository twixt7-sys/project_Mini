# tables based on the database schema
from .user import User
from .post import Post
from .comment import Comment
from .like import Like
from .followers import followers

from app.extensions import Base

from datetime import datetime as dt
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy import DateTime as dt
from sqlalchemy.orm import relationship, Mapped

'''
type_map: Dict[Type[Any], TypeEngine[Any]] = {
    bool: types.Boolean(),
    bytes: types.LargeBinary(),
    datetime.date: types.Date(),
    datetime.datetime: types.DateTime(),
    datetime.time: types.Time(),
    datetime.timedelta: types.Interval(),
    decimal.Decimal: types.Numeric(),
    float: types.Float(),
    int: types.Integer(),
    str: types.String(),
    uuid.UUID: types.Uuid(),
}
'''