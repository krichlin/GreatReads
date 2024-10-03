# server/config.py

# Remote library imports
from flask import Flask
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData

# Local imports

# Instantiate app, set attributes
app = Flask(__name__)
app.secret_key = b'p\x92r/o\xef6k\xe3\x82\xab\xf8Pb\xf3S'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

# Define metadata, instantiate db
metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})
db = SQLAlchemy(metadata=metadata)
migrate = Migrate(app, db, render_as_batch=True)
db.init_app(app)

# Instantiate REST API
api = Api(app)

bcrypt = Bcrypt(app)

# Instantiate CORS
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route("/")
def helloWorld():
    return ('<h1>Welcome to the GreatReads Project Server</h1><p>Good things to ask for might be:</p><p>signup login logout allbooks user addbook books check_session</p>');

@app.route("/api/v1/users")
def list_users():
  return "user example"