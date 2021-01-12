import React, { useEffect } from 'react';
import BookForm from './BookForm';

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