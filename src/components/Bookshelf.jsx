import React, { useState, useEffect } from 'react';
import BookshelfCard from './BookshelfCard';
// import axios from 'axios';
import library from '../../db.json';

const Bookshelf = () => {

    // scroll page to top on render
    useEffect(() => {
        window.scrollTo(0,0);
    },[])


    {/* the line below was included for testing the ErrorBoundary which was new in this branch */}
    {/* throw "testing React error boundary!" */}

    const [books, setBooks] = useState([]);

    // refactoring for static content per ticket AC
    // Phase I was technically dynamic content in my implementation, just not pulled from a DB
    // so I'm going to use a script to make the page look identical to phase 1, per AC

    // const getBooks = () => {
    //     axios   
    //         .get('http://localhost:3000/books')
    //         .then((response) => {
    //             setBooks(response.data);
    //         })
    // }

    const getBooks = () => {
        let bookArr = [];
        
        for (let i = 0; i < 19; i++) {
            let index = Math.floor(Math.random() * Math.floor(4));
            bookArr[i] = library.books[index];
        }

        return bookArr;
    }

    useEffect(() => {
        setBooks(getBooks());
    }, [])

    return (
        <div class="grey-background">
            <h1 className="pagetitle">Release the Kraken of Knowledge!</h1>
            <section className="bookshelf__container" id="bookshelf__container">
                {books ? 
                    books.map((book, i) => (
                        <BookshelfCard
                            key={i}
                            id={book.id}
                            title={book.title}
                            author={book.author}
                            synopsis={book.synopsis}
                            coverimg={book.coverimg}
                        />
                    )) : 
                    <h2>No books found!</h2>
                }
            </section>
        </div>
    )
}

export default Bookshelf;