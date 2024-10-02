# server/config.py

# Standard library imports

# Remote library imports
import os
from flask import Flask
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from dotenv import load_dotenv


# Local imports

load_dotenv()

# Instantiate app, set attributes

app = Flask(
    __name__,
    static_url_path='',
    static_folder='../client/build',
    template_folder='/..client/build')

try:
    app.secret_key = os.environ.get('SECRET_KEY')
except Exception:
    print("secret key not found")

# app = Flask(__name__)
app.secret_key = b'p\x92r/o\xef6k\xe3\x82\xab\xf8Pb\xf3S'

# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get(DATABASE_URI)
app.config['SQLALCHEMY_DATABASE_URI']= 'postgresql://my_database_x67z_user:Oj8p0pceBdStBmBfcDh7nRkvMa2lLpdl@dpg-crupioij1k6c73b68ku0-a.ohio-postgres.render.com/my_database_x67z'
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