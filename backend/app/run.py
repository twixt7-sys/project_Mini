from flask import Blueprint, request, jsonify
from extensions import SessionLocal

from app import create_app

from models import post as p
from models import user as u

from routes.post_routes import post_bp

from marshmallow import Schema, fields, ValidationError

app = create_app()

@app.route('/')
def home():
	return jsonify({"endpoints": {"posts": "/posts", "users": "/users"},
					"message": "App served. Welcome to the API.",})

if __name__ == '__main__':
	app.run(debug=True)
