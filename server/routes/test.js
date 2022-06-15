const router = require('express').Router();
const test   = require('./../models/test');

// @desc GET all answers
// @route GET 
// @access ALL
router.get('/', async (req, res) => {
    try {
        const total = await test.find().count();
        const answers = await test.find().populate('firstAnswer', 'secondAnswer');
        res.json({answers, total});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @desc POST all answers
// @route POST
// @access ALL
router.post('/', async (req, res) => {
    res.redirect('/test');
});

module.exports = router;
