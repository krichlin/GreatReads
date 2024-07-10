#! /usr/bin/env python3
# server/seed.py

# Standard library imports
from flask import Flask
from flask import json
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, Book

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!

        # Reset All Tables in Database, if they exist

        Book.query.delete()

        # Seed Some Sample Books 

        books = [
            Book(
                title="Neuromancer", 

            ),
            Book(
                title='The lost world',
                author= 'Randall Jarrell',
                cover_id= 7931774,
                cover_img="https://covers.openlibrary.org/b/id/7931774-L.jpg",
                edition_count= 5,
                first_publish_year=1965,
            ),
            Book(
                title= "Alice's Adventures in Wonderland",
                author= Lewis Carroll,
                cover_id= 10527843,
                cover_img="https://covers.openlibrary.org/b/id/10527843-L.jpg",
                edition_count=3559,
                first_publish_year=1865,
                olid="OL138052W"

            ),

edition_count
: 
3559
first_publish_year
: 
1865
id
: 
"OL138052W"
title
: 


            ),
            Book(),
            Book(),
            Book(),
            Book(),
        ]
        

        # for i in range(20):

        
        

        # User.query.delete()

        # Make sure users have unique usernames

        # users = []
        # usernames = []
        # for i in range(20):
        #     username = fake.first_name()
        #     while username in usernames:
        #         username = fake.first_name()
        #     usernames.append(username)
        #     email = fake.email()
        #     user = User(
        #         username = username,
        #         bio = fake.paragraph(nb_sentences=3),
        #         image_url=fake.url(),
        #         email = email,
        #     )
        #     user.password_hash = user.username + 'password'
        #     users.append(user)
        # # Populate Users to database
        # print("Seeding Users")
        # db.session.add_all(users)
        # db.session.commit()