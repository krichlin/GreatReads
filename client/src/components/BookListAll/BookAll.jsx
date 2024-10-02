// components/BookListAll/BookAll.jsx
// Formerly BookCardAll.js

import React from 'react';
import { Link } from 'react-router-dom';
import "./BookListAll.css";

  const handleRemove = ((book) => {
    console.log("clicked delete book")
    const booktoremove = book.olid;
    console.log(booktoremove);

    fetch(`http://127.0.0.1:8000/delete_book/${book.id}`,{
      // Maybe this will work better with book.olid or booktoremove?
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      // No body for delete fetch
    })
      .then((r) => r.json())
      // do something with response here?
  });

const BookAll = (book) => {
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src = {book.cover_img} alt = "cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to = {`/book/${book.id}`} {...book}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          {/* <span>{book.author.join(", ")}</span>    */}
          {/*  This join causes a lot of runtime errors for some reason so we remove it - KDR */}
          <span>{book.author}</span>

        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>

        <div className='book-delete-button'>
            <button type='button' className='flex flex-c' onClick={() => (handleRemove(book))}>CLICK HERE TO REMOVE BOOK FROM LIBRARY </button>
              {/* this button took forever to get working, had to send it an arrow function because function was invoked not passed */}
        </div>

      </div>
    </div>
  )
}

export default BookAll