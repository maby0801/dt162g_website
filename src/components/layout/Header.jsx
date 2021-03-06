// Projektarbete
// DT162G JavaScript-baserad webbutveckling
// Mattias Bygdeson

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header>
            <h1>Todo list</h1>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>
            </nav>
        </header>
    )
}

export default Header;