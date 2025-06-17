from flask import Flask, jsonify
from app.routes.user_routes import user_bp
from app.utils.auth import auth_bp

app = Flask(__name__)

def initialize():
    app.register_blueprint(user_bp)
    app.register_blueprint(auth_bp)

@app.route('/')
def index():
    return jsonify({
        "status": "ok",
        "message": "API is running.",
        "endpoints": {
            "auth": {
                "POST": "api/auth/login",
                "POST": "api/auth/register",
                "POST": "api/auth/logout"
            },
            "users": {
                "GET": "api/users",
                "PUT": "api/users/<id>",
                "DELETE": "api/users/<id>"
            },
            "posts": {
                "GET": "api/posts",
                "POST": "api/posts",
                "PUT": "api/posts/<id>",
                "DELETE": "api/posts/<id>"
            },
            "comments": {
                "GET": "api/comments",
                "POST": "api/comments",
                "PUT": "api/comments/<id>",
                "DELETE": "api/comments/<id>"
            },
            "likes": {
                "GET": "api/likes",
                "POST": "api/likes",
                "PUT": "api/likes/<id>",
                "DELETE": "api/likes/<id>"
            },
            "follows": {
                "GET": "api/follows",
                "POST": "api/follows",
                "PUT": "api/follows/<id>",
                "DELETE": "api/follows/<id>"
            }
        }
    }
    )
