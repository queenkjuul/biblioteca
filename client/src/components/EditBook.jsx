import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BookForm from "./BookForm"

const EditBook = () => {
  const [book, setBook] = useState({})
  let headerString = "Edit Book"
  const { id } = useParams()

  useEffect(() => {
    getBook(id)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
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

  return <BookForm headerString={headerString} canDelete={true} book={book} />
}

export default EditBook
