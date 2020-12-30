import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';


const Home = () => {
return (<>
        <section className="welcomeBanner">
            <h1>Books.</h1>
            <h2>Like PDFs, but heavier</h2>
        </section>
        <section className="homepage">
            <h1>Welcome to the Library</h1>
            <p>Libraries are cool, 
                because they are one of the only places you are allowed to exist in public without the expectation of having paid to be there, 
                either by having purchased an item (such as coffee or a snack) or paid an admission.
            </p>
            <NavLink to="/bookshelf" className="btn">See Books</NavLink>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <NavLink to="/add" className="btn">Add Book</NavLink>
        </section>
</>)
}

export default Home;