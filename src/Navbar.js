import { ReactComponent as MyLogo } from './Nav.svg';
import React from 'react';
import './Navbar.css';
const Navbar = () => {
    return (
        <div className="topnav">
            <div className='ab'>
            <MyLogo/>
                {/*<a class="active"*/} <a href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
                <a href="#about">About</a>
                </div>
        </div>
    );
}
export default Navbar;