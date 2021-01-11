import React, { useEffect, useState } from 'react';
import placeholder from '../../assets/images/sadmac.png';
import newCover from '../../assets/images/placeholder-cover4.png';
import Alert from './Alert';

const BookForm = ({ headerString, canDelete }) => {
    const [coverimg, setCoverimg] = useState(placeholder);
    const [alertState, setAlertState] = useState(false);
    const [alert, setAlert] = useState({
        content: "Are you sure?",
        isCritical: false,
        confirm: hideAlert,
        deny: hideAlert
    });

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

    const updateCover = (event, img) => {
        // in the future, this function will handle uploading a new cover image and 
        // assigning it to the img container
        // for now, it just toggles on a placeholder
        event.preventDefault();

        setCoverimg(newCover);
    }

    const showAlert = (event) => {
        event.preventDefault();
        setAlertState(true);
    }

    const hideAlert = (event) => {
        event.preventDefault();
        setAlertState(false);
    }

    const confirmDelete = (event) => {
        event.preventDefault();
        setAlertState(true);
        setAlert({
            alertMessage: "Are you you want to delete this book?",
            isCritical: true,
            confirm: hideAlert,
            deny: hideAlert
        })
    }

    const cancelForm = (event) => {
        event.preventDefault();
        setAlertState(true);
        setAlert({
            alertMessage: "Are you sure you want to cancel before adding this book?",
            isCritical: false,
            confirm: () => {history.back()},
            deny: hideAlert
        })
    }

    return (
        <>
        {alertState ? 
            <Alert 
                content={alert.alertMessage}
                isCritical={alert.isCritical}
                confirm={alert.confirm}
                deny={alert.deny} />
        : ''}
        <article className="book-form__container">
            <form className="book-form__card">
                <h1 className="book-form__header">{toTitleCase(headerString || "Header")}</h1>

                <label className="book-form__label--title" htmlFor="title">Title:</label>
                <input className="book-form__textbox--title" type="text" name="title" id="title" />
                
                <label className="book-form__label--author " htmlFor="author">Author:</label>
                <input className="book-form__textbox--author" type="text" name="author" id="author"></input>
                

                <img src={coverimg} className="book-form__coverimg"></img>
                <button onClick={updateCover} className="book-form__addimg">Add Image</button>
                
                <label className="book-form__label--synopsis " htmlFor="synopsis">Synopsis:</label>
                <textarea className="book-form__textbox--synopsis" id="synopsis" name="synopsis"></textarea>
                
                <label className="book-form__label--publishDate" htmlFor="publishDate">Published:</label>
                <div className="book-form__publishPage">
                    <input className="book-form__input--publishDate" type="date" id="publishDate" name="publishDate" />
                    <label className="book-form__label--pageCount " htmlFor="pageCount">Pages:</label>
                    <input className="book-form__input--pageCount" type="number" id="pageCount" name="pageCount" />
                </div>

                <label className="book-form__label--rating">Rating:</label>
                <div className="book-form__rating">⭐⭐⭐⭐⭐</div>
                <div className="book-form__controls">
                    <button className="btn">Submit</button>
                    <button className="btn--secondary" onClick={cancelForm}>Cancel</button>
                    {canDelete ? 
                        <button onClick={confirmDelete} className="btn--critical">DELETE BOOK</button>
                    : ''}
                </div>
            </form>
        </article>
    </>
    )
}

export default BookForm;