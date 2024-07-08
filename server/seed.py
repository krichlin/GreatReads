#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!

        # Reset All Tables in Database
        # User.query.delete()

        # Make sure users have unique usernames
        users = []
        usernames = []
        for i in range(20):
            username = fake.first_name()
            while username in usernames:
                username = fake.first_name()
            usernames.append(username)
            email = fake.email()
            user = User(
                username = username,
                bio = fake.paragraph(nb_sentences=3),
                image_url=fake.url(),
                email = email,
            )
            user.password_hash = user.username + 'password'
            users.append(user)
        # Populate Users to database
        print("Seeding Users")
        db.session.add_all(users)
        db.session.commit()