from flask import jsonify

def response(status: str, message: str, data: dict = None, status_code: int = 200, token: str = None) -> jsonify:
    return jsonify({
        "status": status,
        "message": message,
        "data": data,
        "token": token
    }), status_code

def error(status: str, message: str, status_code: int = 500) -> jsonify:
    return jsonify({
        "status": status,
        "message": message
    }), status_code