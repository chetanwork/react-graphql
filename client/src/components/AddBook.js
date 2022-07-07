import React from "react";
import { DisplayAuthor } from "../data/Data";
import { ADD_BOOK_MUTATION, GET_BOOK } from "../queries/queries";
import {useMutation} from '@apollo/client';
import { useNavigate  } from "react-router-dom";



const AddBook = () =>{
  const home = useNavigate();
  home('/');
  let name;
  let genre;
  let authorId;
  const [addBook, { data, loading, error }] = useMutation(ADD_BOOK_MUTATION, {
    refetchQueries: [
      {query: GET_BOOK},
    ]
  });
  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;
  return(
        <>
        <button onClick={home}>Home</button>
        <h2>Add New Book</h2>
        <form id="add-book" onSubmit={e => {
            e.preventDefault();
            addBook({ variables: { name: name.value, genre: genre.value, authorId: authorId.value  }});
          }}>
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" ref={node => { name = node;}} />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" ref={node => { genre = node;}} />
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select ref={node => { authorId = node;}}>
                        <option>Select author</option>
                        < DisplayAuthor/>
                    </select>
                </div>
                <button>Add Book</button>
            </form>
        </>
    )
}

export default AddBook;