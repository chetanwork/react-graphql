import React from "react";
import { GetBookData } from "../data/Data";
import { useNavigate  } from "react-router-dom";

const BookList = () => {
    const navigate = useNavigate();
    navigate('/addbook');
    return(
        <div>
            <h2>Available Books</h2>
            <ul id="book-list">
                < GetBookData/>
            </ul>
            <button onClick={navigate}>Add New Book</button>
        </div>
    );
};

export default BookList;