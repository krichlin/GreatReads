# server/models.py

# package imports
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property

# local imports
from config import db, bcrypt

# Models go here!

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = ('-books.user', '-reviews.user','-_password_hash',)

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    _password_hash = db.Column(db.String(200), nullable=False)
    image_url = db.Column(db.String(500), nullable=True)
    bio = db.Column(db.String(500), nullable=True)

    libraries = db.relationship('Library', backref='user_library', lazy=True)
    reviews = db.relationship('Review', backref='user_review', lazy=True)

    @validates('username')
    def validate_username(self, key, username):
        if len(username) < 5:
            raise ValueError('Username must be at least 5 characters long.')

    @hybrid_property
    def password_hash(self):
        raise AttributeError('Password hashes may not be viewed.')

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))

    def __repr__(self):
        return f'<User {self.username}>'

class Book(db.Model, SerializerMixin):
    __tablename__ = 'books'

    id = db.Column(db.Integer, primary_key=True)
    author = db.Column(db.String(30), nullable=False)
    title = db.Column(db.String(50), nullable=False)
    cover_id = db.Column(db.Integer, nullable=True)
    cover_img = db.Column(db.String(50), nullable=True)
    subjects = db.Column(db.String(500), nullable=True)
    subject_places = db.Column(db.String(100), nullable=True)
    subject_times = db.Column(db.String(100), nullable=True)
    edition_count = db.Column(db.Integer, nullable=True)
    first_publish_year = db.Column(db.String(4), nullable=True)
    olid = db.Column(db.String(16), nullable=True)
    average_rating = db.Column(db.Integer, nullable=True)
    description = db.Column(db.String(500), nullable=True)
    genre = db.Column(db.String(20), nullable = True)

    bookgenres = db.relationship('Bookgenre', backref='book', lazy=True)
    reviews = db.relationship('Review', backref='user', lazy=True)

    serialize_rules = ('-user',)

    def __repr__(self):
        return f'<Book {self.type}'

class Bookgenre(db.Model, SerializerMixin):
    __tablename__ = 'bookgenres'

    id = db.Column(db.Integer, primary_key=True)
    book_id = db.Column(db.Integer, db.ForeignKey('books.id'), nullable=False)
    genre_id = db.Column(db.Integer, db.ForeignKey('genres.id'), nullable=False)

    serialize_rules = ('-user',)

    def __repr__(self):
        return f'<Bookgenre {self}>'
    
class Genre(db.Model, SerializerMixin):
    __tablename__ = 'genres'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)

    serialize_rules = ('-user',)

    def __repr__(self):
        return f'<Genre {self.name}>'

class Library(db.Model, SerializerMixin):
    __tablename__ = 'libraries'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey('books.id'), nullable=False)

    serialize_rules = ('-user', '-book',)

    def __repr__(self):
        return f'<Library {self}>'

class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    body = db.Column(db.String(1000), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey('books.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    rating = db.Column(db.Integer)

    serialize_rules = ('-user', '-book',)

    def __repr__(self):
        return f'<Review {self.title}>'