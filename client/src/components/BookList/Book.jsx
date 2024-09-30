// components/BookList/Book.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";

  const handleAdd = ((book) => {
    console.log("clicked add")
    //destructure book here?
  
    const title = book.title;
    console.log(title);

    console.log("🚀 ~ handleAdd ~ book:", book)
  
    // Do magic POST call here to CREATE new book to db tables
    // This is where we add the book to the library.
    // This post call always fails, and never populates the body correctly.
    // I don't know why.

    console.log(book.title)
    fetch(`http://127.0.0.1:5555/addbook`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          title: book.title,
          author: book.author,
          cover_id: book.cover_id,
          cover_img: book.cover_img,
          subjects: book.subjects,
          subject_places: book.subject_places, 
          subject_times: book.subject_times,
          edition_count: book.edition_count,
          first_publish_year: book.first_publish_year,
          olid: book.olid,
          average_rating: "",
          description: book.description,
          genre: "",
      }),
      
    })
      .then((r) => r.json())
      // Do something with response here?
  });



const Book = (book) => {




  console.log(book.title)
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
          {/* <span>{book.author.join(", ")}</span> */}
          {/* Again, it really doesn't like this join function At. All. causes runtime errors  */}
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

        <div className='book-add-button'>
            <button type='button' className='flex flex-c' onClick={(book) => (handleAdd(book))}>CLICK HERE TO ADD BOOK TO YOUR LIBRARY </button>
              {/* this button took forever to get working, had to send it an arrow function because function was invoked not passed */}
        </div>

      </div>
    </div>
  )
}

export default Book