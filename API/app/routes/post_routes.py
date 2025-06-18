from flask import Blueprint, request
from app.services.frebase_service import db
from app.utilities.Utils import response, error
from app.models.Post import Post
import uuid
from datetime import datetime

post_bp = Blueprint('posts', __name__, url_prefix='/api/posts')

@post_bp.route('/', methods=['GET'])
def get_posts():
    try:# get posts -> add in list -> return response
        docs = db.collection('posts').stream()
        posts = [doc.to_dict() for doc in docs]
        return response("success", "Retrieved all posts", posts)
    except Exception as e:
        return error("error" , str(e))

# TODO: test
@post_bp.route('/', methods=['POST'])
def create_post():
    try:
        data = request.get_json()  # or simply use request.json
        post_id = str(uuid.uuid4())
        post = Post(
            id=post_id,
            title=data['title'],
            content=data['content'],
            author=data['author'],
            photos=data['photos'],
            likes=data['likes'],
            comments=data['comments'],
            created_at=datetime.now()
            )
        db.collection('posts').add(post.to_dict())
        return response("success", "Created post", post.to_dict())
    except Exception as e:
        return error("error", str(e))

@post_bp.route('/<post_id>', methods=['GET'])
def get_post(post_id):
    try:
        doc_ref = db.collection('posts').document(post_id)
        doc = doc_ref.get()

        if not doc.exists:
            return error("not_found", f"Post with ID '{post_id}' not found", 404)

        post = {"id": doc.id, **doc.to_dict()}
        return response("success", "Retrieved post", post)
    except Exception as e:
        return error("error", str(e), 500)

@post_bp.route('/<post_id>', methods=['PUT'])
def update_post(post_id):
    try:# get post -> update post -> return response
        post_ref = db.collection('posts').document(post_id)
        post_ref.update(request.json)
        post = post_ref.get().to_dict()
        return response("success", "Updated post", post)
    except Exception as e:
        return error("error" , str(e))

@post_bp.route('/<post_id>', methods=['DELETE'])
def delete_post(post_id):
    try:# get post -> delete post -> return response
        post_ref = db.collection('posts').document(post_id)
        post_ref.delete()
        return response("success", "Deleted post")
    except Exception as e:
        return error("error" , str(e))

@post_bp.route('/<user_id>/', methods=['GET'])
def get_user_posts(user_id):
    try:# get posts -> return response
        posts = db.collection('posts').where('user_id', '==', user_id).get()
        return response("success", "Retrieved posts", [post.to_dict() for post in posts])
    except Exception as e:
        return error("error" , str(e))
