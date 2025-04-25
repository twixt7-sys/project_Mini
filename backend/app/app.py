from app.routes.post_routes import post_bp
from flask import Flask
from extensions import models as m

def create_app():
    app = Flask(__name__)
    app.register_blueprint(post_bp)
    return app

app = create_app()

@app.route('/')
def home():
    return 'Flask is running!'

@app.route('/pingmodels')
def hello():
    result = []
    for s in m:
        if s:
            result.append(f"{s} is running!")
    return result.__str__() + "Models are running!"

if __name__ == '__main__':
    app.run(debug=True)

