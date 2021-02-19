const { Book, Author } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


module.exports = {
    findAll: (req, res) => {
        Book.findAll({
            include: [Author],
        })
        .then((book) => res.json(book))
        .catch((err) => {console.log(err); res.status(500).json(err)});
    },
    findById: (req, res) => {
        Book.findByPk(req.params.id, {
            include: [Author],
        })
        .then((book) => res.json(book))
        .catch((err) => {console.log(err); res.status(500).json(err)});
    },
    search: (req, res) => {
        let query = req.params.query;
        Book.findAll({
            where: {
                [Op.or]: [
                    { 'title': { [Op.like]: `%${query}%` }},
                    { '$Author.name$': { [Op.like]: `%${query}%`}}
                ]
            },
            include: [Author],
        })
        .then((results = []) => {res.status(200).json(results)});
    },
    create: (req, res) => {
        const { author } = req.body;
        Author.findOrCreate({
            where: { name: author },
            defaults: { name: author },
        })
        .then((res) => ({ ...req.body, AuthorId: res[0].dataValues.id }))
        .then((newBook) => {
            Book.create(newBook)
            .then((book) => res.json(book))
            .catch((err) => {console.log(err); res.status(422).json(err)});
        })
        .catch((err) => {console.log(err); res.status(422).json(err)});
    },
    update: (req, res) => {
        const { author } = req.body;
        Author.findOrCreate({
            where: { name: author },
            defaults: { name: author },
        })
        .then((authors) => ({ ...req.body, AuthorId: authors[0].dataValues.id }))
        .then((newBook) => {
            Book.update(newBook, {
                where: {id: req.params.id},
            })
            .then((book) => {
                console.log(book);
                Book.findByPk(book, { include: [Author] })
                .then((item) => {console.log(item)});
                res.json(Book.findByPk(book));
            })
            .catch((err) => {console.log(err); res.status(422).json(err)});
        })
        .catch((err) => {console.log(err); res.status(500).json(err)});
        
    },
    delete: (req, res) => {
        Book.destroy({
            where: {id: req.params.id},
        })
        .then(() => res.end())
        .catch((err) => {console.log(err); res.status(500).json(err)});
    }
}