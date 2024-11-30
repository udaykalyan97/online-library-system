import '../index.css';
import "./Header.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import userContext from "../utils/useContext"
import { useSelector } from "react-redux"

function Header(){

    const data = useContext(userContext);
    const cartItems = useSelector((store) => store.cart.items);

    return(
        <div className="header">
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/browse_books"><li>Browse Books</li></Link>
                <Link to="/demo"><li>Add Books</li></Link>
                <li>{data.loggedInUser}</li>
                <li>
                    <img src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png" alt="cart image" height="30px" width="30px"/>
                    {cartItems.length} 
                </li>
            </ul>
        </div> 
    )
}

export default Header