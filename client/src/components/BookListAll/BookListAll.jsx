// components/BookListAll/BookListAll.jsx

import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context.';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookListAll.css";

// You can grab the covers from this link:
//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookListAll = () => {
    // In this method, we do a GET request from the backend at
    // localhost:5555/showall
    // Save the results into an array of JSON objects
    
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // fetch("http://127.0.0.1:5555/allbooks")
        fetch("/allbooks")
        .then((r) => r.json())
        .then((books) => setBooks(books))
    }, []);

    // Return some JSX that displays this data in a format that looks nice
    
    console.log(books)
    return (
        <section className='booklist'>
            <div className='container'>
                <div className='section-title'>
                    <h2>resutTitle</h2>
                </div>
                <div className='booklist-content grid'>
                    {
                    books.slice(0, 30).map((item, index) => {
                        console.log(item);
                        return (
                            <Book key = {index} {...item} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

//   const {books, loading, resultTitle} = useGlobalContext();
//   const booksWithCovers = books.map((singleBook) => {
//     return {
//       ...singleBook,
//       // removing /works/ to get only id
//       id: (singleBook.id).replace("/works/", ""),
//       cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
//    }
//  });
// console.log(booksWithCovers)

//   if(loading) return <Loading />;

//   return (
//     <section className='booklist'>
//       <div className='container'>
//         <div className='section-title'>
//           <h2>{resultTitle}</h2>
//         </div>
//         <div className='booklist-content grid'>
//           {
//             booksWithCovers.slice(0, 30).map((item, index) => {
//               console.log(item);
//               return (
//                 <Book key = {index} {...item} />
//               )
//             })
//           }
//         </div>
//       </div>
//     </section>
//   )
// }

export default BookListAll;