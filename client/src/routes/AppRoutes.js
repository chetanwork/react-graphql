import React from "react";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import BookList from '../components/BookList';
import AddBook from '../components/AddBook'
import BookDetail from "../components/BookDetail";

const AppRoutes = () => {
  return(
  <Router>
    <Routes>
      <Route path='/' element={<BookList />} />
      <Route path='/addbook' element={<AddBook/>} />
      <Route path='/bookdetails' element={<BookDetail/>} />
    </Routes>
  </Router>
  ) 
}

export default AppRoutes;