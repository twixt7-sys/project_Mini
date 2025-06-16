import firebase_admin
from firebase_admin import credentials, firestore

firebase_app, db = None, None

def init_firebase():
    global firebase_app, db
    if not firebase_admin._apps:
        # load credentials
        cred = credentials.Certificate("../../firebaes_config.json")
        # initialize firebase
        firebase_admin.initialize_app(cred)
        # get db instance
        db = firestore.client()
