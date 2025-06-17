from flask import Blueprint, request, jsonify
from app.models import User
from app.services.frebase_service import db

user_bp = Blueprint('users', __name__, url_prefix='/api/users')

@user_bp.route('', methods=['GET'])
def get_all_users():
    try:
        users_ref = db.collection('users')  # reference collection
        docs = users_ref.stream()           # get all documents in collection
        users = []                          # initialize empty list
        for doc in docs:
            data = doc.to_dict()            # convert document to python dictionary
            users.append(data)              # add dict data to list
        return jsonify({
            "status": "success",
            "message": "Retrieved all users",
            "data": {
                "count": len(users),
                "users": users
            }
        }), 200
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 500