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

@user_bp.route('<string:user_id>', methods=['GET'])
def get_user(user_id):
    try:
        user_ref = db.collection('users').document(user_id) # reference document
        doc = user_ref.get()                                # get document
        if doc.exists:
            data = doc.to_dict()                            # convert document to python dictionary
            return jsonify({
                "status": "success",
                "message": "Retrieved user",
                "data": data
            }), 200
        else:
            return jsonify({
                "status": "error",
                "message": "User not found"
            }), 404
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 500

@user_bp.route('<string:user_id>', methods=['PUT'])
def update_user(user_id):
    try:
        user_ref = db.collection('users').document(user_id) # reference document
        user_ref.update(request.json)                       # update document
        user = user_ref.get().to_dict()                     # convert document to python dictionary
        return jsonify({
            "status": "success",
            "message": "User updated",
            "data": {
                "user": user
            }
        })
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 500

# TODO: test
@user_bp.route('<string:user_id>', methods=['DELETE'])
def delete_user(user_id):
    try:
        user_ref = db.collection('users').document(user_id) # reference document
        user = user_ref.get().to_dict()                     # convert document to python dictionary
        user_ref.delete()                                   # delete document
        return jsonify({
            "status": "success",
            "message": "User deleted",
            "data": {
                "user": user
            }
        })
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 500