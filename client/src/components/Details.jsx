import axios from "axios"
import React, { useEffect, useState } from "react"
import ReactStars from "react-rating-stars-component"
import { Link, useParams } from "react-router-dom"
import placeholder from "../../assets/images/sadmac.png"

const Details = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { id } = useParams()

  const [book, setBook] = useState({})

  useEffect(() => {
    getBook(id)
  }, [])

  const getBook = (id) => {
    axios
      .get(process.env.API_URL + "/api/books/" + id)
      .then((response) => {
        setBook(response.data)
      })
      .catch((error) => {
        console.log(error)
        throw "There was a problem retrieving the book"
      })
  }

  const { title, synopsis, rating, coverimg, publishDate, pageCount, Author } =
    book

  return (
    <main className="details__container">
      <article className="details__card">
        <section className="details__title">
          {title ? title : "Title Not Found"}
        </section>
        <section className="details__card--left-set">
          <img
            className="details__coverimg"
            src={coverimg ? coverimg : placeholder}
            alt={"Cover of the book " + title}
          />
          <div className="details__rating">
            {rating ? (
              <ReactStars
                count={5}
                value={rating}
                size={40}
                edit={false}
                activeColor="orange"
              />
            ) : (
              ""
            )}
          </div>
        </section>
        <section className="details__author">
          {Author ? Author.name : "Unknown Author"}
        </section>
        <section className="details__publishDate">
          Published: {publishDate ? publishDate : "Unknown"}
        </section>
        <section className="details__pageCount">
          {pageCount ? pageCount : "Unknown"} pages
        </section>
        <section className="details__synopsis">
          <p>{synopsis ? synopsis : "No details provided"}</p>
        </section>
        <section className="details__controls">
          <Link className="btn" to={"/edit/" + id}>
            Edit Book
          </Link>
          <Link className="btn btn--secondary details__back" to="/bookshelf">
            Back to Bookshelf
          </Link>
        </section>
      </article>
    </main>
  )
}

export default Details
