import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';


const activeClass = "navbar__menu-button--active";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState('');

    useEffect(() => {
        setMenuOpen(false);
    }, []);

    useEffect(()=> {
        window.scrollTo(0,0);
    });

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
    <header className="header">
        <nav className="navbar">
            <NavLink exact to="/" className="navbar__badge btn">La Biblioteca</NavLink>
            <ul className={`navbar__menu` + (menuOpen ? `` : ` navbar__menu--hidden `)}>
                <li><NavLink onClick={toggleMenu} activeClassName={activeClass} id="home" className="navbar__menu-button" exact to="/">Home</NavLink></li>
                <li><NavLink onClick={toggleMenu} activeClassName={activeClass} id="bookshelf" className="navbar__menu-button" to="/bookshelf">Bookshelf</NavLink></li>
                <li><NavLink onClick={toggleMenu} activeClassName={activeClass} id="addbook" className="navbar__menu-button" to="/add">Add Book</NavLink></li>
            </ul>
            <form className={(menuOpen ? `` : `navbar__search--hidden `) + `navbar__search` }>
                <input className="navbar__search--input" type="text" id="navbar__search" placeholder="Search for book or author" />
                <button className="navbar__menu-button--search" onClick={menuOpen ? () => toggleMenu : () => toggleMenu}>Search</button>
            </form>
            <button className={`hamburger hamburger--collapse navbar__hamburger` + (menuOpen ? ` active` : ``)} type="button" onClick={() => setMenuOpen(!menuOpen)}>
                <div className="inner">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </button>
        </nav>
    </header>
    )
};



export default Header;