const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// redirect to frontend
router.route('/')
    .get((req, res) => {
        res.sendFile(path.join(__dirname, '../../client/index.html'));
    });

module.exports = router;