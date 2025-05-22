from routes import post_routes, user_routes, auth_routes
from flask import Flask
from extensions import Base, engine, init_extensions

def create_app():
    app = Flask(__name__)
    
    # Register blueprints
    app.register_blueprint(post_routes.post_bp)
    app.register_blueprint(user_routes.user_bp)
    app.register_blueprint(auth_routes.auth_bp)
    
    init_extensions(app)
    
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)