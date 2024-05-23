import React from 'react'
import "./navbar.css";



const  Navbar=()=> {
    return (
      <nav>
        <ul id="navbar">
          <label for="" class="icon"><box-icon name='menu'></box-icon></label>
          <div id="text">THE LOCAL LIFE</div>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Shop">Shop</a></li>
          <li><a href="#p8t1">Contact Us</a></li>
        </ul>
        <div>
         <img src="Search.png" id="i1"></img>
         <img src="Cart.png" id="i2"></img>
        </div>
        <div id="b1"></div>
        
      </nav> 
    );
}
  
export default Navbar