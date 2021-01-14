import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as 
    Router,
    Switch,
    Route,
    useParams,
    useRouteMatch
} from 'react-router-dom';
import BookForm from './BookForm';
import axios from 'axios';


const EditBook = () => {
    const [book, setBook] = useState({});
    let headerString = "Edit Book";
    const { id } = useParams();
    
    useEffect(() => {
        getBook(id);
    },[])

    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    const getBook = (id) => {
        axios
        .get('http://localhost:3000/books/' + id)
        .then((response) => {
            setBook(response.data);
        })
        .catch((error) => {
            console.log(error);
            throw "There was a problem retrieving the book";
        })
    }

    return (
        <BookForm 
            headerString={headerString}
            canDelete={true}
            book={book}
        />
    )
}

export default EditBook;