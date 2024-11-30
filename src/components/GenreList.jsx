import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../utils/useFetch";
import { useDispatch } from "react-redux";
import { addItem, removeItem} from "../utils/cartSlice";
import Book from "./Book";
import "./style.css"


function GenreList() {
    // const params = useParams();
    const params = useParams();
    const [filteredBooks, setfilteredBooks] = useState([]);

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
            const books = data.filter((bk) => 
                bk.genre.some((g) => g.toLowerCase() === params.genre.toLowerCase())
            );
            setfilteredBooks(books);
        }
    }, [data, params.genre]);

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error: {error.message}</h2>;
    if (!filteredBooks) return <h2>No books found under {params.genre} genre</h2>;

    return (
        <>
            <h1>{`Books under "${params.genre}"`}</h1>
            <div className="genre-list-filtered">
                {filteredBooks.map((book) => (
                    <Link to={`/Book/${book.id}`} key={book.id}><Book key={book.id} bookDetails = {book} /></Link>
                ))}
            </div>
        </>
    );
}

export default GenreList;
