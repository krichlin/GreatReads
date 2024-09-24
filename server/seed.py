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
        User.query.delete()

        # Seed Some Sample Books 

        books = [
            Book(
                author='Arthur Conan Doyle',
                cover_id=8231444,
                cover_img="https://covers.openlibrary.org/b/id/8231444-L.jpg",
                edition_count=745,
                first_publish_year=1900,
                olid="OL262460W",
                title= "The Lost World"
            ),

            Book(
                title= "Alice's Adventures in Wonderland",
                author= "Lewis Carroll",
                cover_id= 10527843,
                cover_img="https://covers.openlibrary.org/b/id/10527843-L.jpg",
                edition_count=3559,
                first_publish_year=1865,
                olid="OL138052W"
            ),
            Book(
                description="Turner, corporate mercenary, wakes in a reconstructed body, a beautiful woman by his side. Then Hosaka Corporation reactivates him for a mission more dangerous than the one he's recovering from: Maas-Neotek's chief of R&D is defecting. Turner is the one assigned to get him out intact, along with the biochip he's perfected. But this proves to be of supreme interest to certain other parties--some of whom aren't remotely human.\r\n\r\nBobby Newmark is entirely human: a rustbelt data-hustler totally unprepared for what comes his way when the defection triggers war in cyberspace. With voodoo on the Net and a price on his head, Newmark thinks he's only trying to get out alive.\r\n\r\nThe second novel of William Gibson's Sprawl trilogy, *Count Zero* is a stylish, streetsmart, frighteningly probable parable of the future and sequel to Neuromancer.",
                title="Count Zero",
                author='William Gibson',
                cover_id= 284322,
                cover_img="https://covers.openlibrary.org/b/id/284322-L.jpg",
                edition_count= 29,
                first_publish_year="1986",
                olid="OL27256W",
            ),
        ]
        
        # Populate Books to database
        print("Seeding Books")
        db.session.add_all(books)

        # Make Some Fake Users

        # users = [
        #     User(
        #         username='HarryPotter',
        #         email='HarryPotter@hogworts.edu',
        #         bio='Hello, I am Harry Potter.  Pleased to meet you.',
        #         f_name='Harry',
        #         l_name='Potter',
        #         _password_hash="password123!",
        #         image_url='https://static.wikia.nocookie.net/neoencyclopedia/images/4/44/HarryPotter5poster.jpg'
        #     ),
        #     User(
        #         username='HermioneGranger',
        #         email='HermioneGranger@hogworts.edu',
        #         bio='I am Hermione Grainger.  I like books about magic.',
        #         f_name='Hermione',
        #         l_name='Granger',
        #         _password_hash="password321!",
        #         image_url='https://i0.wp.com/the-art-of-autism.com/wp-content/uploads/2022/12/Hermione-Granger.jpg'
        #     ),
        #     User(
        #         username='AlbusDumbledore',
        #         email='Headmaster@hogworts.edu',
        #         bio='I am the Headmaster of Hogworts School of Witchcraft and Wizardry.',
        #         f_name='Albus',
        #         l_name='Dumbledore',
        #         _password_hash='password456!',
        #         image_url='https://static.wikia.nocookie.net/100gamesvictorfanficstories/images/a/ac/Albus_Dumbledore.jpg'
        #     ),
            # User(
            #     username='krichlin',
            #     email='krichlin@gmail.com',
            #     bio="Hi I'm Ken I'm into Reading and Magic!",
            #     f_name='Ken',
            #     l_name='Richlin',
            #     _password_hash='Obliter8!',
            #     image_url='https://media.licdn.com/dms/image/C5603AQH6PkKUrbzJ4w/profile-displayphoto-shrink_200_200/0/1625325706900?e=2147483647&v=beta&t=pdWFc6dtEy_QW5S8cyGmER2jLIm-tiOp7R9u2HZl38E'
            # ),
        ]

        # print("Seeding Fake Users")
        # db.session.add_all(users)

        # # make sure users have unique usernames
        # users = []
        # usernames = []

        # for i in range(20):
        #     username = fake.first_name()
        #     while username in usernames:
        #         username = fake.first_name()
        #     usernames.append(username)

        #     user = User(
        #         username=username,
        #         bio=fake.paragraph(nb_sentences=3),
        #         image_url=fake.url(), 
        #         email = fake.email() )
        #     # user.password_hash = user.username + 'password'
        #     user.password = 'password'
        #     users.append(user)

        # db.session.add_all(users)

        db.session.commit()