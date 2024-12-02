import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../utils/booksSlice';  // Ensure correct import
import './style.css';
import { Link, useNavigate} from 'react-router-dom';
import BookList from './BookList';

function AddBook() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [publicationYear, setPublicationYear] = useState('');
  const [author, setAuthor] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    if (!title.trim()) {
      errors.title = 'Please enter a book title.';
    }

    if (!description.trim()) {
      errors.description = 'Please enter a description.';
    }

    if (!author.trim()) {
      errors.author = 'Please enter the author name.';
    }

    if (!publicationYear) {
      errors.publicationYear = 'Please enter the year of publication.';
    } else if (isNaN(publicationYear) || publicationYear > new Date().getFullYear()) {
      errors.publicationYear = 'Please enter a valid year 0 AD and the current year.';
    }

    if (!coverImage.trim()) {
      errors.coverImage = 'Please enter a cover image URL.';
    } else if (!/^https?:\/\//i.test(coverImage)) {
      errors.coverImage = 'Please enter a valid URL for the cover image.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    
    const newBook = {
      id: books.length + 1,  
      title,
      description,
      publication_year: publicationYear,  
      cover_image: coverImage,  
      author,
    };

    
    dispatch(addBook(newBook));

    navigate('/browse_books')
    
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
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          {errors.title && <p className="error">{errors.title}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="author">Author Name</label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Enter Author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          {errors.author && <p className="error">{errors.author}</p>}
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
          {errors.publicationYear && <p className="error">{errors.publicationYear}</p>}
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
          {errors.coverImage && <p className="error">{errors.coverImage}</p>}
        </div>

        <button className="submit-button" type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
