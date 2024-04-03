const { Book, Author } = require("../models")
const Sequelize = require("sequelize")
const Op = Sequelize.Op
const axios = require("axios")

const API_URL = "https://my-json-server.typicode.com/queenkjuul/biblioteca"

module.exports = {
  findAll: (req, res) => {
    axios
      .get(API_URL + "/books")
      .then((response) => {
        return response.data
      })
      .then((results) => res.status(200).json(results))
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })

    // old sequelize code retained for posterity
    // Book.findAll({
    //     include: [Author],
    // })
    //     .then((book) => res.json(book))
    //     .catch((err) => { console.log(err); res.status(500).json(err) });
  },
  findById: (req, res) => {
    axios
      .get(API_URL + "/books/" + req.params.id)
      .then((book) => res.status(200).json(book.data))
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })

    // old sequelize code retained for posterity
    // Book.findByPk(req.params.id, {
    //     include: [Author],
    // })
    //     .then((book) => res.json(book))
    //     .catch((err) => { console.log(err); res.status(500).json(err) });
  },
  search: (req, res) => {
    let query = req.params.query
    axios
      .get(API_URL + "/books?q=" + query)
      .then((response) => {
        return response.data
      })
      .then((results = []) => {
        res.status(200).json(results)
      })

    // old sequelize code retained for posterity
    // Book.findAll({
    //     where: {
    //         [Op.or]: [
    //             { 'title': { [Op.like]: `%${query}%` } },
    //             { '$Author.name$': { [Op.like]: `%${query}%` } }
    //         ]
    //     },
    //     include: [Author],
    // })
    //     .then((results = []) => { res.status(200).json(results) });
  },
  create: (req, res) => {
    const { book } = req.body
    console.log(req.body)
    axios
      .post(API_URL + "/books/", req.body)
      .then((results) => res.status(200).json("ok"))
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })

    // old sequelize code retained for posterity
    // const { author } = req.body;
    // Author.findOrCreate({
    //     where: { name: author },
    //     defaults: { name: author },
    // })
    //     .then((res) => ({ ...req.body, AuthorId: res[0].dataValues.id }))
    //     .then((newBook) => {
    //         Book.create(newBook)
    //             .then((book) => res.json(book))
    //             .catch((err) => { console.log(err); res.status(422).json(err) });
    //     })
    //     .catch((err) => { console.log(err); res.status(422).json(err) });
  },
  update: (req, res) => {
    axios
      .put(API_URL + "/books/" + req.params.id, req.body)
      .then((results) => res.status(200).json("ok"))
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
    // const { author } = req.body;
    // Author.findOrCreate({
    //     where: { name: author },
    //     defaults: { name: author },
    // })
    //     .then((authors) => ({ ...req.body, AuthorId: authors[0].dataValues.id }))
    //     .then((newBook) => {
    //         Book.update(newBook, {
    //             where: { id: req.params.id },
    //         })
    //             .then((book) => {
    //                 console.log(book);
    //                 Book.findByPk(book, { include: [Author] })
    //                     .then((item) => { console.log(item) });
    //                 res.json(Book.findByPk(book));
    //             })
    //             .catch((err) => { console.log(err); res.status(422).json(err) });
    //     })
    //     .catch((err) => { console.log(err); res.status(500).json(err) });
  },
  delete: (req, res) => {
    axios
      .delete(API_URL + "/books/" + req.params.id)
      .then((result) => res.status(200).json("ok"))
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
    // Book.destroy({
    //     where: { id: req.params.id },
    // })
    //     .then(() => res.end())
    //     .catch((err) => { console.log(err); res.status(500).json(err) });
  },
}
