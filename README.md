# Welcome to GreatReads!

GreatReads is a web application inspired by the popular site [GoodReads](http://www.goodreads.com).  GreatReads leverages the [Open Library API](http://openlibrary.org/developers/api) to search for new books by Title, Author, or IBSN.  Once you find a book, add it to your library of favorites.  Manage your library by adding new books or removing books you don't like anymore.  Read and leave Reviews and Ratings for books.  Get started by making an account and logging in.

## Table of Contents

## Setup Instructions

### Back End
- To initialize the environment, enter the server directory, and type `pipenv install && pipenv shell`
- Enable bcrypt by typing `pip install flask-bcrypt` (May not be necessary if requirements set correctly?)
- Don't forget to `import validators` (May not be necessary if requirements set correctly?)
- Upgrade the db by typing `flask db upgrade head`
- Populate the db with some test data by running `python seed.py` (maybe move this to config script to skip this step when we deploy?)
- For deployment code only, don't forget to run `pip install python-dotenv` to set up the enviornment.
- Start the server by typing `python server/app.py` (change this after deployment)

### Front End
- In a new terminal window, enter the client directory and type `npm install` to install necessary packages.
- To start the JSON server, enter /client directory and type `json-server --watch db.json --port 4000`
- check `localhost:4000/users` for JSON data
- To Launch, Open a new termainl window, enter the client directory and type `npm start` 

## Technologies Used

    * 📄 HTML5
    * 🌈 CSS3
    * 🟨 JavaScript
    * React
    * Python
    * Flask
    * SQLite

## API's Used

We use the [OpenLibrary API](http://openlibrary.org/developers/api).

## How it Works

magic

## Wireframe

graphics

## Packages Used

### Frontend
* React Router
* React Icons
* React Redux
* React Bootstrap
* Formik
* Yup

### Backend
* SQLAlchemy
* Flask RESTful
* Bcrypt