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
        Book.findAll()
    },
    create: (req, res) => {
        const { 
            title, 
            synopsis, 
            pageCount, 
            rating, 
            publishDate, 
            coverimg, 
            author} = req.body;
        newBook = {
            title,
            synopsis,
            pageCount,
            rating,
            publishDate,
            coverimg,
        }
        console.log(req.body);
        Author.findOrCreate({
            where: { name: author },
            defaults: { name: author },
        })
        .then((res) => {
            console.log(res[0].dataValues.id);
            newBook = { ...newBook, AuthorId: res[0].dataValues.id };
            console.log(newBook);
        })
        .then(() => {
            Book.create(newBook)
            .then((book) => res.json(book))
            .catch((err) => {console.log(err); res.status(422).json(err)});
        })
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