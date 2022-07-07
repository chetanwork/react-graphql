import React, { useState } from "react";
import {useQuery } from '@apollo/client';
import { GET_AUTHOR, GET_BOOK } from "../queries/queries";
import { useNavigate  } from "react-router-dom";


const GetBookData = () => {
    const bookDetails = useNavigate();
    const handleDetail = (id) => {
        bookDetails('/bookdetails',{state:{bookId:id}})
    }
    const { loading, error, data } = useQuery(GET_BOOK);
    if (loading) return <h4>Loading...</h4>;
    if (error) return <h4>Error :</h4>;
    return data.books.map(book => {
        return(
            <li key={ book.id }>{ book.name } <button onClick={ () => handleDetail(book.id)}>Show Details</button></li>
        );
    })
}

const DisplayAuthor = () => {
    const { loading, error, data } = useQuery(GET_AUTHOR);
    console.log(loading, error, data);
    if (loading) return <h4>Loading...</h4>;
    if (error) return <h4>Error :</h4>;
    return data.authors.map(author => {
        return(
            <option key={ author.id } value={author.id}>{ author.name }</option> 
        );
    })
}

export {GetBookData, DisplayAuthor};