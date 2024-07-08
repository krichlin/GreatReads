#!/usr/bin/env python3

# server/app.py

# Standard library imports

# Remote library imports
from flask import Flask, request, jsonify, session
from flask_restful import Resource
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
# from flask_jwt_extended import create_access_token, jwt_required
# from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy.exc import IntegrityError

# Add your model imports
from models import User, Book, Library, Bookgenre, Genre, Review

# Local imports
from config import app, db, api

# Routes Go Here

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

if __name__ == '__main__':
    app.run(port=5555, debug=True)

