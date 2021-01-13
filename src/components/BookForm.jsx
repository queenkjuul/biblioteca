import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

// assets
import placeholder from '../../assets/images/sadmac.png';
import toTitleCase from './toTitleCase';

// components
import Modal from './Modal';

// node dependencies
import axios from 'axios';
import ReactStars from 'react-rating-stars-component';


const BookForm = ({ headerString, canDelete, book = {} }) => {
    const [coverimg, setCoverimg] = useState(placeholder);
    const [modalState, setModalState] = useState(false);
    const [modal, setModal] = useState({
        messageArray: ["Are you sure?"],
        isCritical: false,
        confirm: hideModal,
        deny: hideModal
    });
    const [data, setData] = useState({
        id: book.id,
        title: (book.title ? toTitleCase(book.title) : ''),
        author: (book.author ? toTitleCase(book.author) : ''),
        synopsis: book.synopsis,
        publishPage: book.publishPage,
        publishDate: book.publishDate,
        coverimg: book.coverimg,
        rating: book.rating
    })

    const history = useHistory();

    // scroll window to top on re-render
    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    const updateCover = (event) => {        
        event.preventDefault();
        setModalState(true);
        setModal({
            messageArray: ['Please enter a URL which points to the cover image'],
            isCritical: false,
            confirm: hideModal,
            deny: hideModal,
            changeFunction: urlHandler
        })
    }

    const hideModal = (event) => {
        event.preventDefault();
        setModalState(false);
    }

    const confirmDelete = (event) => {
        event.preventDefault();
        setModalState(true);
        setModal({
            messageArray: ["Are you you want to delete this book?"],
            isCritical: true,
            confirm: hideModal,
            deny: hideModal
        })
    }

    const cancelForm = (event) => {
        event.preventDefault();
        setModalState(true);
        setModal({
            messageArray: ["Are you sure you want to cancel before adding this book?"],
            isCritical: false,
            confirm: () => {history.back(); hideModal},
            deny: hideModal
        })
    }

    const invalidModal = (errorArray) => {
        setModalState(true);
        console.log(errorArray);
        setModal({
            messageArray: errorArray,
            isCritical: false,
            confirm: hideModal,
            deny: hideModal
        })
    }

    const validateInput = ({title, author}) => {
        let errorList = [];
        let valid = true;

        if (!title || !author) {
            errorList.push('Title and Author are required');
            valid = false;
        }

        if (!valid) {
            invalidModal(errorList);
            return false;
        } else {
            return true;
        }
        
    }

    const submitForm = (event) => {
        event.preventDefault();

        const submitError = (error) => {
            console.log(error);
            throw "There was a problem submitting the data";
        }
        
        if (book.id) {
            axios  
            .put('http://localhost:3000/books/' + book.id, data)
            .then(history.push('/details/' + book.id))
            .catch(submitError)
        } else {
            if (validateInput(data)) {
                axios   
                .post('http://localhost:3000/books/', data)
                .then((response) => {
                    console.log(response);
                    history.push('/details/' + response.data.id);
                })
                .catch(submitError)
            }
        }
    }

    const urlHandler = (event) => {
        event.preventDefault();
        setData({...data, coverimg: event.target.value});
        setCoverimg(event.target.value);
    }



    return (
        <>
        {modalState ? 
            <Modal 
                content={modal.messageArray}
                isCritical={modal.isCritical}
                confirm={modal.confirm}
                deny={modal.deny}
                changeFunction={modal.changeFunction} />
        : ''}
        <article className="book-form__container">
            <form className="book-form__card" onSubmit={submitForm}>
                <h1 className="book-form__header">{toTitleCase(headerString || "Header")}</h1>

                <label className="book-form__label--title" htmlFor="title">Title:</label>
                <input 
                    className="book-form__textbox--title" 
                    type="text" 
                    name="title" 
                    id="title" 
                    defaultValue={book.title || ``} 
                    onChange={(e) => setData({...data, title: e.target.value})}
                    required
                />
                
                <label className="book-form__label--author " htmlFor="author">Author:</label>
                <input 
                    className="book-form__textbox--author" 
                    type="text" 
                    name="author" 
                    id="author" 
                    defaultValue={book.author || ``}
                    onChange={(e) => setData({...data, author: e.target.value})}
                    required >
                </input>
                

                <img src={coverimg} className="book-form__coverimg"></img>
                <button onClick={updateCover} className="book-form__addimg">Add Image</button>
                
                <label className="book-form__label--synopsis " htmlFor="synopsis">Synopsis:</label>
                <textarea 
                    className="book-form__textbox--synopsis" 
                    id="synopsis" 
                    name="synopsis" 
                    type="text"
                    defaultValue={book.synopsis || ``}
                    onChange={(e) => setData({...data, synopsis: e.target.value})}
                >
                </textarea>
                
                <label className="book-form__label--publishDate" htmlFor="publishDate">Published:</label>
                <div className="book-form__publishPage">
                    <input 
                        className="book-form__input--publishDate" 
                        type="date" 
                        id="publishDate" 
                        name="publishDate" 
                        defaultValue={book.publishDate || ``}
                        onChange={(e) => setData({...data, publishPage: e.target.value})}
                    />
                    <label className="book-form__label--pageCount " htmlFor="pageCount">Pages:</label>
                    <input 
                        className="book-form__input--pageCount" 
                        type="number" 
                        id="pageCount" 
                        name="pageCount" 
                        defaultValue={book.pageCount || ``}
                        onChange={(e) => setData({...data, pageCount: e.target.value})}
                    />
                </div>

                <label className="book-form__label--rating">Rating:</label>
                <ReactStars 
                    count={5}
                    onChange={(e) => setData({...data, rating: e})}
                    size={32}
                    activeColor="orange"/>
                <div className="book-form__controls">
                    <button type="submit" className="btn" onClick={submitForm}>Submit</button>
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