import React, { useEffect } from 'react';
import BookForm from './BookForm';

const EditBook = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    return (
        <BookForm />
    )
}

export default EditBook;