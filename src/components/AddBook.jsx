import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../utils/booksSlice';  // Ensure correct import
import './style.css';

function AddBook() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [publicationYear, setPublicationYear] = useState('');
  const [author, setAuthor] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [genre, setGenre] = useState('');

  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure that title is not empty
    if (!title.trim()) {
      alert('Please enter a book title.');
      return;
    }

    // Create a book object (You can add more fields here like author, etc.)
    const newBook = {
      id: Date.now(),  // or any other unique ID logic
      title,
      description,
      publication_year: publicationYear,  // Use publication_year as the key
      cover_image: coverImage,  // Use cover_image as the key
      author,
    };

    // Dispatch the action to add the book
    dispatch(addBook(newBook));

    // Clear the title field after submission
    setTitle('');
    setDescription('');
    setAuthor('');
    setGenre('');
    setPublicationYear('');
    setCoverImage('');
  };

  return (
    <div className="add-book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="title">Book Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Update the title state
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)} // Update the description state
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author Name</label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Enter Author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)} // Update the author state
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="publication_year">Year of Publication</label>
          <input
            type="number"
            id="publication_year"
            name="publication_year"
            placeholder="Enter Year of Publication"
            value={publicationYear}
            onChange={(e) => setPublicationYear(e.target.value)} 
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cover_image">Cover Image URL</label>
          <input
            type="text"
            id="cover_image"
            name="cover_image"
            placeholder="Enter Cover Image URL"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)} 
            required
          />
        </div>

        <button className="submit-button" type="submit">Add Book</button>
      </form>

      {/* Display the list of books */}
      <div className="added-books">
        <h3>Newly Added Books</h3>
        {books.length > 0 ? (
          books.map((book, index) => (
            <div key={index} className="book-item">
              <img src={book.cover_image} alt="" height="200px" width="200px"/>
              <div>
                <h4>{book.title}</h4>
                <h4>{book.author}</h4>
                <h4>{book.publication_year}</h4>
                <h4>{book.description}</h4>
              </div>
            </div>
          ))
        ) : (
          <p>No books added yet.</p>
        )}
      </div>
    </div>
  );
}

export default AddBook;
