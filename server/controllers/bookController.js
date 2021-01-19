const { Book, Author } = require('../models');

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
        
    },
    create: (req, res) => {
        Book.create(req.body)
        .then((book) => res.json(book))
        .catch((err) => {console.log(err); res.status(422).json(err)});
    },
    update: (req, res) => {
        Book.update(req.body, {
            where: {id: req.params.id},
        })
        .then(() => res.end())
        .catch((err) => {console.log(err); res.status(422).json(err)});
    },
    delete: (req, res) => {
        Book.destroy({
            where: {id: req.params.id},
        })
        .then(() => res.end())
        .catch((err) => {console.log(err); res.status(500).json(err)});
    }
}