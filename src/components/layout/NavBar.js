import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <nav className="navbar is-info" role="navigation" aria-label="main navigation">
            <div className="nav-brand">
                Github 
            </div>
            
            <div className="navbar-end">

                <Link className="navbar-item" to="/users"> Top Users </Link>

                <Link className="navbar-item" to="/about"> About </Link>

            </div>
            </nav>     
        </div>
    );
};

export default NavBar;