# Welcome to GreatReads!

## Table of Contents

## Setup Instructions

### Front End
- In a new terminal window, enter the client directory and type `npm install` to install necessary packages.
- To start the JSON server, enter /client directory and type `json-server --watch db.json --port 4000`
- check `localhost:4000/users` for JSON data
- Launch Greatreads by entering the client directoryGreatReads by typing `npm start` 

### Back End
- To initialize the environment, type `pipenv install && pipenv shell`
- Enable bcrypt by typing `pip install flask-bcrypt` (Maybe?)
- Don't forget to `import validators` (Maybe?)
- You should populate the database with some test data by running `python server/seed.py` (maybe do this in config to skip this step when we deploy?)
- Start the server by typing `python server/app.py` (change this after deployment)
- For deployment purposes only, don't forget to run `pip install python-dotenv` to set up the enviornment.


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
* React Icons
