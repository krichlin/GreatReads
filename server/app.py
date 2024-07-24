#!/usr/bin/env python3

# server/app.py

# Standard library imports

# Remote library imports
from flask import Flask, request, jsonify, session, make_response
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
    return 'Welcome to the GreatReads Server!'

@app.route('/firstbook')
def firstbook():
    book = Book.query.first()
    book_dict = book.to_dict()
    return make_response(book_dict, 200)

# @app.route('/allbooks')
# def allbooks():
#     books = []
#     for book in Book.query.all():
#         book_dict = {
#             "title": book.title,
#             "author": book.author,
#             "cover_id": book.cover_id,
#             "cover_img": book.cover_img,
#             "description": book.description,
#             "edition_count": book.edition_count,
#             "first_publish_year": book.first_publish_year,
#             "genre": book.genre,
#             "olid": book.olid,
#             "reviews": book.reviews,
#             "subject_places": book.subject_places,
#             "subject_times": book.subject_times,
#             "subjects": book.subjects,
#         }
#         books.append(book_dict)
    
#     response = make_response(
#         jsonify(books), 200
#     )

#     return response

@app.route('/books/<int:id>')
def book_by_id(id):
    book = Book.query.filter(Book.id == id).first()
    if book:
        body =  book.to_dict()
        status = 200
    else:
        body = {'message': f'Sorry, Book {id} not found.'}
        status = 404
    return make_response(body, status)

class AllBooks(Resource):
    def get(self):
        response_dict_list = [n.to_dict() for n in Book.query.all()] 
        response = make_response(
            response_dict_list,
            200,
        )
        return response

api.add_resource(AllBooks, '/allbooks')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

