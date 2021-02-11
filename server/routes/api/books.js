const router = require('express').Router();
const bookController = require('../../controllers/bookController');

router.route('/')
    .get(bookController.findAll)
    .post(bookController.create);

router.route('/:id')
    .get(bookController.findById)
    .put(bookController.update)
    .delete(bookController.delete);

router.route('/search/:query')
    .get(bookController.search);

module.exports = router;
