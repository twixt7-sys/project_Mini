from flask import Flask
import models as m

app = Flask(__name__)


@app.route('/')
def home():
    return 'Flask is running!'

@app.route('/pingmodels')
def hello():
    s: str = []
    for model in m.models:
        s += f'{model.__name__} is loaded\n'
    return s

if __name__ == '__main__':
    app.run(debug=True)

