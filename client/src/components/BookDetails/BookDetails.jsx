// components/BookDetails/BookDetails.jsx

import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookDetails.css";
import {FaArrowLeft} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const URL = "https://openlibrary.org/works/";

const handleAdd = ((book) => {
  console.log("clicked add")
    // Do magic POST call here to CREATE new book to db tables
    // This is where we add the book to the library.
});

const handleRemove = ((book) => {
  console.log("clicked remove")
    // Do magic DELETE here to REMOVE book to db
    // This is where we remove a book from the database.
});

const BookDetails = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails(){
      try{
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        // console.log(data);

        if(data){
          // console.log(data);
          const {description, title, covers, subject_places, subject_times, subjects} = data;
          // destructure data into bits
          // create a newBook object with those bits, but also includes the cover URL
          const newBook = {
            description: description ? description.value : "No description found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times : subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found",
            id: id
          };
          setBook(newBook);
          console.log("🚀 ~ getBookDetails ~ newBook:", newBook)
           // What on earth does this thing even look liek?
        } else {
          setBook(null);
        }
         
        setLoading(false);
      } catch(error){
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();  // ????
  }, [id]);  

  if(loading) return <Loading />;

  return (
    <section className='book-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
          <FaArrowLeft size = {22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src = {book?.cover_img} alt = "cover img" />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{book?.title}</span>
            </div>
            <div className='book-details-item description'>
              <span>{book?.description}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Open Library OLID: </span>
              <span className='text-italic'>{id}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Subject Places: </span>
              <span className='text-italic'>{book?.subject_places}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Subject Times: </span>
              <span className='text-italic'>{book?.subject_times}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Subjects: </span>
              <span>{book?.subjects}</span>
            </div>
            <div className='book-add-button'>
                <button type='button' className='flex flex-c' onClick={(book) => (handleAdd())}>CLICK HERE TO ADD BOOK TO YOUR LIBRARY </button>
                {/* this button took forever to get working, had to send it an arrow function because function was invoked not passed */}
            </div>
            <div className='book-remove-button'>
                <button type='button' className='flex flex-c' onClick={(book) => (handleRemove())}>CLICK HERE TO REMOVE BOOK FROM YOUR LIBRARY </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



export default BookDetails