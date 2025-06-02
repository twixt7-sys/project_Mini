from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from models import User as u
from extensions import SessionLocal
from marshmallow import Schema, fields, ValidationError
from flask_jwt_extended import get_jwt, jwt_required, get_jwt_identity
from extensions import jwt

# Marshmallow schema for input validation
class UserSchema(Schema):
    username = fields.String(required=True)
    email = fields.Email(required=True)
    password = fields.String(required=True)
    confirm_password = fields.String(required=True)

class LoginSchema(Schema):
    username = fields.String(required=True)
    password = fields.String(required=True)

# auth routes blueprint
auth_bp = Blueprint('auth', __name__, url_prefix='/auth')

# User registration route
@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    schema = UserSchema()
    try:
        result = schema.load(data)
    except ValidationError as err:
        return jsonify(err.messages), 400

    username = result['username']
    email = result['email']
    password = result['password']
    confirm_password = result['confirm_password']

    if password != confirm_password:
        return jsonify({'message': 'Passwords do not match'}), 400

    hashed_password = generate_password_hash(password)

    db = SessionLocal()
    user = u(username=username, email=email, password=hashed_password)

    db.add(user)
    db.commit()
    db.refresh(user)
    return jsonify({
        'id': user.id,
        'username': user.username,
        'email': user.email
    }), 201

# User login route
@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    schema = LoginSchema()
    try:
        result = schema.load(data)
    except ValidationError as err:
        return jsonify(err.messages), 400

    username = result['username']
    password = result['password']

    db = SessionLocal()
    
    user = db.query(u).filter_by(username=username).first()
    if not user or not check_password_hash(user.password, password):
        return jsonify({'message': 'Invalid credentials'}), 401
    access_token = create_access_token(identity={'username': user.username})
    return jsonify({
        'access_token': access_token,
        'user': {
            'id': user.id,
            'username': user.username,
            'email': user.email
        }
    }), 200
    
# User logout route
@auth_bp.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    jti = get_jwt()['jti']
    db = SessionLocal()
    db.query(jwt.Blacklist).filter_by(jti=jti).delete()
    db.commit()
    return jsonify({'message': 'User logged out'}), 200

# User profile route
@auth_bp.route('/profile', methods=['GET'])
@jwt_required()
def profile():
    current_user = get_jwt_identity()
    db = SessionLocal()
    user = db.query(u.User).filter_by(username=current_user['username']).first()
    if not user:
        return jsonify({'message': 'User not found'}), 404
    return jsonify({
        'id': user.id,
        'username': user.username,
        'email': user.email
    }), 200

# User update route
@auth_bp.route('/update', methods=['PUT'])
@jwt_required()
def update():
    current_user = get_jwt_identity()
    db = SessionLocal()
    user = db.query(u.User).filter_by(username=current_user['username']).first()
    if not user:
        return jsonify({'message': 'User not found'}), 404
    data = request.get_json()
    schema = UserSchema()
    try:
        result = schema.load(data)
    except ValidationError as err:
        return jsonify(err.messages), 400
    user.username = result.get('username', user.username)
    user.email = result.get('email', user.email)
    user.password = generate_password_hash(result.get('password', user.password))
    db.commit()
    db.refresh(user)
    return jsonify({
        'id': user.id,
        'username': user.username,
        'email': user.email
    }), 200