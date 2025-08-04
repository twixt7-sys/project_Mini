from flask import Blueprint, request
from app.services.frebase_service import db
from app.utilities.Utils import response, error

user_bp = Blueprint('users', __name__, url_prefix='/api/users')

@user_bp.route('', methods=['GET'])
def get_all_users():
    try:
        users_ref = db.collection('users')                  # reference collection
        docs = users_ref.stream()                           # get docs in collection
        users = []                                          # initialize empty list
        for doc in docs:
            data = doc.to_dict()                            # convert to dict
            users.append(data)                              # add dict to list
        return response(
            "success", "Retrieved all users",
            {"count": len(users), "users": users}
        )
    except Exception as e:
        return error("error", str(e))

@user_bp.route('<string:user_id>', methods=['GET'])
def get_user(user_id):
    try:
        user_ref = db.collection('users').document(user_id) # reference doc
        doc = user_ref.get()                                # get doc
        if doc.exists:
            data = doc.to_dict()                            # convert to dict
            return response("success", "Retrieved user", data)
        else:
            return error("error", "User not found", 404)
    except Exception as e:
        return error("error", str(e), 500)

@user_bp.route('<string:user_id>', methods=['PUT'])
def update_user(user_id):
    try:
        user_ref = db.collection('users').document(user_id) # reference doc
        user_ref.update(request.json)                       # update doc
        user = user_ref.get().to_dict()                     # get + convert to dict
        return response("success", "User updated", user)
    except Exception as e:
        return error("error", str(e), 500)

@user_bp.route('<string:user_id>', methods=['DELETE'])
def delete_user(user_id):
    try:
        user_ref = db.collection('users').document(user_id) # reference document
        user = user_ref.get().to_dict()                     # convert document to python dictionary
        user_ref.delete()                                   # delete document
        return response("success", "User deleted", user)
    except Exception as e:
        return error("error", str(e), 500)