// React dependencies
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { SpinnerCircular } from "spinners-react"

// Node dependencies
import axios from "axios"

// Components
import BookshelfCard from "./BookshelfCard"

const Bookshelf = () => {
  // scroll page to top on render
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [books, setBooks] = useState([])
  const [spinning, setSpinning] = useState([])
  const { query } = useParams()

  const getBooks = (searchterm) => {
    axios
      .get(
        searchterm
          ? process.env.API_URL + "/api/books/search/" + searchterm
          : process.env.API_URL + "/api/books/"
      )
      .then((response) => {
        setBooks(response.data)
        setSpinning(false)
      })
      .catch((error) => {
        console.log(error)
        setSpinning(false)
        throw "There was a problem retrieving the book list"
      })
  }

  useEffect(() => {
    setBooks(getBooks(query))
  }, [])

  useEffect(() => {
    return () => {
      setBooks([])
    }
  }, [])

  return (
    <div className="grey-background">
      <h1 className="pagetitle">Release the Kraken of Knowledge!</h1>
      <section className="bookshelf__container" id="bookshelf__container">
        {books ? (
          books.length ? (
            books.map((book, i) => (
              <BookshelfCard
                key={i}
                id={book.id}
                title={book.title}
                author={book.author ?? ""}
                synopsis={book.synopsis}
                coverimg={book.coverimg}
              />
            ))
          ) : (
            <h2>No books found!</h2>
          )
        ) : spinning ? (
          <>
            <div>
              WARNING: API server spins down on inactivity, initial load call
              can take 30+ seconds
            </div>
            <SpinnerCircular
              enabled={spinning}
              color={"#5ca1d3"}
              size={100}
            ></SpinnerCircular>
          </>
        ) : (
          <h2>No books found!</h2>
        )}
      </section>
    </div>
  )
}

export default Bookshelf
