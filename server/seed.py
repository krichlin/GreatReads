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

        # Reset All Tables in Database, if they exist
        Book.query.delete()
        User.query.delete()   
        
        # seed file no longer deletes the user table.  Oops

        # Seed Some Sample Books 

        books = [
            Book(
                author='Arthur Conan Doyle',
                cover_id=8231444,
                cover_img="https://covers.openlibrary.org/b/id/8231444-L.jpg",
                edition_count=745,
                first_publish_year=1900,
                olid="OL262460W",
                title= "The Lost World",
                subjects="Adventure stories, Atlantis, Dinosaurs, Discovery and exploration, English Detective and mystery stories, Fiction, Fiction in French, Prehistoric peoples, Professor Challenger (Fictitious character), Scientific expeditions, Translations into Czech, Translations into Russian, Science fiction, Fantasy, Discoveries in geography, Children's fiction, Dinosaurs, fiction, Fiction, fantasy, general, Fiction, action & adventure, Challenger, professor (fictitious character), fiction, South america, fiction, Books and reading, Public libraries, Activity programs, Criticism and interpretation, Reading promotion, Young adults' libraries, Westminster Libraries and Archives, Youth, Lost world (Doyle, Arthur Conan), Children, British and irish fiction (fictional works by one author), Fiction, science fiction, general, Scientists, fiction, English literature, Large type books, Fiction, historical, general, Romans, nouvelles, Dinosaures, Challenger, Professor (Personaje literario), Novela, Pueblos prehistóricos, Dinosaurios, Adventure and adventurers, fiction, Fiction, general, Challenger, Professor (Fictitious character) -- Fiction, Fantasy fiction, South America -- Fiction, Prehistoric peoples -- Fiction, Dinosaurs -- Fiction, Literature and fiction, action and adventure, New York Times reviewed, Prehistoric peoples, fiction, Scientific expeditions, fiction, South America",
                subject_times="No subject times found",
                subject_places="South America, England, London",
                description="Journalist Ed Malone is looking for an adventure, …ungle, to a lost world where dinosaurs roam free."
            ),

            Book(
                title= "Alice's Adventures in Wonderland",
                author= "Lewis Carroll",
                cover_id= 10527843,
                cover_img="https://covers.openlibrary.org/b/id/10527843-L.jpg",
                edition_count=3559,
                first_publish_year=1865,
                olid="OL138052W",
                subjects="Alice (fictitious character : carroll), fiction, British and irish fiction (fictional works by one author), Fiction, fantasy, general, JUVENILE FICTION, classics, Fantasy & Magic, Imagination & Play, adventure and adventurers, adventure and adventurers, fiction, adventure stories, adventure travel, animals, anthropomorphism, artists' illustrated books, books and reading, child and youth fiction, children, children's fiction, children's literature, children's literature, english, children's stories, children's stories, english, classic literature, coloring books, croquet, cuentos infantiles ingleses, curiosidad, curiosidad en los niños, curiosity, curiosity in children, english, english adventure stories, english fantastic fiction, english fantasy fiction, english fantasy literature, english language, english literature, english nonsense verses, fairy tales, fantasy, fantasy fiction, fantasy in fiction, fantasy magic, fantasía, ficción juvenil, fiction, friendship, girls, girls, fiction, hookahs, humor, humorous stories, illustrations, imaginary places, juvenile literature, legends, literary nonsense, logic, lugares imaginarios, mythical animals, niñas, nonsense verses, novela, novela fantástica, novela juvenil, open library staff picks, picture books, playing cards, rabbits, readers, reading materials, short novel, tea, texts, Alice (Fictitious character : Carroll), English language, textbooks for foreign speakers, Fantastique, Enfants, Affirmation de soi, Spanish language materials, Alicia (Personaje literario : Carroll), Spanish language, nyt:chapter-books=2010-02-21, New York Times bestseller, Literatura infanto-juvenil, Literatura inglesa, Carroll, lewis, 1832-1898, Children's literature, history and criticism, Children, books and reading, Crocheting, Fiction, general, Fantasy fiction, history and criticism, Toy and movable books, Imagination, Textbooks for foreign speakers, Readers for new literates, High interest-low vocabulary books, Science fiction, CUENTO INFANTIL INGLES, History and criticism, Translations into Irish, Irish literature, Swahili language, Accessible book, Protected DAISY, Internet Archive Wishlist, Ficc ʹa o (ge nero), Shi jie wen xue, Xiao shuo, Fantasi a, Tong hua, Suo xie, Shao er du wu, Pin yin du wu, Children's stories, Chinese, Chinese language, Translations into Polish, Ying yu, Yu yan du wu, Large type books, Decision making, Juvenile Wit and humor, Conduct of life, Illusion (Philosophy), Innocence (Psychology), Dreams, Courts and courtiers, Theft, Courts, Curiosité, Romans, nouvelles, etc. pour la jeunesse, Prise de décision, Humour pour la jeunesse, Morale pratique, Lieux imaginaires, Illusion (Philosophie), Rêves, Cartes à jouer, Cours et courtisans, Croquet (Jeu), Vol (Droit), Tribunaux, Histoires pour enfants anglaises, Literature, collections, Fiction, short stories (single author), Contes de fées, English fiction, Translations into Ladino, Nonsense literature, Fantasmes, Dinosaurier, Utdöda djur, Urtidsdjur, Forntiden, Geologi, Evolution, Jorden, Fantastiske fortællinger, Translations into Yiddish, Criticism and interpretation, History, Alice's adventures in Wonderland (Carroll, Lewis), Alice in Wonderland;, North, Rural-urban migration, Russian language",
                subject_times="Jin dai",
                subject_places="Wonderland, Ying guo, INGLATERRA",
                description=""
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
                subjects="Long Now Manual for Civilization, Fiction, mystery & detective, general, American literature, Fiction, science fiction, general, Sprawl Trilogy",
                subject_times="",
                subject_places="",
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