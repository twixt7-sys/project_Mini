from flask import Blueprint, jsonify, request
from models import post as p
from .. import extensions as db

post_bp = Blueprint('post', __name__) #post routes

@post_bp.route('/', methods=['POST'])
def create_post():
    post_data = request.get_json()
    new_post = p.Post(
        content=post_data['content'],
        image_url=post_data.get('image_url'),
        user_id=post_data['user_id']
    )