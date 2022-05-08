import React from 'react';
import { useState } from 'react';
import "../css/homepage.css";
import About from "./About";
import Home from "./Home"; 
import Coffee from "./Coffee";
import Posts from "./Posts";
import Tea from './Tea';
import Privacy from "./Privacy";
import Menu from './Menu';



 function Homepage( {user}) {
  const [page, setPage] = useState('Home');
 

  return (
    <div className='homepage'>
       <header>
       <h1 className='head-title'>Wagon Coffee</h1>
        <span className='subheader'>Hello {user.username}! </span>
        <Menu page={page} setPage={setPage}/>
        {page === 'About' && <About />}
        {page === 'Home' && <Home />}
        {page === 'Coffee' && <Coffee />}
        {page === 'Tea' && <Tea />}
        {page === 'Posts' && <Posts />}
        {page === 'Privacy' && <Privacy />}

       </header>
       <footer className='homepage-footer'>
         <span>Wagon Cafe</span>
       </footer>
    </div>
  )
}
export default Homepage;

