import React from "react";
import './header.scss'
import { Link } from "react-router-dom";

function Header () {
    return (
        <ul className="header__ul">
            
            <Link to='/' className="header__ul_li">Home</Link>
            <Link to='/about' className="header__ul_li">About</Link>
            <Link to='/login'><button className="header__ul_li2">Login</button></Link>
        </ul>
    )
};

export default Header;