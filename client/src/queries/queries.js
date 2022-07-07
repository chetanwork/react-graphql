import React from "react";
import {gql} from '@apollo/client'

const GET_BOOK = gql`
query getBooks
    {
        books{
            name
            id
        }
    }
`;

const GET_AUTHOR = gql`
query getAuthors{
        authors {
            name
            id
        }
    }
`;


const ADD_BOOK_MUTATION = gql`
    mutation addNewBook($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`;

const SHOW_BOOK_DETAIL = gql`
    query GetBook($id : ID){
        book(id: $id){
            id
            name
            genre
            author{
                name
                age
            }
        }
    }
`;

export {GET_BOOK, GET_AUTHOR, ADD_BOOK_MUTATION, SHOW_BOOK_DETAIL};