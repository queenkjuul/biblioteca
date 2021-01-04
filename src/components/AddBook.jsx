import React, { useEffect } from 'react';
import BookForm from './BookForm';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useParams } from 'react-router';

const AddBook = () => {

    let headerString = "Add Book";

    let params = useParams();
    console.log(params);

    useEffect(() => {
        window.scrollTo(0,0);
    },[])
    
    return (
        <BookForm headerString={headerString} />
    )
}

export default AddBook;