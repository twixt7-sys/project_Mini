from routes.post_routes import post_bp
from flask import Flask
from extensions import Base, engine

def create_app():
    app = Flask(__name__)
    
    # Register blueprints
    app.register_blueprint(post_bp)
    
    # Initialize database
    Base.metadata.create_all(engine)
    
    return app

