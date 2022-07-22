import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';
import logo from '../images/Logo-2.png';
import shoppingcart from '../images/shopping-cart.png'; 
import profileimg from '../images/profile.png'; 

function Nav() {

    const navstyle = {
        font: 'normal normal bold 16px/19px Montserrat',
        color: '#080808',

    };

    return (
        <nav>
            <img className="logo" src={logo} />
            <ul className="navlinks">
                <Link style={navstyle} to='/courses'> 
                <li>COURSES</li>
                </Link>
                <Link style={navstyle} to='/mywishlist'>
                <li>MY WISHLIST</li>
                </Link>
                <Link style={navstyle} to='/cart'>
                <li><img className="shoppingcart" src={shoppingcart} /></li>
                </Link>
                <Link style={navstyle} to='/profile'>
                <li><img className="profile" src={profileimg} /></li>
                </Link>
            </ul>
        </nav>
    );

}

export default Nav;