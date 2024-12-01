import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; 
import Book from "./Book.jsx";
import "./style.css";

function BookList() {
  const [searchText, setSearchText] = useState("");
  const books = useSelector((state) => state.books.books); 
  const [filteredBooks, setFilteredBooks] = useState(books); 
  const [originalBooks, setOriginalBooks] = useState(books); 

  const handleSearch = () => {
    if (!searchText.trim()) {
      setFilteredBooks(originalBooks);
    } else {
      const lowerCaseSearchText = searchText.toLowerCase();
      setFilteredBooks(
        originalBooks.filter(
          (book) =>
            book.title.toLowerCase().includes(lowerCaseSearchText) ||
            book.author.toLowerCase().includes(lowerCaseSearchText)
        )
      );
    }
  };

  useEffect(() => {
    setOriginalBooks(books);
    setFilteredBooks(books);
  }, [books]); 

  return (
    <>
      <div className="search">
        <h2>Search Books</h2>
        <div>
          <input
            type="text"
            className="search-input"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            placeholder="Search by title or author"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="bookList">
        {filteredBooks.length === 0 ? (
          <p>No books found</p>
        ) : (
          filteredBooks.map((book) => (
            <Link to={`/Book/${book.id}`} key={book.id}>
              <Book bookDetails={book} />
            </Link>
          ))
        )}
      </div>
    </>
  );
}

export default BookList;
