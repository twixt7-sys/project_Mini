from flask import Blueprint, request
from app.services.frebase_service import db
from app.utilities.Utils import response, error

post_bp = Blueprint('posts', __name__, url_prefix='/api/posts')

@post_bp.route('/', methods=['GET'])
def get_posts():
    try:
        posts_ref = db.collection('posts')
    except Exception as e:
        return error("error" , str(e), 500)