# Welcome to GreatReads!

GreatReads is a web application inspired by the popular site [GoodReads](http://www.goodreads.com).  

## Table of Contents

## Setup Instructions

### Front End
- In a new terminal window, enter the client directory and type `npm install` to install necessary packages.
- To start the JSON server, enter /client directory and type `json-server --watch db.json --port 4000`
- check `localhost:4000/users` for JSON data
- Launch Greatreads by entering the client directoryGreatReads by typing `npm start` 

### Back End
- To initialize the environment, enter the server directory, and type `pipenv install && pipenv shell`
- Enable bcrypt by typing `pip install flask-bcrypt` (May not be necessary if requirements set correctly?)
- Don't forget to `import validators` (May not be necessary if requirements set correctly?)
- Upgrade the db by typing `flask db upgrade head`
- Populate the db with some test data by running `python seed.py` (maybe move this to config script to skip this step when we deploy?)
- Start the server by typing `python server/app.py` (change this after deployment)
- For deployment code only, don't forget to run `pip install python-dotenv` to set up the enviornment.

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
* React Icons

### Backend
* SQLAlchemy
* Flask RESTful
* 

