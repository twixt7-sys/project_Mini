from flask import jsonify

def response(status: str, message: str, data: dict = None, token: str = None) -> jsonify:
    return jsonify({
        "status": status,
        "message": message,
        "data": data,
        "token": token
    })