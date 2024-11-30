import "./style.css"
import userContext from "../utils/useContext"
import { useContext } from "react"

function Book(props){

    const data = useContext(userContext);

    return (
        <div className="book-card">
            <img 
                // src={props.bookDetails.coverImage} 
                src={props.bookDetails.cover_image} 

                alt="none" 
                width="200px" 
                height="200px"
                className="book-cover"
            />
            <div className="book-details">
                <h2 className="book-title">{props.bookDetails.title}</h2>
                <p className="book-author">{props.bookDetails.author}</p>
                <p className="book-description">{props.bookDetails.description}</p>
                <p className="book-description">{data.loggedInUser}</p>
            </div>
        </div>
    )
}

export default Book