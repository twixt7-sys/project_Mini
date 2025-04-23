from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager

from models import User, Post
from models import Base
from sqlalchemy import create_engine

engine = create_engine("mysql://root:GxACqgXYAoiDXMhXLXVbzphTKFgrxCEP@crossover.proxy.rlwy.net:49332/railway")
Base.metadata.create_all(engine)

app = Flask(__name__)
CORS(app)
app.config['JWT_SECRET_KEY'] = 'your_secret_key'  # Change this in production
jwt = JWTManager(app)

@app.route('/')
def home():
    return 'Flask is running!'

if __name__ == '__main__':
    app.run(debug=True)

