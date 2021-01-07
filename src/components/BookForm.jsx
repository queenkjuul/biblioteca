import React, { useEffect } from 'react';

const BookForm = ({ headerString }) => {

    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    // taken from https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
    // while I can't think of any use cases for this component besides "Edit" or "Add,"
    // i figured it was worth it to make it more universally applicable just in case
    // this way you can pass any header string you want and it will display correctly
    const toTitleCase = (string) => {
        return string.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        )
    }

    return (
        // <main>
        <article className="book-form__container">
            <form className="book-form__card">
                <h1 className="book-form__item--header">{toTitleCase(headerString)}</h1>

                <label className="book-form__label--title" htmlFor="title">Title:</label>
                <input className="book-form__textbox--title" type="text" name="title" id="title" />
                
                <label className="book-form__label--author " htmlFor="author">Author:</label>
                <input className="book-form__textbox--author" type="text" name="author" id="author"></input>
                
                <div className="book-form__item--coverset">
                    <div className="book-form__item--coverimg"></div>
                    <a className="book-form__item--addimg">Add Image</a>
                </div>
                
                <label className="book-form__label--synopsis " htmlFor="synopsis">Synopsis:</label>
                <textarea className="book-form__textbox--synopsis" id="synopsis" name="synopsis"></textarea>
                
                <label className="book-form__label--publishDate" htmlFor="publishDate">Published:</label>
                <div className="book-form__item--publishPage">
                    <input className="book-form__input--publishDate" type="date" id="publishDate" name="publishDate" />
                    <label className="book-form__label--pageCount " htmlFor="pageCount">Pages:</label>
                    <input className="book-form__input--pageCount" type="number" id="pageCount" name="pageCount" />
                </div>

                <label className="book-form__label--rating">Rating:</label>
                <div className="book-form__item--rating">&#9733 &#9733 &#9733 &#9733 &#9734</div>
                <div className="book-form__controls">
                    <button className="btn" href="#">Submit</button>
                    <button className="btn--secondary" href="#">Cancel</button>
                    <button className="btn--critical" href="#">DELETE BOOK</button>
                </div>
            </form>
        </article>
    // </main>
    )
}

export default BookForm;