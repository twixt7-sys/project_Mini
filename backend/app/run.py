from flask import request, jsonify
from app import create_app

app = create_app()

@app.route('/')
def home():
	return jsonify({
		"endpoints": {"posts": "/posts", "users": "/users"},
		"message": "App served. Welcome to the API. [testing live changes]"
	})

if __name__ == "__main__":
	app.run(debug=True, host='0.0.0.0', port=5000)
