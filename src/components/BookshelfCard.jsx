import React from 'react';
import covers from "assets/images/*.png";

const BookshelfCard = ({id, coverimg, title, author}) => {
    return (
        <a href="details.html" className="card--bookshelf" id={`card--bookshelf-${id}`}>
            <img className="card--bookshelf__coverimg" src={covers["placeholder-cover" + id]} alt={`Cover of the book ${title}`} />
            <div className="card--bookshelf__title">{title}</div>
            <div className="card--bookshelf__author">{author}</div>
        </a>)
}

export default BookshelfCard;