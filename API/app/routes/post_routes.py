from flask import Blueprint, request
from app.services.frebase_service import db
from app.utilities.Utils import response, error

post_bp = Blueprint('posts', __name__, url_prefix='/api/posts')

# TODO: develop get_posts route
@post_bp.route('/', methods=['GET'])
def get_posts():
    try:
        # get all posts
        docs = db.collection('posts').stream()
        # add all dict-converted-posts in list
        posts = [posts.append(doc.to_dict()) for doc in docs]
        return response("success", "Retrieved all posts", posts)
    except Exception as e:
        return error("error" , str(e), 500)