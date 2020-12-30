import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
const activeClass = "btn__navbar--active";

const Header = () => {
    return (
    <header className="header">
        <nav className="navbar">
            <NavLink exact to="/" className="navbar__badge btn">La Biblioteca</NavLink>
            <ul className="navbar__menu">
                <li><NavLink activeClassName={activeClass} id="home" className="btn__navbar" exact to="/">Home</NavLink></li>
                <li><NavLink activeClassName={activeClass} id="bookshelf" className="btn__navbar" to="/bookshelf">Bookshelf</NavLink></li>
                <li><NavLink activeClassName={activeClass} id="addbook" className="btn__navbar" to="/add">Add Book</NavLink></li>
            </ul>
            <form className="navbar__search">
                <input className="navbar__search--input" type="text" id="navbar__search" placeholder="Search for book or author" />
                <button className="btn__navbar--search">Search</button>
            </form>
            <div className="navbar__hamburger">X</div>
        </nav>
    </header>
    )
};

export default Header;