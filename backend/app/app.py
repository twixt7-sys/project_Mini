from routes.post_routes import post_bp
from routes.user_routes import user_bp
from flask import Flask
from extensions import Base, engine, init_extensions

def create_app():
    app = Flask(__name__)
    
    # Register blueprints
    app.register_blueprint(post_bp)
    app.register_blueprint(user_bp)
    
    init_extensions(app)
    
    return app

