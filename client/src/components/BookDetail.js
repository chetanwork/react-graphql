import React from "react";
import { useLocation } from "react-router-dom";
import {SHOW_BOOK_DETAIL} from '../queries/queries'
import { useQuery } from "@apollo/client";


const BookDetail = () => {
    const bookid = useLocation();
    console.log(bookid.state.bookId);
    const { loading, error, data } = useQuery(SHOW_BOOK_DETAIL, {
        variables: {id: bookid.state.bookId}
    });
    if (loading) return 'Submitting...';
    if (error) return `Something went worong! ${error.message}`;
    return(
        <>
        <h1>Book Detail</h1>
        <div className="book-details">
        <table><tbody>
            <tr><td>Book Name :</td><td>{data.book.name}</td></tr>
            <tr><td>Genre : </td> <td>{data.book.genre}</td> </tr>
            <tr><td>Author Name: </td> <td>{data.book.author.name}</td></tr>
        </tbody></table>
        </div>
        <div><button onClick={event =>  window.location.href='/'}>Show All Books</button></div>
        </>
    )
}

export default BookDetail;