// React dependencies
import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as 
    Router,
    Switch,
    Route,
    useParams,
    useRouteMatch
} from 'react-router-dom';

// Node dependencies
import axios from 'axios';

// Components
import BookshelfCard from './BookshelfCard';

const Bookshelf = () => {

    // scroll page to top on render
    useEffect(() => {
        window.scrollTo(0,0);
    },[])


    const [books, setBooks] = useState([]);
    const { query } = useParams();

    const getBooks = (searchterm) => {
        axios   
            .get((searchterm ? 'http://localhost:8080/api/books/search/' + searchterm : 'http://localhost:8080/api/books/'))
            .then((response) => {
                setBooks(response.data);
            })
            .catch((error) => {
                console.log(error);
                throw "There was a problem retrieving the book list";
            })
    }

    useEffect(() => {
        setBooks(getBooks(query));
    }, [])

    useEffect(() => {
        return (() => {
            setBooks([]);
        })
    },[])

    return (
        <div className="grey-background">
            <h1 className="pagetitle">Release the Kraken of Knowledge!</h1>
            <section className="bookshelf__container" id="bookshelf__container">
                {books ? 
                    (books.length ?
                        books.map((book, i) => (
                            <BookshelfCard
                                key={i}
                                id={book.id}
                                title={book.title}
                                author={book.Author.name}
                                synopsis={book.synopsis}
                                coverimg={book.coverimg}
                            />
                        )) : <h2>No books found!</h2>) : 
                    <h2>No books found!</h2>
                }
            </section>
        </div>
    )
}

export default Bookshelf;