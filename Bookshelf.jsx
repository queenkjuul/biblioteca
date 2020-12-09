import React, { Component } from 'react';
import BookshelfCard from './BookshelfCard';
import './assets/styles/index.scss';
import axios from 'axios';




class Bookshelf extends Component {
    
    state = {
        library: []
    };

    getBooks = () => {
        axios
            .get('http://localhost:3000/books')
            .then((response) => {
                console.log(response.data);
                this.setState({library: response.data});
                console.log(JSON.stringify(this.state.library));
            })
            .catch((err) => console.log(err));
    }

    componentDidMount = () => {
        this.getBooks();
        console.log('did mount');
    }

    render() { 
        return (
            <>
                {this.state.library.map((book) => (
                    <BookshelfCard
                        key={book.id}
                        id={book.id}
                        title={book.title}
                        author={book.author}
                        coverimg={book.coverimg}
                    />
                ))
                }
            </> 
        )
    }
}

export default Bookshelf;