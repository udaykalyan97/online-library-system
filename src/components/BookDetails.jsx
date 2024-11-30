import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../utils/useFetch";
import { useDispatch } from "react-redux";
import { addItem, removeItem} from "../utils/cartSlice";
import "./style.css"


function BookDetails() {
    const params = useParams();
    const [filteredBook, setFilteredBook] = useState(null);

    const { data, error, loading } = useFetch("/api");

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

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error: {error.message}</h2>;
    if (!filteredBook) return <h2>No book found with ID {params.id}</h2>;

    return (
        <>
            <h1 >{`Book Details for book with id ${params.id}`}</h1>
            <div>
                <img
                    src={filteredBook.cover_image}
                    alt="book image"
                    height="300px"
                    width="200px"
                />
                <h2>{filteredBook.title}</h2>
                <h3>{filteredBook.author}</h3>
                <h3>{filteredBook.publication_year}</h3>
                <h3>{filteredBook.genre}</h3>
                <h3>{filteredBook.description}</h3>
                <button onClick={()=>handleAddBook(filteredBook)}>Add to Cart</button>
                <button onClick={handleRemoveBook}>Remove Item from cart</button>
            </div>
        </>
    );
}

export default BookDetails;
