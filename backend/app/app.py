from flask import Flask
from extensions import models as m

app = Flask(__name__)


@app.route('/')
def home():
    return 'Flask is running!'

@app.route('/pingmodels')
def hello():
    result = []
    for s in m:
        if s:
            result.append(f"{s} is running! \n ")
    return result.__str__() + "Models are running!"

if __name__ == '__main__':
    app.run(debug=True)

