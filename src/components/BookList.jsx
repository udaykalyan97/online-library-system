import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { dummyBookData } from "../utils/dummyBookData"; // Import dummy data directly
import Book from "./Book.jsx";
import "./style.css";
import userContext from "../utils/useContext.js";

function BookList() {
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(dummyBookData); // Initialize with dummyBookData
  const [originalBooks, setOriginalBooks] = useState(dummyBookData); // Initialize with dummyBookData

  // Context example (if used elsewhere)
  const { setUserName } = useContext(userContext);

  // Search handler
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
