import firebase_admin
from firebase_admin import credentials, firestore

# load credentials
cred = credentials.Certificate("../../firebaes_config.json")

# initialize firebase
firebase_admin.initialize_app(cred)

# get db instance
db = firestore.client()