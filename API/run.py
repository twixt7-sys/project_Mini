from app.app import app, initialize

initialize()

if __name__ == '__main__':
    app.run(debug=True)