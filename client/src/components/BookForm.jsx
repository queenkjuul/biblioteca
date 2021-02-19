import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

// assets
import placeholder from '../../assets/images/sadmac.png';

// components
import Modal from './Modal';

// node dependencies
import axios from 'axios';
import ReactStars from 'react-rating-stars-component';

// functions
import toTitleCase from '../utils/toTitleCase';


const BookForm = ({ headerString, canDelete, book }) => {
    const [coverimg, setCoverimg] = useState(placeholder);
    const [modalState, setModalState] = useState(false);
    const [modal, setModal] = useState({
        messageArray: ["Are you sure?"],
        isCritical: false,
        confirm: hideModal,
        deny: hideModal
    });
    const [data, setData] = useState({})

    const history = useHistory();

    // scroll window to top on re-render
    useEffect(() => {
        window.scrollTo(0,0);
    },[])
    
    useEffect(() => {
        if (book && book.Author) {
            setData({
                ...book,
                author: book.Author.name 
            });
        }
        // if book is provided (edit mode), check if book has a cover. if it does, use it, if not, placeholder
        setCoverimg(book ? (book.coverimg ? book.coverimg : placeholder) : placeholder);
    }, [book])

    // modal controls
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
            confirm: deleteBook,
            deny: hideModal
        })
    }

    const cancelForm = (event) => {
        event.preventDefault();
        setModalState(true);
        setModal({
            messageArray: ["Are you sure you want to cancel before adding this book?"],
            isCritical: false,
            confirm: () => {window.history.back(); hideModal},
            deny: hideModal
        })
    }

    const invalidModal = (errorArray) => {
        setModalState(true);
        setModal({
            messageArray: errorArray,
            isCritical: false,
            confirm: hideModal,
            deny: hideModal
        })
    }

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

    // form submission functions
    const validateInput = ({title, author}) => {
        // an array was used to make this able to validate multiple inputs, but only title and author are needed for AC
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
        
        if (book && book.id) {
            for (const property in data) {
                if (!data[property]) {
                    setData({...data, property: book[property]})
                }
            }
            axios  
            .put('http://localhost:8080/api/books/' + book.id, data)
            .then(() => {
                history.push('/bookshelf');
                location.reload();})
            .catch(submitError)
        } else if (data) {
            if (validateInput(data)) {
                axios   
                .post('http://localhost:8080/api/books/', data)
                .then((response) => {
                    history.push('/details/' + response.data.id);
                    location.reload();
                })
                .catch(submitError)
            }
        } else {
            invalidModal(['Cannot save a blank record']);
        }
    }

    const urlHandler = (event) => {
        event.preventDefault();
        setData({...data, coverimg: event.target.value});
        setCoverimg(event.target.value);
    }

    const deleteBook = () => {
        axios
        .delete('http://localhost:8080/api/books/' + book.id)
        .then(() => {
            history.push('/bookshelf');
            location.reload();
        })
        .catch((error) => {
            console.log(error);
            throw "Error deleting book"
        })
    }

    // render page
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
                    defaultValue={book ? book.title : ''} 
                    onChange={(e) => setData({...data, title: e.target.value})}
                    required
                />
                
                <label className="book-form__label--author " htmlFor="author">Author:</label>
                <input 
                    className="book-form__textbox--author" 
                    type="text" 
                    name="author" 
                    id="author" 
                    defaultValue={book ? (book.Author ? book.Author.name : '') : ''}
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
                    defaultValue={book ? book.synopsis : ''}
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
                        defaultValue={book ? book.publishDate : ''}
                        onChange={(e) => setData({...data, publishDate: e.target.value})}
                    />
                    <label className="book-form__label--pageCount " htmlFor="pageCount">Pages:</label>
                    <input 
                        className="book-form__input--pageCount" 
                        type="number" 
                        id="pageCount" 
                        name="pageCount"
                        min="0" 
                        defaultValue={book ? book.pageCount : ''}
                        onChange={(e) => setData({...data, pageCount: e.target.value})}
                    />
                </div>

                <label className="book-form__label--rating">Rating:</label>
                <ReactStars 
                    key={book ? book.rating : 0}
                    count={5}
                    value={book ? book.rating : 0}
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