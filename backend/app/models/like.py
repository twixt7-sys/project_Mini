from app.extensions import db
from datetime import datetime as dt

class Like(db.Model):
    __tablename__ = 'likes'
    
    #Attribute:
    id = db.Column(db.Integer, primary_key=True)
    liked_at = db.Column(db.datetime, default=dt.now(dt.timezone.utc))
    
    user_id = db.Column(db.Integer, )