from flask import Blueprint, request
from app.services.frebase_service import db
from app.utilities.Utils import response, error

post_bp = Blueprint('posts', __name__, url_prefix='/api/posts')

# TODO: test
@post_bp.route('/', methods=['GET'])
def get_posts():
    try:# get posts -> add in list -> return response
        docs = db.collection('posts').stream()
        posts = [posts.append(doc.to_dict()) for doc in docs]
        return response("success", "Retrieved all posts", posts)
    except Exception as e:
        return error("error" , str(e), 500)

# TODO: test
@post_bp.route('/', methods=['POST'])
def create_post():
    try:# create post -> return response
        db.collection('posts').add(request.json)
        return response("success", "Created post", request.json)
    except Exception as e:
        return error("error" , str(e))

# TODO: test
@post_bp.route('/<post_id>', methods=['GET'])
def get_post(post_id):
    try:# get post -> return response
        doc = db.collection('posts').document(post_id).get()
        return response("success", "Retrieved post", doc.to_dict())
    except Exception as e:
        return error("error" , str(e))

# TODO: test
@post_bp.route('/<post_id>', methods=['PUT'])
def update_post(post_id):
    try:# get post -> update post -> return response
        post_ref = db.collection('posts').document(post_id)
        post_ref.update(request.json)
        post = post_ref.get().to_dict()
        return response("success", "Updated post", post)
    except Exception as e:
        return error("error" , str(e))

# TODO: test
@post_bp.route('/<post_id>', methods=['DELETE'])
def delete_post(post_id):
    try:# get post -> delete post -> return response
        post_ref = db.collection('posts').document(post_id)
        post_ref.delete()
        return response("success", "Deleted post")
    except Exception as e:
        return error("error" , str(e))

