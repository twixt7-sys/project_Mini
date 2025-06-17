from flask import Blueprint, request, jsonify
from models.User import User
import uuid
from datetime import datetime as dt

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    
    try:
        data = request.get_json()   # get request
        user_id = str(uuid.uuid4()) # generate id
        user = User(
            id=user_id,
            email=data["email"],
            username=data["username"],
            password=data["password"],  # To be hashed
            bio=data.get("bio", ""),
            profile_pic=data.get("profile_pic", ""),
            cover_pic=data.get("cover_pic", ""),
            followers=[],
            following=[],
            posts=[],
            created_at=dt.now()
        )
        user.save_to_firestore()
        return jsonify(
            {
                'status': 'success',
                'message': 'User registered successfully',
                'user': user.to_dict()
            }
        )
    except Exception as e:
        return jsonify(
            {
                'status': 'error',
                'message': str(e)
            }
        )

@auth_bp.route('/login', methods=['POST'])
def login():
    
    # TODO: Authenticate user and return token
    
    return jsonify(
        {
            'status': 'success',
            'message': 'User authenticated successfully',
            'token': 'example_token',
            'data': {
                
            }
        }
    )

@auth_bp.route('/logout', methods=['POST'])
def logout():

    # TODO: Invalidate token

    return jsonify(
        {
            'status': 'success',
            'message': 'User logged out successfully',
        }
    )