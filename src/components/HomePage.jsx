import { Link, useParams } from "react-router-dom";
import '../index.css';
import './HomePage.css';
import { popularBooks } from "../utils/popularBooks.js"
import Book from "./Book.jsx";
import { genreList } from "../utils/genreList.js";




function HomePage() {

    const params = useParams();
    console.log(params)
    return (
        <>
            <div className="category-section">
                <h2 className="section-title">Book Categories</h2>
                <div className="category-list">
                    {genreList.map((genre, index) => (
                        <div key={index} className="category-card">
                            <h3 className="category-name"><Link to={`/Book_Category/${genre}`}>{genre}</Link></h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="popular-books-section">
                <h2 className="section-title">Popular Books</h2>
                <div className="book-list">
                    {
                        popularBooks.map((data)=>{
                            return (
                                <Link to={`/Book/${data.id}`} key={data.id}><Book key={data.id} bookDetails = {data} /></Link>
                            )})
                    }
                </div>
            </div>

    

            {/* Popular Books Section */}
            {/* <div className="popular-books-section">
            <h2 className="section-title">Popular Books</h2>
            <div className="book-list">
            <div className="book-card">
                <h3 className="book-title">The Great Gatsby</h3>
                <Link to="/book/1" className="view-details-link">View Details</Link>
            </div>
            <div className="book-card">
                <h3 className="book-title">1984</h3>
                <Link to="/book/2" className="view-details-link">View Details</Link>
            </div>
            <div className="book-card">
                <h3 className="book-title">Dune</h3>
                <Link to="/book/3" className="view-details-link">View Details</Link>
            </div> */}
            {/* Add more popular books here */}
            {/* </div> */}
            {/* </div> */}
        </>
    );
}

export default HomePage;
