// context..js

// This file is home to the global context, and where we do API call to open library

import React, {useState, useContext, useEffect} from 'react';
import { useCallback } from 'react';
const URL = "http://openlibrary.org/search.json?title=";  // this is the root URL for the API search

const AppContext = React.createContext({
    user:null
});

const AppProvider = ({children}) => {

    const [user, setUser] = useState();

    const [searchTerm, setSearchTerm] = useState("the lost world");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");
    console.log(user);
    console.log(setUser);

    const fetchBooks = useCallback(async() => {
        setLoading(true);
        try{
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            const {docs} = data;
            // console.log(docs);

            if(docs){         
                // grab the first 20 books and destructure them
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    const {key, author_name, cover_i, edition_count, first_publish_year, title} = bookSingle;

                    // return an object that only keeps the parts we care about
                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title
                    }
                });

                setBooks(newBooks);

                if(newBooks.length > 1){
                    setResultTitle("Your Search Result");
                } else {
                    setResultTitle("No Search Result Found!")
                }
            } else {
                setBooks([]);
                setResultTitle("No Search Result Found!");
            }
            setLoading(false);
        } catch(error){
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider value = {{
            loading, books, setSearchTerm, resultTitle, setResultTitle,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};