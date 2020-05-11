import React from 'react';
import logo from '../../../src/logo/download.svg'
import './Header.css'
const Header = () => {
    return (
        <div className="header" >
           <nav >
           <ul>
               <a href="/home">Home</a>
               <a href="/about">About</a>
               <a href="/add">Add Friend</a>
           </ul>
            </nav> 
        </div>
    );
};

export default Header;