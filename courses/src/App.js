import './App.css';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Nav from './components/Nav.js';
import Courses from './components/Courses.js';
import MyWishList from './components/MyWishList.js';
import Cart from './components/Cart.js';
import Profile from './components/Profile.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CourseDetails from './components/CourseDetails';

function App() {

  const [cart, setCart] = useState([]);

  const handleClick = (course) => {
    alert("Item Added to Cart");
    setCart([...cart,course]);
    console.log(course);
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Courses handleClick={handleClick} />} />
          <Route path="/courses" exact element={<Courses handleClick={handleClick} />} />
          <Route path="/coursedetails/:id" exact element={<CourseDetails />} />
          <Route path="/mywishlist" element={<MyWishList />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

      </BrowserRouter>
    </div>

  );
}

export default App;


