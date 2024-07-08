// /components/BookList/BookList.jsx

import { useGlobalContext } from '../../context';
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";

//https://covers.openlibrary.org/b/id/240727-S.jpg

import React from 'react'
import Header from '../Header/Header'

const BookList = () => {
    const {books, loading, resultTitle} = useGlobalContext();
    const booksWithCovers = books.map((singleBook) => {
        return {
            ... singleBook,
            // removing /works/ to get only id
            id: (singleBook.id).replace("/works/", ""),
            cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
        }
    });

    if(loading) return <Loading />;

    return (
        <main>
          {/* <Navbar /> */}
          {/* <Header /> */}
          <div>BookList</div>
        </main>
      );
};

export default BookList