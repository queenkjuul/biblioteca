import React, { useEffect, useState } from 'react';
import BookForm from './BookForm';
import library from '../../db.json';

const EditBook = () => {
    const [book, setBook] = useState({});
    let headerString = "Edit Book";


    useEffect(() => {
        setBook(library.books[1]);
    })

    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    return (
        <BookForm 
            headerString={headerString}
            canDelete={true}
            book={book}
        />
    )
}

export default EditBook;