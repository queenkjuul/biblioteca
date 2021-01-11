import React, { useEffect } from 'react';
import placeholder from '../../assets/images/placeholder-cover2.png';
import { Link, NavLink, useLocation } from 'react-router-dom';


const Details = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    },[])
    
    return (
        <main className="details__container">
            <article className="details__card">
                <section className="details__title">Brave New World, a Book About a Happy and Fulfilling Future for Humanity</section>
                <section className="details__card--left-set">
                    <img className="details__coverimg" src={placeholder} alt="Cover of the book Brave New World" />
                    <div className="details__rating">
                    ⭐⭐⭐⭐⭐
                    </div>
                </section>
                    <section className="details__author">Aldous Huxley</section>
                    <section className="details__publishDate">Published: 1932</section>
                    <section className="details__pageCount">311 pages</section>
                    <section className="details__synopsis">
                        <p>A book about stuff that happens, and the stuff that happens are things that happened to have happened in the book.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </section>
                <section className="details__controls">
                    <Link className="btn" to="/edit/1">Edit Book</Link>
                    <Link className="btn btn--secondary details__back" to="/bookshelf">Back to Bookshelf</Link>
                </section>
            </article>
        </main>
    )
}

export default Details;