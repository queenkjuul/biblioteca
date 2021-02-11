import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';



const activeClass = "navbar__menu-button--active";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const history = useHistory();

    useEffect(() => {
        setMenuOpen(false);
    }, []);

    useEffect(()=> {
        window.scrollTo(0,0);
    });

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const searchBookshelf = (event) => {
        event.preventDefault();
        history.push('/bookshelf/' + searchTerm);
        location.reload();
    }

    return (
    <header className="header">
        <nav className="navbar">
            <NavLink exact to="/" className="navbar__badge btn">La Biblioteca</NavLink>
            <ul className={`navbar__menu` + (menuOpen ? `` : ` navbar__menu--hidden `)}>
                <li><NavLink 
                        onClick={toggleMenu} 
                        activeClassName={activeClass} 
                        id="home" 
                        className="navbar__menu-button" 
                        exact to="/">
                            Home
                    </NavLink>
                </li>
                <li><NavLink 
                        onClick={toggleMenu} 
                        activeClassName={activeClass} 
                        id="bookshelf" 
                        className="navbar__menu-button" 
                        to="/bookshelf/">
                            Bookshelf
                    </NavLink>
                </li>
                <li><NavLink 
                        onClick={toggleMenu} 
                        activeClassName={activeClass} 
                        id="addbook" 
                        className="navbar__menu-button" 
                        to="/add">
                            Add Book
                    </NavLink>
                </li>
            </ul>
            <form onSubmit={searchBookshelf} className={(menuOpen ? `` : `navbar__search--hidden `) + `navbar__search` }>
                <input 
                    className="navbar__search--input" 
                    type="text" 
                    name="navbar__search"
                    id="navbar__search" 
                    placeholder="Search for book or author" 
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button 
                    className="navbar__menu-button--search" 
                    type="submit"
                    onClick={menuOpen ? () => toggleMenu : () => toggleMenu}>
                        Search
                </button>
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