import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem} from "../utils/cartSlice";
import "./style.css"
import { dummyBookData } from "../utils/dummyBookData";


function BookDetails() {
    const params = useParams();
    const [filteredBook, setFilteredBook] = useState(null);

    const data = dummyBookData;
    
    const dispatch = useDispatch();

    function handleAddBook(item){
        dispatch(addItem(item));
    }

    function handleRemoveBook(item){
        dispatch(removeItem(item));
    }

    useEffect(() => {
        if (data) {
            const book = data.find((bk) => bk.id === Number(params.id));
            setFilteredBook(book);
        }
    }, [data, params.id]);

    
    if (!filteredBook) return <h2>No book found with ID {params.id}</h2>;

    return (
        <>
            <h1 className="book-details-header">
    {`Book Details for book with id ${params.id}`}
</h1>
<div className="book-details-container">
    <img
        src={filteredBook.cover_image}
        alt="book image"
        className="book-image"
    />
    <div className="book-info">
        <h2 className="book-title">{filteredBook.title}</h2>
        <h3 className="book-author">{filteredBook.author}</h3>
        <h3 className="book-year">{filteredBook.publication_year}</h3>
        <h3 className="book-genre">{filteredBook.genre}</h3>
        <h3 className="book-description">{filteredBook.description}</h3>
        <div className="button-group">
            <button onClick={() => handleAddBook(filteredBook)} className="add-to-cart-button">
                Add to Cart
            </button>
            <button onClick={handleRemoveBook} className="remove-from-cart-button">
                Remove Item from Cart
            </button>
        </div>
    </div>
</div>

        </>
    );
}

export default BookDetails;
