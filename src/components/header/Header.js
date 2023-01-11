import React from "react";

import { Link } from "react-router-dom";

function Header () {
    return (
        <ul>
            
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/login'>Login</Link>
        </ul>
    )
};

export default Header;