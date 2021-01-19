const { Book, Author } = require('../models');

module.exports = {
    findAll: (req, res) => {
        Book.findAll({
            include: [Author],
        })
        .then((book) => res.json(book))
        .catch((err) => {console.log(err); res.status(500).json(err)});
    }
}