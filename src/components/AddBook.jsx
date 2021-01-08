import React, { useEffect } from 'react';
import BookForm from './BookForm';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useParams } from 'react-router';

const AddBook = () => {

    let headerString = "Add Book";

    useEffect(() => {
        window.scrollTo(0,0);
    },[])
    
    return (
        <BookForm headerString={headerString} canDelete={false} />
    )
}

export default AddBook;