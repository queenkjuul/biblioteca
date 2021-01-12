import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import sadmac from "../../assets/images/sadmac.png";

const BookshelfCard = ({id, coverimg, title, author}) => {

    useEffect(() => {
        window.scrollTo(0,0);
    },[])
    
    return (
        <Link to={`/details/${id}`} className="bookshelf-card" id={`bookshelf-card-${id}`}>
            <img className="bookshelf-card__coverimg" src={coverimg ? coverimg : sadmac} alt={`Cover of the book ${title}`} />
            <div className="bookshelf-card__title">{title}</div>
            <div className="bookshelf-card__author">{author}</div>
        </Link>)
}

export default BookshelfCard;