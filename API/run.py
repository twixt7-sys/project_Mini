from flask import jsonify
from app.app import create_app

app = create_app()

@app.route('/')
def index():
    return jsonify({
        "status": "ok",
        "message": "API is running.",
        "endpoints": {
            "auth": {
                "POST": "/auth/login",
                "POST": "/auth/register",
                "POST": "/auth/logout"
            },
            "users": {
                "GET": "/users",
                "POST": "/users",
                "PUT": "/users/<id>",
                "DELETE": "/users/<id>"
            },
            "posts": {
                "GET": "/posts",
                "POST": "/posts",
                "PUT": "/posts/<id>",
                "DELETE": "/posts/<id>"
            },
            "comments": {
                "GET": "/comments",
                "POST": "/comments",
                "PUT": "/comments/<id>",
                "DELETE": "/comments/<id>"
            },
            "likes": {
                "GET": "/likes",
                "POST": "/likes",
                "PUT": "/likes/<id>",
                "DELETE": "/likes/<id>"
            },
            "follows": {
                "GET": "/follows",
                "POST": "/follows",
                "PUT": "/follows/<id>",
                "DELETE": "/follows/<id>"
            }
        }
    }
    )

if __name__ == '__main__':
    app.run(debug=True)