from flask import Blueprint, request, jsonify
from extensions import SessionLocal
from models import post as p

post_bp = Blueprint('posts', __name__, url_prefix='/posts') #post routes

# Get all posts
@post_bp.route('/', methods=['GET'])
def get_posts():
    with SessionLocal() as session:
        posts = session.query(p.Post).all()
        if posts: return jsonify([{
				'id': post.id,
				'content': post.content,
				'image_url': post.image_url,
				'created_at': post.created_at,
				'updated_at': post.updated_at,
				'user_id': post.user_id
			} for post in posts])
        else:
            return jsonify({'message': 'No posts found'}), 404


# Get a single post
@post_bp.route('/<int:post_id>', methods=['GET'])
def get_post(post_id):
	with SessionLocal() as session:
		post = session.get(p.Post, post_id)
		if not post:
			return jsonify({'error': 'Post not found'}), 404
		return jsonify({
			'id': post.id,
			'title': post.title,
			'content': post.content
		})

# POST create new post
@post_bp.route('/', methods=['POST'])
def create_post():
	data = request.get_json()
	with SessionLocal() as session:
		new_post = p.Post(
			title=data.get('title'),
			content=data.get('content')
		)
		session.add(new_post)
		session.commit()
		session.refresh(new_post)
		return jsonify({'id': new_post.id}), 201

# PUT update post
@post_bp.route('/<int:post_id>', methods=['PUT'])
def update_post(post_id):
	data = request.get_json()
	with SessionLocal() as session:
		post = session.get(p.Post, post_id)
		if not post:
			return jsonify({'error': 'Post not found'}), 404
		post.title = data.get('title', post.title)
		post.content = data.get('content', post.content)
		session.commit()
		return jsonify({'message': 'Post updated'})

# DELETE post
@post_bp.route('/<int:post_id>', methods=['DELETE'])
def delete_post(post_id):
	with SessionLocal() as session:
		post = session.get(p.Post, post_id)
		if not post:
			return jsonify({'error': 'Post not found'}), 404
		session.delete(post)
		session.commit()
		return jsonify({'message': 'Post deleted'})