import Book from "./Book.jsx"
import "./style.css"
import {useState, useEffect, useContext} from "react"
import { Link } from "react-router-dom"
import { popularBooks } from "../utils/popularBooks.js"



function PopularBooks(){
    const [filteredBooks, setfilteredBooks] = useState(popularBooks);
    return(
        <>
            <div className="bookList">
                {
                    filteredBooks.map((data)=>{
                        return (
                            <Link to={`/Book/${data.id}`} key={data.id}><Book key={data.id} bookDetails = {data} /></Link>
                        )})
                }
            </div>
        </>
        
    )
}


export default PopularBooks;