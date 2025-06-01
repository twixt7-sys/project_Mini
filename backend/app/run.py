from flask import request, jsonify
from extensions import SessionLocal
from app import create_app
from routes.post_routes import post_bp
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from routes.auth_routes import auth_bp

app = create_app()
CORS(app)

@app.route('/')
def home():
	return jsonify({
		"endpoints": {"posts": "/posts", "users": "/users"},
		"message": "App served. Welcome to the API. [testing live changes]"
	})

if __name__ == "__main__":
	app.run(debug=True, host='0.0.0.0', port=5000)
