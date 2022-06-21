const router = require('express').Router();

// @desc GET results
// @route /test/result
// @access ALL
router.get('/', async(req, res) => {
    try {
        res.json(req.query.answers);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
