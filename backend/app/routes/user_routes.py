from flask import Blueprint, request, jsonify
from extensions import SessionLocal
from models import user as u
from marshmallow import Schema, fields, ValidationError


# Marshmallow schema for input validation
class UserSchema(Schema):
    username = fields.String(required=True)
    email = fields.Email(required=True)
    password = fields.String(required=True)

# user routes blueprint
user_bp = Blueprint('users', __name__, url_prefix='/users')

@user_bp.route('/', methods=['GET'])
def get_users():
    db = SessionLocal()
    users = db.query(u.User).all()
    return jsonify(users)

@user_bp.route('/<int:user_id>', methods=['GET'])
def get_user(user_id):
    db = SessionLocal()
    user = db.query(u.User).get(user_id)
    return jsonify(user)

@user_bp.route('/', methods=['POST'])
def create_user():
    db = SessionLocal()
    data = request.get_json()
    schema = UserSchema()
    try:
        validated_data = schema.load(data)
    except ValidationError as err:
        return jsonify(err.messages), 400

    new_user = u.User(**validated_data)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return jsonify(new_user), 201

@user_bp.route('/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    db = SessionLocal()
    user = db.query(u.User).get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    data = request.get_json()
    schema = UserSchema()
    try:
        validated_data = schema.load(data)
    except ValidationError as err:
        return jsonify(err.messages), 400
    for key, value in validated_data.items():
        setattr(user, key, value)
    db.commit()
    db.refresh(user)
    return jsonify(user)

@user_bp.route('/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    db = SessionLocal()
    user = db.query(u.User).get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    db.delete(user)
    db.commit()
    return jsonify({'message': 'User deleted successfully'}), 200
