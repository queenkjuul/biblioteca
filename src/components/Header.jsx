import React from 'react';

const Header = () => {
    return (
    <header class="header">
        <nav class="navbar">
            <a href="index.html" class="navbar__badge btn">La Biblioteca</a>
            <ul class="navbar__menu">
                <li><a id="home" class="btn__navbar" href="index.html">Home</a></li>
                <li><a id="bookshelf" class="btn__navbar" href="bookshelf.html" alt="Go to the Bookshelf">Bookshelf</a></li>
                <li><a id="addbook" class="btn__navbar" href="addbook.html">Add Book</a></li>
            </ul>
            <form class="navbar__search">
                <input class="navbar__search--input" type="text" id="navbar__search" placeholder="Search for book or author" />
                <button class="btn__navbar--search">Search</button>
            </form>
            <div class="navbar__hamburger">X</div>
        </nav>
    </header>
    )
};

export default Header;