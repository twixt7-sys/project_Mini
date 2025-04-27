from flask import Blueprint, request, jsonify
from extensions import SessionLocal
from models import post as p
from marshmallow import Schema, fields, ValidationError

# Marshmallow schema for input validation
class PostSchema(Schema):
	content = fields.String(required=True)
	user_id = fields.Integer(required=True)
	image_url = fields.String(load_default=None, dump_default=None)

# post routes blueprint
post_bp = Blueprint('posts', __name__, url_prefix='/posts')  

# GET all posts
@post_bp.route('/', methods=['GET'])
def get_posts():
	with SessionLocal() as session:
		posts = session.query(p.Post).all()
		result = PostSchema(many=True).dump(posts)
		return jsonify(result)


# GET a single post by ID
@post_bp.route('/<int:post_id>', methods=['GET'])
def get_post(post_id):
	with SessionLocal() as session:
		post = session.get(p.Post, post_id)
		if not post:
			return jsonify({'error': f'Post with id {post_id} not found'}), 404
		return jsonify({
			'id': post.id,
			'content': post.content,
			'image_url': post.image_url,
			'created_at': post.created_at,
			'user_id': post.user_id
		})


# POST create a new post
@post_bp.route('/', methods=['POST'])
def create_post():
	data = request.get_json()
	try:
		valid_data = PostSchema().load(data)
	except ValidationError as err:
		return jsonify({'errors': err.messages}), 400

	with SessionLocal() as session:
		new_post = p.Post(
			content=valid_data['content'],
			user_id=valid_data['user_id'],
			image_url=valid_data.get('image_url')
		)
		session.add(new_post)
		session.commit()
		session.refresh(new_post)
		return jsonify({
			'id': new_post.id,
			'content': new_post.content,
			'image_url': new_post.image_url,
			'created_at': new_post.created_at,
			'user_id': new_post.user_id
		}), 201


# PUT update a post
@post_bp.route('/<int:post_id>', methods=['PUT'])
def update_post(post_id):
	data = request.get_json()
	try:
		valid_data = PostSchema(partial=True).load(data)
	except ValidationError as err:
		return jsonify({'errors': err.messages}), 400

	with SessionLocal() as session:
		post = session.get(p.Post, post_id)
		if not post:
			return jsonify({'error': f'Post with id {post_id} not found'}), 404
		post.content = valid_data.get('content', post.content)
		post.image_url = valid_data.get('image_url', post.image_url)
		session.commit()
		return jsonify({'message': 'Post updated'})


# DELETE a post
@post_bp.route('/<int:post_id>', methods=['DELETE'])
def delete_post(post_id):
	with SessionLocal() as session:
		post = session.get(p.Post, post_id)
		if not post:
			return jsonify({'error': f'Post with id {post_id} not found'}), 404
		session.delete(post)
		session.commit()
		return jsonify({'message': 'Post deleted'})
